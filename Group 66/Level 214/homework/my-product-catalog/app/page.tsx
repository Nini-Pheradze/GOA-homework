import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center text-slate-800">
        ჩვენი პროდუქცია
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100 flex flex-col"
          >
            <div className="relative h-48 w-full bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="p-5 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <span className="text-lg font-bold text-blue-600">
                  {product.price} ₾
                </span>
                <Link
                  href={`/products/${product.id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  ნახვა
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
