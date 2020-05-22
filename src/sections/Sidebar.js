import React, { useContext } from 'react'
import logo from '../assets/logo.svg'
import scroll from '../assets/scroll.svg'
import { NavContext } from '../context'

export default function Sidebar() {

    const { active, setActive } = useContext(NavContext);

    return (
        <div className="sidebar">
            <div className="logo">
                <a href="#">
                    <img src={logo}></img>
                </a>
            </div>

            <div className="menu">
                <ul>
                    <li><a href="#hero" className={(active === 'home' ? 'link active' : 'link')} onClick={() => setActive('home')}>Home</a></li>
                    <li><a href="#about" className={(active === 'about' ? 'link active' : 'link')} onClick={() => setActive('about')}>About me</a></li>
                    <li><a href="#what" className={(active === 'what' ? 'link active' : 'link')} onClick={() => setActive('what')}>What I do</a></li>
                    <li><a href="#work" className={(active === 'work' ? 'link active' : 'link')} onClick={() => setActive('work')}>My work</a></li>
                    <li><a href="#contact" className={(active === 'contact' ? 'link active' : 'link')} onClick={() => setActive('contact')}>Contact</a></li>
                </ul>
            </div>

            <div className="scroll">
                <a href="#about">
                    <img src={scroll} />
                    <div className="paragraph">Scroll down</div>
                </a>
            </div>
        </div>
    )
}
