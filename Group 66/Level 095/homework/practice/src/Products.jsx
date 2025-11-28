// შექმენით ერთი კომპონენტი სახელად Products რომელშიც გამოიყენებთ ორ კაუჭს useEffect, useState. თქვენი დავალებაა რომ https://fakestoreapi.com/products ამ API - ზე გააგზავნეთ მოთხოვნა (მოცემულ API - დან უნდა წამოიღოთ მონაცემები მხოლოდ მაშინ როდესაც კომპონენტი პირველად დარენდერდება), დაბრუნებული პასუხი კი შეინახეთ data მდგომარეობაში რომლის საწყისი მნიშვნელობა იქნება ცარიელი მასივის ტოლი, საბოლოოდ კი მოცემული პროდუქტები გამოიტანეთ ეკრანზე map - მეთოდის გამოყენებით 

import { useState } from "react";
import { useEffect } from "react";

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('https://fakestoreapi.com/products');

                const data = await response.json();
                setData(data);
            }catch(err) {
                console.log("Error", err)
            }
        }
        fetchData()
    }, []);

    return(
        <>
            {
                data.map((product, index) => (
                    <div key={index}>
                        <h1>Product Title: {product.title}</h1>
                        <p>Description: {product.description}</p>
                        <img src={product.image} width='200px'/>
                        <p>Price: {product.price}</p>
                    </div>
                ))
            }
        </>
    )
}

export default Products