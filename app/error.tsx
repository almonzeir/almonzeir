'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="text-center space-y-6">
                <div className="text-6xl">⚠️</div>
                <h2 className="text-2xl font-bold">Something went wrong!</h2>
                <p className="text-gray-400 max-w-md">
                    {error.message || 'An unexpected error occurred'}
                </p>
                <button
                    onClick={() => reset()}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                    Try again
                </button>
            </div>
        </div>
    );
}
