// app/page.tsx (Home Page)

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Home</h1>
      <Link href="/about" className="text-blue-500 underline">Go to About</Link>
      <Link href="/contact" className="text-blue-500 underline">Go to contact</Link>
      <Link href="/dashboard" className="text-blue-500 underline">Dashboard</Link>
      <Link href="/blog/rohith" className="text-white-500 underline">
  Read Blog Post
</Link>
<Link href="/user/rohith/settings" className="text-blue-500 underline">
  Go to Rohith’s Settings
</Link>

    </main>
  );
}


// In the app/ directory, the following files have special meaning:

// File	Purpose
// page.tsx	Renders the page for a given route (/, /about)
// layout.tsx	Wraps all child routes – similar to a persistent shell
// template.tsx	Like layout, but remounts on navigation
// loading.tsx	Shown during lazy loading of pages or data
// error.tsx	Catches errors in a route or layout
// not-found.tsx	Shown for 404s inside that route segment
// head.tsx	Injects <head> elements (like <title>)