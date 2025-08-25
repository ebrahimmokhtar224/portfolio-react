import Hero from "./components/2-Hero/Hero";
import Header from "./components/1-Header/Header";
import Main from "./components/3-Main/Main";
import Contact from "./components/4-Contact/Contact";
import Footer from "./components/5-Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [row, setRow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {  
      window.scrollY > 300 ? setRow(true) : setRow(false)
    })
  },[])
  return(
    <div id="up" className="container">
      <Header />
      <Hero/>
      <div className="divider"/>
      <Main/>
      <div className="divider"/>
      <Contact/>
      <div className="divider"/>
      <Footer/>
      {
            <a href="#up" style={{opacity: row? 1 : 0, transition: "1s"}}>
              <button className="up-row icon-keyboard_arrow_up" />
            </a>
      }
    </div>
  )
}

export default App;  
