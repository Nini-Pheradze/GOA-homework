import Link from "next/link";

// 1. პროდუქტის ტიპის განსაზღვრა
type Product = {
    id: number;
    name: string;
    category: string;
    subcategory: string;
    price: number;
};

// 2. 10 პროდუქტის მონაცემთა ბაზა (Mock Data)
const PRODUCTS: Product[] = [
    { id: 1, name: "iPhone 15", category: "electronics", subcategory: "phones", price: 999 },
    { id: 2, name: "Samsung Galaxy S24", category: "electronics", subcategory: "phones", price: 899 },
    { id: 3, name: "MacBook Pro 16", category: "electronics", subcategory: "laptops", price: 2499 },
    { id: 4, name: "Dell XPS 15", category: "electronics", subcategory: "laptops", price: 1799 },
    { id: 5, name: "Sony WH-1000XM5", category: "electronics", subcategory: "audio", price: 399 },
    { id: 6, name: "Nike Air Max", category: "clothes", subcategory: "shoes", price: 150 },
    { id: 7, name: "Adidas Ultraboost", category: "clothes", subcategory: "shoes", price: 180 },
    { id: 8, name: "Levi's 501 Jeans", category: "clothes", subcategory: "pants", price: 80 },
    { id: 9, name: "Over-sized T-Shirt", category: "clothes", subcategory: "shirts", price: 45 },
    { id: 10, name: "Leather Jacket", category: "clothes", subcategory: "coats", price: 250 },
];

interface PageProps {
    params: Promise<{
        segments: string[];
    }>;
}

export default async function ShopCategoryPage({ params }: PageProps) {
    const { segments } = await params;

    const mainCategory = segments[0]?.toLowerCase();
    const subCategory = segments[1]?.toLowerCase();

    // შევამოწმოთ, არსებობს თუ არა საერთოდ ასეთი მთავარი კატეგორია
    const categoryExists = PRODUCTS.some(
        (product) => product.category.toLowerCase() === mainCategory
    );

    // შევამოწმოთ, არსებობს თუ არა ასეთი ქვეკატეგორია (თუ URL-ში მითითებულია)
    const subcategoryExists = subCategory
        ? PRODUCTS.some(
            (product) =>
            product.category.toLowerCase() === mainCategory &&
            product.subcategory.toLowerCase() === subCategory
        )
        : true;

    // თუ კატეგორია ან ქვეკატეგორია არ არსებობს (ან 2 სეგმენტზე მეტია მითითებული)
    if (!categoryExists || !subcategoryExists || segments.length > 2) {
        return (
        <div style={{ padding: "40px", textAlign: "center" }}>
            <h1 style={{ color: "#e53e3e" }}>კატეგორია ვერ მოიძებნა</h1>
            <p>გთხოვთ შეამოწმოთ URL მისამართი.</p>
            <Link href="/shop/electronics" style={{ color: "#3182ce", textDecoration: "underline" }}>
            დაბრუნდით ელექტრონიკის გვერდზე
            </Link>
        </div>
        );
    }

    // პროდუქტების გაფილტვრა მიმდინარე URL სეგმენტების მიხედვით
    const filteredProducts = PRODUCTS.filter((product) => {
        const matchesCategory = product.category.toLowerCase() === mainCategory;
        const matchesSubcategory = subCategory
        ? product.subcategory.toLowerCase() === subCategory
        : true;

        return matchesCategory && matchesSubcategory;
    });

    return (
        <div style={{ padding: "24px", fontFamily: "sans-serif", maxWidth: "900px", margin: "0 auto" }}>
        {/* 1. აქტიური URL სეგმენტების (Breadcrumbs) გამოტანა */}
        <nav style={{ marginBottom: "20px", color: "#666" }}>
            <span> / shop</span>
            {segments.map((segment, index) => (
            <span key={index}> / <strong>{segment}</strong></span>
            ))}
        </nav>

        <h1 style={{ textTransform: "capitalize", marginBottom: "8px" }}>
            კატეგორია: {mainCategory}
        </h1>
        {subCategory && (
            <h3 style={{ textTransform: "capitalize", color: "#555", marginTop: 0 }}>
            ქვეკატეგორია: {subCategory}
            </h3>
        )}

        {/* 2. ნავიგაციის სწრაფი ბმულები ტესტირებისთვის */}
        <div style={{ display: "flex", gap: "10px", margin: "20px 0", flexWrap: "wrap" }}>
            <Link href="/shop/electronics">Electronics</Link> |
            <Link href="/shop/electronics/phones">Phones</Link> |
            <Link href="/shop/electronics/laptops">Laptops</Link> |
            <Link href="/shop/clothes/shoes">Shoes</Link> |
            <Link href="/shop/unknown-category">არასწორი ლინკი</Link>
        </div>

        <hr style={{ margin: "20px 0" }} />

        {/* 3. პროდუქტების სიის გამოტანა */}
        <h2>პროდუქტები ({filteredProducts.length})</h2>

        <div
            style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "16px",
            marginTop: "16px",
            }}
        >
            {filteredProducts.map((product) => (
            <div
                key={product.id}
                style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "16px",
                backgroundColor: "#f9f9f9",
                }}
            >
                <h3 style={{ margin: "0 0 8px 0" }}>{product.name}</h3>
                <p style={{ margin: "4px 0", color: "#666", fontSize: "14px" }}>
                კატეგორია: {product.category}
                </p>
                <p style={{ margin: "4px 0", color: "#666", fontSize: "14px" }}>
                ქვეკატეგორია: {product.subcategory}
                </p>
                <p style={{ fontWeight: "bold", fontSize: "18px", marginTop: "12px" }}>
                ${product.price}
                </p>
            </div>
            ))}
        </div>
        </div>
    );
}