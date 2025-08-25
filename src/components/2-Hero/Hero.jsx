import React from "react";
import Lottie from "lottie-react";
import { motion, scale } from "framer-motion";
import developerAnimation from "../../../public/animation/developer.json";
import './hero.css'

const Hero = () => {
    const headline = "Front End Developer React Js";
    return(
        <section className="row mt-5 pt-3">
            <div className="Right-hero col-lg-7">
                <div className="head pb-5">
                    <div className="image">
                        <motion.img
                        initial={{transform: "scale(0)"}}
                        animate={{transform: "scale(1)"}}
                        transition={{damping: 6, type: "spring", stiffness: 100}}
                        className="img-fluid" src="صوره ابراهيم-modified.png" alt="No Found Img" />
                    </div>
                    <div className="icon icon-verified"/>
                </div>
                <div className="text">
                    <motion.h1
                    initial={{transform: "translate(-100px)"}}
                    animate={{transform: "translate(0)"}}
                    transition={{damping: 5, type: "spring", stiffness: 80}}
                    className="mb-4">
                    Front End Developer React Js
                    </motion.h1>
                    <p>
                        I'm Ibrahim Mokhtar, a senior Media student at Al-Azhar University specializing in Radio and Television, and a Front-End Developer skilled in HTML, CSS, JavaScript, React, and Bootstrap, passionate about building responsive and user-friendly websites.
                    </p>
                </div>
                <div className="icons">
                    <ul className="list-unstyled d-flex">
                        <li><a href="https://wa.me/201069316009" className="icon-twitter" /></li>
                        <li><a href="https://www.instagram.com/ebrahim_mokhtar_22" className="icon-instagram" /></li>
                        <li><a href="https://github.com/ebrahimmokhtar224" className="icon-github"/></li>
                        <li><a href="http://www.linkedin.com/in/إبراهيم-مختار-5a3180298" className="icon-linkedin"/></li>
                    </ul>
                </div>
            </div>
            <div className="left-hero p-0 mt-5 d-flex justify-content-end align-items-end col-lg-5">
                <Lottie style={{height: "300"}} className="deveAnimation" animationData={developerAnimation} />
            </div>
        </section>
    )
}
export default Hero;