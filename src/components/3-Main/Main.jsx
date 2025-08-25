import { useState } from 'react';
import './main.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AnimatePresence, motion } from 'framer-motion';

const myProject = [
    {imgePath: "portfolio-react.png" ,link:"https://portfolio-reactjs-ebrahim.netlify.app/" , category: "react", title: "React Portfolio", description: "A simple and responsive website built using React Js"},
    {imgePath: "todo list.png" ,link:"https://todo-list-reactjs-ebrahim.netlify.app/" , category: "react", title: "To Do List Project", description: "A simple and responsive To-Do List App built with React, designed to add, manage, and delete tasks efficiently."},
    {imgePath: "yellow project.png" ,link:"https://incomparable-starlight-9617f6.netlify.app/" , category: "bootstrap", title: "Clean Personal Website User Interface", description: "A simple and responsive web template designedusing HTML, CSS, and Bootstrap. The layout is fully responsive"},
    {imgePath: "dewi project.png" ,link:"https://jolly-paletas-7a7af4.netlify.app/" , category: "bootstrap", title: "Landing Page", description: "Utilized Bootstrap’s grid system and utility classes to ensure cross-device compatibility and clean layout."},
    {imgePath: "blue project.png" ,link:"https://melodic-cat-eaa6cd.netlify.app/" , category: "bootstrap", title: "Personal Portfolio Website", description: "A simple personal portfolio website built using only HTML and CSS"},
    {imgePath: "white project.png" ,link:"https://velvety-sprite-22de2a.netlify.app/" , category: "css", title: "Landing Page", description: "A simple website built using only HTML and CSS"},
    {imgePath: "one project.png" ,link:"https://dashing-rabanadas-85b662.netlify.app/" , category: "css", title: "Web Template", description: "A simple website built using only HTML and CSS"},
]
// 
const Main = () => {
    const [ele, setEle] = useState("all")
    const [all, setAll] = useState(myProject)
    const handlerCategory = (category) => {
            setEle(category);
            const newArray = myProject.filter((item) => {
                return item.category === category
            })
            setAll(newArray)
    }
    return(
        <main className='row pt-3'>
            <div className='left-section col-lg-3 pb-5'>
                <ul className='list-unstyled list'>
                    <li className={ele === "all" ? "active" : ""}
                        onClick={() => {
                            setEle("all");
                            setAll(myProject);
                        }}>
                        All Projects
                    </li>
                    <li className={ele === "css" ? "active" : ""}
                        onClick={() => handlerCategory('css') }>
                        HTML & CSS
                    </li>
                    <li className={ele === "bootstrap" ? "active" : ""}
                    onClick={() => handlerCategory("bootstrap")}> 
                        Bootstrap
                    </li>
                    <li className={ele === "js" ? "active" : ""} 
                    onClick={() => {
                        handlerCategory("react");
                        setEle('js')
                    }}>
                        JavaScript
                    </li>
                    <li className={ele === "react" ? "active" : ""} 
                    onClick={() => handlerCategory('react')}>
                        React JS
                    </li>
                </ul>
            </div>
            <div className='right-section col-lg-9'>
                <div className='cards row'>
                    {
                        all.map((item) => {
                            return(
                                <motion.div 
                                layout
                                initial={{transform: "scale(0)"}}
                                animate={{transform: "scale(1)"}}
                                transition={{damping: 10, type: "spring", stiffness: 50}}
                                className='col-md-6 col-12 col-lg-4 project'>
                                    <AnimatePresence>
                                    <Card className='card'>
                                        <Card.Img variant="top" src={item.imgePath} />
                                        <Card.Body className='body'>
                                            <Card.Title className='title'>{item.title}</Card.Title>
                                            <Card.Text className='desc'>
                                            {item.description}
                                            </Card.Text>
                                            <div className='icons d-flex justify-content-between align-items-center'>
                                                <div className='icon'>
                                                <a className='icon-link' href={item.link}>
                                                </a>
                                                <a className='icon-github' href='#'>
                                                </a>
                                                </div>
                                                <a href={item.link} className='d-flex align-items-center'>more <span className='icon-arrow-right pt-1 ps-1'/></a>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    </AnimatePresence>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}
export default Main;