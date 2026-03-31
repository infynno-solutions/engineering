import defaultMdxComponents from 'fumadocs-ui/mdx';
import {
  Checklist,
  ChecklistDetail,
  ChecklistDetails,
  ChecklistItem,
  ResetChecklistButton,
} from '@/components/mdx/checklist';
import { Mermaid } from '@/components/mdx/mermaid';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Checklist,
    ChecklistDetail,
    ChecklistDetails,
    ChecklistItem,
    ResetChecklistButton,
    Mermaid,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
