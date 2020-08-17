import React, { useContext, useState, useEffect } from 'react'
import logo from '../assets/logo.svg'
import { NavContext } from '../context'

export default function Navbar() {

    const { active, setActive } = useContext(NavContext);
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let previousY = window.pageYOffset;
        window.onscroll = () => {
            if (window.pageYOffset > previousY && !open) setHidden(true);
            if (window.pageYOffset < previousY && !open && window.innerWidth > 750) setHidden(false);
            previousY = window.pageYOffset;
        }
    }, [open]);

    return (
        <nav className={(hidden) ? 'navbar hidden' : 'navbar'}>
            <div className="container">
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="logo"></img>
                    </a>
                </div>

                <div className={(open) ? 'menu open' : 'menu'}>
                    <ul>
                        <li><a href="#hero" className={(active === 'home' ? 'link active' : 'link')} onClick={() => { setActive('home'); setOpen(false) }}>Home</a></li>
                        <li><a href="#about" className={(active === 'about' ? 'link active' : 'link')} onClick={() => { setActive('about'); setOpen(false) }}>About me</a></li>
                        <li><a href="#what" className={(active === 'what' ? 'link active' : 'link')} onClick={() => { setActive('what'); setOpen(false) }}>What I do</a></li>
                        <li><a href="#work" className={(active === 'work' ? 'link active' : 'link')} onClick={() => { setActive('work'); setOpen(false) }}>My work</a></li>
                        <li><a href="#contact" className={(active === 'contact' ? 'btn-2 link active' : 'btn-2 link')} onClick={() => { setActive('contact'); setOpen(false) }}>Contact</a></li>
                    </ul>
                </div>

                <div className={(open) ? 'hamburger open' : 'hamburger'} onClick={() => { setOpen(!open); setHidden(open ? true : false) }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}
