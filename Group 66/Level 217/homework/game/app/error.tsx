'use client';

import { useEffect } from 'react';

export default function ErrorPage({
    error,
    reset,
    }: {
    error: Error & { digest?: string };
    reset: () => void;
    }) {
    useEffect(() => {
        // შეცდომის ლოგირება სერვერზე/კონსოლში
        console.error('Handled Error:', error);
    }, [error]);

    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center text-center space-y-4">
        <div className="text-5xl">⚠️</div>
        <h2 className="text-2xl font-bold text-red-400">Something went wrong!</h2>
        <p className="text-sm text-slate-400 max-w-md">
            {error.message || 'An error occurred while loading this page.'}
        </p>
        <button
            onClick={() => reset()}
            className="bg-red-600 hover:bg-red-500 text-white font-medium text-sm py-2 px-5 rounded-lg transition-colors"
        >
            Try again
        </button>
        </div>
    );
}