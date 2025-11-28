// 1) შექმენით კომპონენტი სახელად Nav, რომელსაც ატრიბუტების სახით გადასცემთ 3 მნიშვნელობას, title, textColor, bgColor, სათაური გამოიყენეთ h1 სთვის, შემდეგ textColor გამოიყენეთ ტექსტის ფერების შესაცვლელად  nav კომპონენტში და bgColor ნავ კომპონენტის უკანა ფერის შესაცვლელად (მოიძიეთ ინტერნეტში როგორ ხდება გასტილვა inlineსახით reactში და აუცილებლად ახსენით კომენტარებით რა არის props)

const Nav = (props) => {
    console.log(props);

    const handleCheck = () => {
        alert("Email Sent");
    }

    return (
        <nav style={{ color: props.bgColor }}>
            <h1 style={{ color: props.textColor }}>{props.title}</h1>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
            </ul>
            <button onClick={handleCheck}>Contact Us</button>
        </nav>
    )
}

export default Nav