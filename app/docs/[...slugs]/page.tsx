// app/docs/[...slug]/page.tsx

type DocsPageProps = {
  params: {
    slug: string[]; // an array of segments
  };
};

export default function DocsPage({ params }: DocsPageProps) {
  return (
    <main className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 p-6 bg-gray-100 border-r hidden md:block">
        <h2 className="text-xl font-bold mb-4">📚 Docs Navigation</h2>
        <ul className="space-y-2 text-blue-600">
          <li><a href="/docs/getting-started">Getting Started</a></li>
          <li><a href="/docs/guides/advanced/install">Install Guide</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">📝 Docs Page</h1>
        <p className="text-lg">
          Current path: 
          <code className="ml-2 px-2 py-1 bg-gray-200 rounded">
            /docs/{params.slug?.join("/")}
          </code>
        </p>
      </section>
    </main>
  );
}
