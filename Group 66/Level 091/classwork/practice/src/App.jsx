import Hero from "./Hero";

function App() {
    return (
        // შექმენით Hero ცომპონენტი, რომელსაც გადასცემთ ორ ატრიბუტს სათაური და აღწერა (title and description) შემდეგ გამოიძახეთ ეგ კომპონენტი კონტაინერ ელემენტის სახით და გადაეცით თავიდან ერთი ელემენტი და შემდეგ ორი ელემენტი, გატესტეთ და კომენტარებიტ ახსენით როგორ მუშაობს children კუთვნილება

        <Hero title = "Exapmle" description="lorem ipsum.">
            <p>Hello World!</p>
            <p>Wellcome!</p>
        </Hero>
    )
}

export default App;
