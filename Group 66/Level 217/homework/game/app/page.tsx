import Link from 'next/link';
import { GAMES } from '@/app/data/games';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Popular Games</h1>
        <p className="text-slate-400">Explore top rated video games across various genres.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GAMES.map((game) => (
          <div 
            key={game.id} 
            className="flex flex-col justify-between border border-slate-800 rounded-xl p-5 bg-slate-800/40 hover:border-slate-700 transition-all shadow-md"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="uppercase text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {game.genre}
                </span>
              </div>
              <h2 className="text-xl font-bold">{game.name}</h2>
              <p className="text-sm text-slate-400 line-clamp-2">{game.description}</p>
            </div>

            <div className="mt-6">
              <Link
                href={`/games/${game.id}`}
                className="inline-block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
