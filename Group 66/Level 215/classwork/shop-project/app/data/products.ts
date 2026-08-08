export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
}

export const products: Product[] = [
    {
        id: "1",
        name: "iPhone 15 Pro",
        price: 999,
        description: "Titanium design, A17 Pro chip, and a 48 MP main camera system for stunning photos."
    },
    {
        id: "2",
        name: "MacBook Air M2",
        price: 1199,
        description: "Ultra-thin design, M2 chip performance, and up to 18 hours of battery life."
    },
    {
        id: "3",
        name: "Sony PlayStation 5",
        price: 499,
        description: "Next-gen 4K gaming at up to 120 FPS with an ultra-high speed SSD."
    },
    {
        id: "4",
        name: "AirPods Pro 2",
        price: 249,
        description: "Active Noise Cancellation, Transparency mode, and Personalized Spatial Audio."
    },
    {
        id: "5",
        name: "Samsung Galaxy S24 Ultra",
        price: 1299,
        description: "Galaxy AI capabilities, integrated S Pen, and a 200 MP camera with 100x zoom."
    },
    {
        id: "6",
        name: "Apple Watch Series 9",
        price: 399,
        description: "Double tap gesture support, brighter display, and advanced health sensors."
    },
    {
        id: "7",
        name: "Dell XPS 15",
        price: 1499,
        description: "OLED display, Intel Core i7 processor, and NVIDIA RTX graphics for creators."
    },
    {
        id: "8",
        name: "JBL Charge 5",
        price: 179,
        description: "Powerful sound with deep bass, IP67 waterproof build, and 20 hours of playtime."
    },
    {
        id: "9",
        name: "iPad Air M1",
        price: 599,
        description: "M1 chip performance, Liquid Retina display, and Apple Pencil 2 support."
    },
    {
        id: "10",
        name: "Logitech MX Master 3S",
        price: 99,
        description: "Ergonomic wireless mouse with quiet clicks and an 8000 DPI track-anywhere sensor."
    }
];