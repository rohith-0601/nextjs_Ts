// app/dashboard/page.tsx
import Dashboard1 from "./dashboard";


export default function Dashboard() {
  return (
    <main className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">📊 Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Dashboard1 title="Users" value="1245" />
        <Dashboard1 title="Revenue" value="$93.2k" />
      </div>
    </main>
  );
}
