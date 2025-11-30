// შექმენით Hero ცომპონენტი, რომელსაც გადასცემთ ორ ატრიბუტს სათაური და აღწერა (title and description) შემდეგ გამოიძახეთ ეგ კომპონენტი კონტაინერ ელემენტის სახით და გადაეცით თავიდან ერთი ელემენტი და შემდეგ ორი ელემენტი, გატესტეთ და კომენტარებიტ ახსენით როგორ მუშაობს children კუთვნილება


import React from "react";


function Hero({ title, description, children }) {
    return (
        <section>
            <h1>{title}</h1>
            <p>{description}</p>

            <div>{children}</div>
        </section>
    );
} 

export default Hero;