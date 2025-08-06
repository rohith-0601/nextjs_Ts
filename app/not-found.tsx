import Link from "next/link";

function NotFound() {
  return (
    <main className="mih-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-50 ">
      <h1 className="text-6xl font-bold text-purple-600">404</h1>
      <p className="mt-4 text-2xl text-gray-800">Page Not Found</p>
      <p className="mt-2 text-gray-500">
        The page your're looking for doesn't exist or has been moved
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
