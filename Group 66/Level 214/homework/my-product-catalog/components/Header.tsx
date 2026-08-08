import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-slate-900 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-blue-400 transition">
            TechStore
            </Link>
            <nav>
            <Link href="/" className="hover:text-blue-400 transition">
                მთავარი
            </Link>
            </nav>
        </div>
        </header>
    );
};