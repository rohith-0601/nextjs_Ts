import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">📊 Dashboard</h1>
      <Link href="/dashboard/settings" className="text-blue-500 underline">
        Go to Settings
      </Link>
    </main>
  );
}
