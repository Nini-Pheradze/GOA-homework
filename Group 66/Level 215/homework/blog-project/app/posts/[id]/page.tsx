import posts from '@/app/data/posts.json';
import BackButton from '@/app/components/BackButton';

interface PostPageProps {
    params: Promise<{ id: string }>;
}

export default async function PostDetailPage({ params }: PostPageProps) {
    const { id } = await params;
    const post = posts.find((p) => p.id === id);

    if (!post) {
        return (
        <main style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px' }}>
            <BackButton />
            <h2>Post not found</h2>
        </main>
        );
    }

    return (
        <main style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px' }}>
        <BackButton />
        <article style={{ border: '1px solid #eee', padding: '24px', borderRadius: '8px' }}>
            <h1 style={{ marginTop: 0 }}>{post.title}</h1>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>{post.content}</p>
        </article>
        </main>
    );
}