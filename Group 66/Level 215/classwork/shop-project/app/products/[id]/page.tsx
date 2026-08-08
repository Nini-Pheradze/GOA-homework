import { products } from "@/app/data/products";
import NavigationButtons from "@/app/components/NavigationButtons";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }: any) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-2xl shadow-sm mt-10">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            Product ID: #{product.id}
        </span>
        <h1 className="text-2xl font-bold text-gray-800 mt-3">{product.name}</h1>
        <p className="text-xl font-bold text-blue-600 my-3">${product.price}</p>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">{product.description}</p>

        <NavigationButtons />
        </div>
    );
}