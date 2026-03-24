import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-16">
      <p className="mb-3 text-sm font-medium text-fd-muted-foreground">Infynno Engineering Handbook</p>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Build faster with shared engineering workflows</h1>
      <p className="mb-8 max-w-2xl text-fd-muted-foreground">
        Start with Quick Start, then use the tool guides for Cursor and CodeRabbit to keep implementation and PR
        review workflows consistent across projects.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/docs"
          className="rounded-xl border p-5 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        >
          <p className="text-sm font-semibold">Quick Start</p>
          <p className="mt-1 text-sm text-fd-muted-foreground">Get the essential docs and process overview.</p>
        </Link>

        <Link
          href="/docs/cursor/overview"
          className="rounded-xl border p-5 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        >
          <p className="text-sm font-semibold">Cursor Guide</p>
          <p className="mt-1 text-sm text-fd-muted-foreground">Use Cursor features, agents, rules, skills, and MCP.</p>
        </Link>

        <Link
          href="/docs/coderabbit"
          className="rounded-xl border p-5 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        >
          <p className="text-sm font-semibold">CodeRabbit Process</p>
          <p className="mt-1 text-sm text-fd-muted-foreground">
            Follow the standard setup and PR review workflow for enabled projects.
          </p>
        </Link>
      </div>
    </div>
  );
}
