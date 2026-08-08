"use client";

import { useRouter } from "next/navigation";

export default function NavigationButtons() {
    const router = useRouter();

    return (
        <div className="flex justify-center gap-4 mt-8 pt-6 border-t border-gray-200">
            <button onClick={() => router.back()} className="bg-gray-700 hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-lg transition cursor-pointer">Back</button>

            <button onClick={() => router.push("/")} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition cursor-pointer">Home</button>

            <button
            onClick={() => router.forward()} className="bg-gray-700 hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-lg transition cursor-pointer">Forward</button>
        </div>
    );
}