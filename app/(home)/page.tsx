import Link from 'next/link';
import { BookOpen, Bot, GitPullRequest, Layers, Server, Wrench } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-16">
      <p className="mb-3 text-sm font-medium text-fd-muted-foreground">Infynno Engineering Handbook</p>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Build faster with shared engineering workflows</h1>
      <p className="mb-8 max-w-2xl text-fd-muted-foreground">
        Start with Quick Start, then jump into Frontend, Backend, and DevOps stack guides. Use Cursor and
        CodeRabbit docs to keep implementation and PR review workflows consistent across projects.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link
          href="/docs"
          className="rounded-xl border p-5 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        >
          <div className="mb-2 flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <p className="text-sm font-semibold">Quick Start</p>
          </div>
          <p className="mt-1 text-sm text-fd-muted-foreground">Get the essential docs and process overview.</p>
        </Link>

        <Link
          href="/docs/frontend/frontend-stack"
          className="rounded-xl border p-5 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        >
          <div className="mb-2 flex items-center gap-2">
            <Layers className="h-4 w-4" />
            <p className="text-sm font-semibold">Frontend Stack</p>
          </div>
          <p className="mt-1 text-sm text-fd-muted-foreground">
            React, Next.js, Zustand, React Query, and shadcn/ui implementation guidance.
          </p>
        </Link>

        <Link
          href="/docs/backend"
          className="rounded-xl border p-5 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        >
          <div className="mb-2 flex items-center gap-2">
            <Server className="h-4 w-4" />
            <p className="text-sm font-semibold">Backend Stack</p>
          </div>
          <p className="mt-1 text-sm text-fd-muted-foreground">
            Node.js, Express, NestJS, and Better Auth standards and patterns.
          </p>
        </Link>

        <Link
          href="/docs/devops"
          className="rounded-xl border p-5 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        >
          <div className="mb-2 flex items-center gap-2">
            <Wrench className="h-4 w-4" />
            <p className="text-sm font-semibold">DevOps Stack</p>
          </div>
          <p className="mt-1 text-sm text-fd-muted-foreground">
            Docker, Kubernetes, and GitHub Actions deployment and automation guidance.
          </p>
        </Link>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Link
          href="/docs/cursor/overview"
          className="rounded-xl border p-5 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        >
          <div className="mb-2 flex items-center gap-2">
            <Bot className="h-4 w-4" />
            <p className="text-sm font-semibold">Cursor Guide</p>
          </div>
          <p className="mt-1 text-sm text-fd-muted-foreground">Use Cursor features, agents, rules, skills, and MCP.</p>
        </Link>
        <Link
          href="/docs/coderabbit"
          className="rounded-xl border p-5 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
        >
          <div className="mb-2 flex items-center gap-2">
            <GitPullRequest className="h-4 w-4" />
            <p className="text-sm font-semibold">CodeRabbit Process</p>
          </div>
          <p className="mt-1 text-sm text-fd-muted-foreground">
            Follow the standard setup and PR review workflow for enabled projects.
          </p>
        </Link>
      </div>
    </div>
  );
}
