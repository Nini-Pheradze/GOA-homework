import Link from 'next/link';
export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
        
        {/* იკონკა / ემოჯი დიდი ზომის ტექსტით (text-6xl) */}
        <div className="text-6xl">🎮</div>
        
        {/* 404 შეცდომის მთავარი სათაური */}
        <h1 className="text-4xl font-extrabold text-slate-100">404 - Not Found</h1>
        
        {/* განმარტებითი ტექსტი მომხმარებლისთვის (მაქსიმალური სიგანით max-w-md) */}
        <p className="text-slate-400 max-w-md">
            The game or resource you are looking for doesn't exist or has been moved.
        </p>

        {/* 4. NAVIGATION LINK (მთავარ გვერდზე დაბრუნების ღილაკი):
            - href="/" — გადადის საიტის მთავარ (Home) გვერდზე.
            - Tailwind სტილები აძლევს ღილაკის იერსახეს (იასამნისფერი ფონი, მომრგვალებული კუთხები, Hover ეფექტი). */}
        <Link 
            href="/"
            className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold py-2.5 px-6 rounded-lg transition-colors"
        >
            Return to Home Page
        </Link>

        </div>
    );
}