'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useId, useState } from 'react';

const STORAGE_PREFIX = 'handbook.checklist:v1:';

/** Dispatched after clearing checklist keys for a pathname; ChecklistItem listens to sync UI. */
const CHECKLIST_RESET_EVENT = 'handbook-checklist-reset';

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 96);
}

export function Checklist({ children }: { children: ReactNode }) {
  return (
    <ul className="not-prose my-4 list-none space-y-2.5 pl-0">{children}</ul>
  );
}

/** One checklist row: real checkbox + title + optional details. State persists in localStorage. */
export function ChecklistItem({
  title,
  id: idProp,
  children,
}: {
  title: string;
  /** Optional stable key segment; avoids collisions if titles repeat. */
  id?: string;
  children?: ReactNode;
}) {
  const pathname = usePathname() ?? '/';
  const reactId = useId();
  const slug = idProp ?? slugify(title);
  const storageKey = `${STORAGE_PREFIX}${pathname}:${slug}`;

  const [checked, setChecked] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      setChecked(raw === '1');
    } catch {
      setChecked(false);
    }
    setHydrated(true);
  }, [storageKey]);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ pathname: string }>).detail;
      if (detail?.pathname === pathname) setChecked(false);
    };
    window.addEventListener(CHECKLIST_RESET_EVENT, handler);
    return () => window.removeEventListener(CHECKLIST_RESET_EVENT, handler);
  }, [pathname]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.checked;
      setChecked(next);
      try {
        localStorage.setItem(storageKey, next ? '1' : '0');
      } catch {
        // ignore quota / private mode
      }
    },
    [storageKey],
  );

  const inputId = `checkitem-${slug}-${reactId.replace(/:/g, '')}`;

  return (
    <li className="rounded-lg border border-fd-border bg-fd-card/40 dark:bg-fd-card/30">
      <div className="flex gap-3 p-3.5">
        <input
          id={inputId}
          type="checkbox"
          checked={hydrated ? checked : false}
          onChange={onChange}
          className="not-prose mt-0.5 size-4 shrink-0 cursor-pointer rounded border-2 border-fd-border bg-fd-background text-fd-primary accent-fd-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary/50"
        />
        <div className="min-w-0 flex-1 space-y-4">
          <label
            htmlFor={inputId}
            className="m-0 block cursor-pointer font-semibold leading-snug text-fd-foreground"
          >
            {title}
          </label>
          {children ? (
            <div className="text-sm leading-snug text-fd-foreground/90 [&_a]:text-fd-primary [&_a]:underline">
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}

/** Sub-points under a ChecklistItem (keeps checklist scannable). */
export function ChecklistDetails({ children }: { children: ReactNode }) {
  return (
    <ul className="m-0 list-none space-y-1 ps-0">
      {children}
    </ul>
  );
}

export function ChecklistDetail({ children }: { children: ReactNode }) {
  return (
    <li className="relative ps-4 leading-snug text-fd-foreground/85 before:absolute before:top-1.5 before:inset-s-0 before:size-1 before:rounded-full before:bg-fd-primary/70">
      {children}
    </li>
  );
}

/** Clears saved checklist state for the current docs page and unchecks all rows. */
export function ResetChecklistButton() {
  const pathname = usePathname() ?? '/';

  const reset = useCallback(() => {
    const prefix = `${STORAGE_PREFIX}${pathname}:`;
    try {
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key?.startsWith(prefix)) localStorage.removeItem(key);
      }
    } catch {
      // ignore
    }
    window.dispatchEvent(
      new CustomEvent(CHECKLIST_RESET_EVENT, { detail: { pathname } }),
    );
  }, [pathname]);

  return (
    <button
      type="button"
      onClick={reset}
      className="inline-flex items-center rounded-md border border-fd-border bg-fd-background px-3 py-1.5 text-sm font-medium text-fd-foreground shadow-sm transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-primary/50"
    >
      Reset checklist
    </button>
  );
}
