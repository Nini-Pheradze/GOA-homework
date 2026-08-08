'use client';

import { useRouter } from 'next/navigation';

interface Post {
    id: string;
    title: string;
    content: string;
}

interface PostListProps {
    posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
    const router = useRouter();

    const handleNavigate = (id: string) => {
        router.push(`/posts/${id}`);
    };

    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map((post) => (
            <li key={post.id} onClick={() => handleNavigate(post.id)} style={{ padding: '16px', marginBottom: '12px', border: '1px solid #ccc', borderRadius: '8px', cursor: 'pointer',}}>
                <h2 style={{ margin: '0 0 8px 0' }}>{post.title}</h2>
                <p style={{ margin: 0, color: '#555' }}>{post.content.substring(0, 50)}...</p>
            </li>
        ))}
        </ul>
    );
}