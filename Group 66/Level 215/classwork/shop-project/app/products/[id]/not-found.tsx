import Link from "next/link";

export default function ProductNotFound() {
    return (
        <div className="max-w-md mx-auto text-center py-10 px-4 bg-white rounded-2xl border border-gray-200 mt-10">
        <h2 className="text-4xl font-bold text-red-500 mb-2">404</h2>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Not Found!</h3>
        <p className="text-gray-500 text-sm mb-6">Product Not Found By this Id!</p>
        <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition text-sm">Return to Home Page</Link>
        </div>
    );
}