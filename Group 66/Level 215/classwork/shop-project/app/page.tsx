import Link from "next/link";
import { products } from "./data/products";
import NavigationButtons from "@/app/components/NavigationButtons";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Online Store</h1>
        <div className="flex gap-4 text-sm font-medium">
          <Link href="/about" className="text-blue-600 hover:underline">
            About US
          </Link>
        </div>
      </div>

      {/* 10 pr9ducts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-500 transition block">
            <span className="text-xs font-semibold text-gray-400">ID: #{product.id}</span>
            <h2 className="text-base font-semibold text-gray-800 mt-1">{product.name}</h2>
            <p className="text-blue-600 font-bold mt-2">${product.price}</p>
          </Link>
        ))}
      </div>
      <NavigationButtons />
    </div>
  );
}
