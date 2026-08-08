'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();

    return (
        <button
        onClick={() => router.back()}
        style={{ padding: '8px 16px', marginBottom: '16px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #0070f3', background: '#0070f3', color: '#fff',}}>Back</button>
    );
}