export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
}

export const products: Product[] = [
    {
        id: "1",
        name: "უსადენო ყურსასმენები",
        price: 299,
        description: "მაღალი ხარისხის ხმა და ხმაურის ჩახშობის (Noise Cancelling) ფუნქცია.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    },
    {
        id: "2",
        name: "ჭკვიანი საათი",
        price: 450,
        description: "თვალყური ადევნეთ თქვენს ჯანმრთელობას, ვარჯიშებსა და შეტყობინებებს real-time რეჟიმში.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    },
    {
        id: "3",
        name: "პორტატული დინამიკი",
        price: 180,
        description: "წყალგამძლე დიზაინი და ძლიერი ბასი თქვენი მოგზაურობისთვის.",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80",
    },
];