import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-sm text-[var(--accent)]">404</p>
        <h1 className="font-display mt-3 text-3xl font-semibold text-[var(--ink)]">Page not found</h1>
        <p className="mt-3 text-[var(--ink-2)]">This page does not exist.</p>
        <Link href="/" className="btn btn-accent mt-8">
          Back home
        </Link>
      </div>
    </main>
  );
}
