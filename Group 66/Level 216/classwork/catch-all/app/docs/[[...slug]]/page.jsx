import Link from 'next/link';

export default async function DocsPage({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug;

    if (!slug || slug.length === 0) {
        return (
        <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Documentation Home</h1>
            <p>Welcome</p>

            <h2>NAv links:</h2>
            <ul>
            <li>
                <Link href="/docs/javascript">JavaScript Docs</Link>
            </li>
            <li>
                <Link href="/docs/javascript/functions">JavaScript - Functions</Link>
            </li>
            <li>
                <Link href="/docs/nextjs/routing/dynamic-routes">
                Next.js - Routing - Dynamic Routes
                </Link>
            </li>
            </ul>
        </main>
        );
    }

    const breadcrumbItems = [
        { label: 'Docs', path: '/docs' },
        ...slug.map((segment, index) => {
        const url = `/docs/${slug.slice(0, index + 1).join('/')}`;
        const formattedLabel = segment.charAt(0).toUpperCase() + segment.slice(1);
        return { label: formattedLabel, path: url };
        }),
    ];

    return (
        <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <nav style={{ marginBottom: '1.5rem', color: '#555' }}>
            {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
                <span key={item.path}>
                {isLast ? (
                    <strong>{item.label}</strong>
                ) : (
                    <>
                    <Link href={item.path} style={{ color: '#0070f3' }}>
                        {item.label}
                    </Link>
                    {' > '}
                    </>
                )}
                </span>
            );
            })}
        </nav>

        <h1>Documentation</h1>
        <section style={{ marginTop: '1rem' }}>
            {slug.map((segment, index) => (
            <p key={index}>
                <strong>Section {index + 1}:</strong> {segment}
            </p>
            ))}
        </section>
        </main>
    );
}