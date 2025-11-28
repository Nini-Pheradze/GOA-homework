// 2) შექმენით React - ის პროექტი, შექმენით ორი კომპონენტი 1.AboutMe.jsx, 2.UserStatus.jsx - UserStatus კომპონენტში შექმენით ერთი ცვლადი სახელად isLoggedIn რომელშიც შეინახავთ მნიშვნელობას, ან true ან false, ternary operator - ის გამოყენებით შეამოწმეთ თუ isLoggedIn - ის მნიშვნელობა არის true მაგ შემთხვევაში გამოიძახეთ AboutMe კომპონენტი სხვა შემთხვევაში კი გამოიტანეთ რომ You are not logged in to your account

// AboutMe კომპონენტში უნდა იყოს მოცემული ინფორმაცია თქვენს შესახებ, გაალამაზეთ საიტი ფოტოებით, გამოიყენეთ დღევანდელ გაკვეთილზე განხილული {} მაგალითი <img src={} />

function AboutMe() {
    const myImg = 'https://www.facebook.com/photo?fbid=849378614212534&set=a.649547520862312';
    return (
        <div>
            <h2>About Me</h2>
            <p>Hello, I am Nini Pheradze!</p>
            <img src={myImg} />
        </div>
    )
}

export default AboutMe;