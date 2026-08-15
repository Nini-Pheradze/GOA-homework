import Link from 'next/link';

interface Props {
    params: Promise<{ slug?: string[] }>;
};

export default async function GuidesPage({ params } : Props) {
    const { slug } = await params;

    if (!slug || slug.length === 0) {
        return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Game Guides</h1>
            <p className="text-slate-400">Select a guide path or write a custom URL structure.</p>

            {/* რეკომენდებული/სანიმუშო URL-ების სია */}
            <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-300">Try these routes:</p>
            <ul className="list-disc list-inside text-sm text-indigo-400 space-y-1">
                <li>
                {/* გადადის /guides/minecraft მისამართზე (1 სეგმენტი) */}
                <Link href="/guides/minecraft">/guides/minecraft</Link>
                </li>
                <li>
                {/* გადადის 2 დონის სიღრმეზე: /guides/minecraft/building */}
                <Link href="/guides/minecraft/building">/guides/minecraft/building</Link>
                </li>
                <li>
                {/* გადადის 3 დონის სიღრმეზე: /guides/minecraft/building/house */}
                <Link href="/guides/minecraft/building/house">/guides/minecraft/building/house</Link>
                </li>
            </ul>
            </div>
        </div>
        );
    }

    const mainGame = slug[0];

    return (
        <div className="space-y-6">
        {/* სათაურის სექცია */}
        <div className="space-y-2">
            <h1 className="text-3xl font-bold capitalize">
            {/* პირველი სეგმენტის (თამაშის სახელის) გამოჩენა */}
            Game: <span className="text-indigo-400">{mainGame}</span>
            </h1>
            <p className="text-sm text-slate-400">Nested route explorer for game guides.</p>
        </div>

        {/* DYNAMIC BREADCRUMBS / PATH VISUALIZER (დინამიკური ნავიგაციის ზოლი):
            მომხმარებელს აჩვენებს მისამართის იერარქიას (მაგ: Guides → minecraft → building → house) */}
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-6 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Path Visualizer</h2>
            
            <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-sm font-medium">
            {/* საწყისი ბმული მთავარ /guides გვერდზე */}
            <Link href="/guides" className="text-slate-400 hover:text-white transition-colors">
                Guides
            </Link>
            
            {/* ARRAY METHOD (.map):
                გადაუვლის `slug` მასივის თითოეულ სეგმენტს დინამიკური Breadcrumb-ის ასაგებად */}
            {slug.map((segment, index) => {
                // ARRAY METHODS (.slice და .join):
                // .slice(0, index + 1) იღებს მასივის ნაწილს მიმდინარე ინდექსამდე.
                // .join('/') აერთებს მათ და ქმნის სრულ URL გზას.
                // მაგალითად, მე-2 ელემენტისთვის შექმნის: "/guides/minecraft/building"
                const currentPath = `/guides/${slug.slice(0, index + 1).join('/')}`;
                
                // ამოწმებს, არის თუ არა ეს სეგმენტი URL-ის ბოლო ელემენტი
                const isLast = index === slug.length - 1;

                return (
                <div key={index} className="flex items-center gap-2">
                    {/* გამყოფი ისარი სეგმენტებს შორის */}
                    <span className="text-slate-600">→</span>
                    
                    {/* TERNARY OPERATOR (პირობითი რენდერი):
                        თუ ეს არის ბოლო სეგმენტი (isLast) -> აღარ ვქმნით ბმულს, უბრალოდ ვასტილიზებთ როგორც აქტიურ გვერდს.
                        თუ არ არის ბოლო -> ვქმნით <Link> ბმულს შესაბამის currentPath-ზე გადასასვლელად. */}
                    {isLast ? (
                    <span className="capitalize text-indigo-400 font-bold bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                        {segment}
                    </span>
                    ) : (
                    <Link href={currentPath} className="capitalize text-slate-300 hover:text-indigo-300 transition-colors">
                        {segment}
                    </Link>
                    )}
                </div>
                );
            })}
            </nav>
        </div>
        </div>
    );
}


