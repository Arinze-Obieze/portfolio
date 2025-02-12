import Link from "next/link";


export default function NotFound() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Oops! The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </section>
  );
}
