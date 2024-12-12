import './styles/App.css';

import {useEffect, useRef, useState} from 'react'
import Header from "./components/header/Header"
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if(window.scrollY > 0) setScrolling(true);
        else setScrolling(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })

  return (
    <div className="wraper">
        <Header scrolling={scrolling} />
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
