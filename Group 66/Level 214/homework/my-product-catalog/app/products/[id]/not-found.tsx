import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-center py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">404</h2>
        <p className="text-xl text-gray-600 mb-6">პროდუქტი ვერ მოიძებნა</p>
        <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition"
        >
            მთავარ გვერდზე დაბრუნება
        </Link>
        </div>
    );
}