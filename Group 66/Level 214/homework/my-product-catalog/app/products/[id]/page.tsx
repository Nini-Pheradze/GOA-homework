import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/app/data/products";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6 md:p-8">
        <Link 
            href="/" 
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mb-6"
        >
            ← უკან დაბრუნება
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 w-full rounded-xl overflow-hidden bg-gray-100">
            <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
            />
            </div>

            <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-2xl font-bold text-blue-600 mb-6">{product.price} ₾</p>
            <div className="border-t border-b border-gray-100 py-4 mb-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">აღწერა</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition">
                კალათაში დამატება
            </button>
            </div>
        </div>
        </div>
    );
}