import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
    const img1 = 'download.jpg'
    return (
        <div>
            <Nav />
            <About />
            <Contact />
            <Footer />

            <img src="{img1}" alt="img" />
        </div>
    )
};

export default App
