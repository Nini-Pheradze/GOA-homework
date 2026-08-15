import { notFound } from "next/navigation";
import Link from 'next/link';
import { GAMES, VALID_GENRES } from '@/app/data/games';

interface Props {
    params: Promise<{ genre: string}>;
};


export default async function GenrePage({ params }: Props) {
    const { genre } = await params;

    // case-insensitive-obistvis
    const normalizedGenre = genre.toLowerCase();

    if (!VALID_GENRES.includes(normalizedGenre)) {
        notFound();
    }
    // GAMES მასივიდან ტოვებს მხოლოდ იმ თამაშებს, რომელთა `genre` ემთხვევა არჩეულ `normalizedGenre`-ს.
    const filteredGames = GAMES.filter((g) => g.genre === normalizedGenre);

    return (
        <div className="space-y-6">
        
        {/* HEADER სექცია: ჟანრის დასახელება და ნაპოვნი თამაშების რაოდენობა */}
        <header className="space-y-2">
            <h1 className="text-3xl font-bold capitalize">
            Genre: <span className="text-indigo-400">{normalizedGenre}</span>
            </h1>
            {/* .length თვისება გვიჩვენებს გაფილტრული თამაშების რაოდენობას */}
            <p className="text-slate-400">Found {filteredGames.length} game(s) in this genre.</p>
        </header>

        {/* ჟანრების სწრაფი გადამრთველი (NAVIGATION TABS) */}
        <div className="flex gap-2 border-b border-slate-800 pb-4">
            {/* ARRAY METHOD (.map):
                გადაუვლის VALID_GENRES მასივს და თითოეული ჟანრისთვის ქმნის გადასასვლელ ლინკს (Tab-ს) */}
            {VALID_GENRES.map((g) => (
            <Link
                key={g} // key ინდექსი React-ის ოპტიმიზაციისთვის
                href={`/genres/${g}`}
                // TEMPLATE LITERALS & TERNARY OPERATOR (დინამიკური სტილები):
                // ამოწმებს, არის თუ არა ეს კონკრეტული Tab ამჟამად აქტიური ჟანრი (g === normalizedGenre).
                // თუ აქტიურია -> ეძლევა იასამნისფერი ფონი (`bg-indigo-600 text-white`).
                // თუ არა -> ეძლევა მუქი ნაცრისფერი ფონი (`bg-slate-800`).
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                g === normalizedGenre 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                }`}
            >
                {g}
            </Link>
            ))}
        </div>

        {/* თამაშების ბარათების ბადე (GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ARRAY METHOD (.map):
                გადაუვლის გაფილტრულ თამაშებს (filteredGames) და თითოეულისთვის რენდერავს ბარათს */}
            {filteredGames.map((game) => (
            <div key={game.id} className="border border-slate-800 p-5 rounded-xl bg-slate-800/40">
                {/* თამაშის სახელი */}
                <h2 className="text-lg font-bold">{game.name}</h2>
                {/* თამაშის მოკლე აღწერა */}
                <p className="text-sm text-slate-400 mt-2">{game.description}</p>
                {/* ბმული, რომელიც გადადის ამ თამაშის დეტალურ გვერდზე (/games/[id]) */}
                <Link 
                href={`/games/${game.id}`}
                className="inline-block mt-4 text-xs font-semibold text-indigo-400 hover:underline"
                >
                View Game Page →
                </Link>
            </div>
            ))}
        </div>
        
        </div>
    );
}