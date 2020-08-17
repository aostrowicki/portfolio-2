import React, { useContext, useEffect, useRef } from 'react'
import logo from '../assets/logo.svg'
import scroll from '../assets/scroll.svg'
import { NavContext } from '../context'
import gsap from 'gsap'

export default function Sidebar() {

    const { active, setActive } = useContext(NavContext);
    const side = useRef(null);
    const ul = useRef(null);
    const menu = useRef(null);

    useEffect(() => {
        gsap.set(side.current, { autoAlpha: 0, transform: 'translateX(-100%)' });
        gsap.set(ul.current.children, { autoAlpha: 0, transform: 'translateX(-20%)' });
        gsap.set(menu.current.children[0], { autoAlpha: 0, transform: 'translateX(-10px)' });

        const tl = gsap.timeline({ defaults: { ease: 'power1.inOut' } });

        tl.to(side.current, { transform: 'translateX(0)', autoAlpha: 1, duration: 0.6 })
            .to(menu.current.children[0], { autoAlpha: 1, transform: 'translateX(0)', duration: 0.2 }, '-=0.1')
            .to(ul.current.children, { transform: 'translateX(0)', autoAlpha: 1, duration: 0.25, stagger: 0.05 }, '-=0.3');
    }, []);

    return (
        <div className="sidebar" ref={side}>
            <div className="logo">
                <a href="#">
                    <img src={logo} alt="logo"></img>
                </a>
            </div>

            <div className="menu" ref={menu}>
                <span></span>
                <ul ref={ul}>
                    <li><a href="#hero" className={(active === 'home' ? 'link active' : 'link')} onClick={() => setActive('home')}>Home</a></li>
                    <li><a href="#about" className={(active === 'about' ? 'link active' : 'link')} onClick={() => setActive('about')}>About me</a></li>
                    <li><a href="#what" className={(active === 'what' ? 'link active' : 'link')} onClick={() => setActive('what')}>What I do</a></li>
                    <li><a href="#work" className={(active === 'work' ? 'link active' : 'link')} onClick={() => setActive('work')}>My work</a></li>
                    <li><a href="#contact" className={(active === 'contact' ? 'link active' : 'link')} onClick={() => setActive('contact')}>Contact</a></li>
                </ul>
            </div>

            <div className="scroll">
                <a href={
                    (active === 'home' ? '#about' :
                        (active === 'about' ? '#what' :
                            (active === 'what' ? '#work' :
                                (active === 'work' ? '#contact' :
                                    (active === 'contact' ? '#footer' : ''
                                    )))))
                }>
                    <img src={scroll} />
                    <div className="paragraph">Scroll down</div>
                </a>
            </div>
        </div>
    )
}
