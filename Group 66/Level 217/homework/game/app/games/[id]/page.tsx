// Link aris next.js - is komponenti, client-side gverdebs shoris navigaciistvis
import Link from 'next/link';

// GAMES - tamashebis masivi local filedan
import { GAMES } from '@/app/data/games';
import { notFound } from 'next/navigation';


// params aris Promise - asinqronuli obieqti, romelic url-is dinamikur parametrebs sheicavs
interface Props {
    params: Promise<{ id: string }>;
};


export default async function GameDetailPAge({ params } : Props) {
    // url-dan igebs dynamic id-is 
    const { id } = await params;

    // edzebs GAMES masivshi pirvelive tamashs, romlis id-c emtxveva url-is id-s
    const game = GAMES.find((g) => g.id === id);

    // 404-is shemowmeba, tu aseti id-it tamashi ver moidzebna
    if (!game) {
        notFound();
    }

    // tailwind CSS

    return (
        // <article> — სემანტიკური HTML ტეგი კონტენტისთვის. Tailwind კლასებით განსაზღვრულია მაქს. სიგანე, ცენტრირება, ფონი, ჩარჩო და დაშორებები.
        <article className="max-w-2xl mx-auto space-y-6 bg-slate-800/30 border border-slate-800 p-8 rounded-2xl">
        
        {/* მთავარ გვერდზე დაბრუნების ბმული */}
        <Link href="/" className="text-xs text-indigo-400 hover:underline">
            ← Back to all games
        </Link>
        
        {/* თამაშის სათაური და ჟანრის Bedge */}
        <div className="space-y-2">
            {/* თამაშის ჟანრის გამოჩენა (პატარა ლურჯი Badge-ის სახით) */}
            <span className="uppercase text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            {game.genre}
            </span>
            {/* თამაშის დასახელება */}
            <h1 className="text-3xl font-extrabold">{game.name}</h1>
        </div>

        {/* თამაშის აღწერილობები */}
        <div className="prose prose-invert text-slate-300">
            {/* მოკლე აღწერა */}
            <p className="text-lg leading-relaxed">{game.description}</p>
            {/* სრული დეტალები (თუ არსებობს) */}
            <p className="text-sm text-slate-400 mt-4">{game.fullDetails}</p>
        </div>

        {/* ქვედა სექცია (Footer): გადასვლა კონკრეტული ჟანრის გვერდზე */}
        <div className="pt-4 border-t border-slate-800">
            {/* დინამიკური ბმული - გადადის /genres/[genre] გვერდზე (მაგ. /genres/rpg) */}
            <Link 
            href={`/genres/${game.genre}`}
            className="text-xs text-slate-400 hover:text-indigo-400 transition-colors"
            >
            More games in <span className="font-semibold text-indigo-400 uppercase">{game.genre}</span> →
            </Link>
        </div>
        </article>
    );
};

