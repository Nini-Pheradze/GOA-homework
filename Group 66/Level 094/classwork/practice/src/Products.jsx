// შექმენით ფაილი სახელად Products.jsx, მასში შექმენით კომპონენტი Products, შექმენით მდგომარეობა რომელიც ინახავს მასივს ორი პროდუქტით Product 1, Product 2, თქვენი დავალებაა ღილაკზე დაკლიკებაისას შექმნათ ახალი პროდუქტი ახალი რიცხვით მაგ: Product 3, Product 4 და მასივში დამატებული ყოველი ახალი მნიშვნელობა ეკლრანზე გამოჩნდეს ცვლილების (დამატების) თანავე

import { useState } from "react";

function Products() {
    const [products, setProducts] = useState('product 1', "product 2");

    const handleClick = () => {
        const newProduct = 'Product ${products.length + 1}';

        setProducts([...products, newProduct]);
    }

    return (
        <section>
            <ul>
                {
                    products.map(product => {
                        return <li key={product}></li>
                    })
                }
            </ul>

            <button onClick={handleClick}>Add</button>
        </section>
    )
}

export default Products;