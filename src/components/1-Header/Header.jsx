import React, { useEffect, useState } from "react";
import './header.css'

const Header = () => {
    const [showModel, setShowModel] = useState(false)
    // const [theme, setTheme] = useState("dark") كده هوه دائما في حالته الابتدائيه هيكون دااارك
    const [theme, setTheme] = useState(window.localStorage.getItem("currentMode") ?? "dark")// لازم اضيف قيمه افتراضيه عشان لو اللوكل ستوردج فااضي ميعملش مشكله
    useEffect(()=> {
        if (theme === "light") {
            document.body.classList.remove("dark")
            document.body.classList.add("light")
        } else if (theme === "dark") {
            document.body.classList.remove("light")
            document.body.classList.add("dark")
        }
    },[theme])
    return(
        <header className="mt-4 d-flex justify-content-between align-items-center">
            <button className="menu icon-menu" onClick={() => {setShowModel(true)}}/>
            <div/>
            <nav>
                <ul className="list-unstyled d-flex mb-0">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Articles</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Speaking</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
            <button className="mode"
                onClick={() => {
                    if (theme === 'light') {
                        // setTheme('dark')
                        // set dark in local storage
                        window.localStorage.setItem("currentMode", 'dark')
                        // get dark from local storage in setTheme
                        setTheme(window.localStorage.getItem("currentMode"))
                    } else if (theme === 'dark') {
                        // setTheme("light")
                        // set light in local storage
                        window.localStorage.setItem("currentMode", 'light')
                        // get light from local storage in setTheme
                        setTheme(window.localStorage.getItem("currentMode"))
                    }
                }} 
                >
                    {theme === "dark"? (<span className="icon-moon-o"/>) : (<span className="icon-sun"/>)}
            </button>            
        {
            showModel &&(
                    <div className="fixed">
                        <ul className="model list-unstyled">
                            <li> <button className="icon-close" onClick={() => {setShowModel(false)}}/></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Articles</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Speaking</a></li>
                            <li><a href="#">Uses</a></li>
                        </ul>
                    </div>
            )
        }
        </header>
    )
}
export default Header;