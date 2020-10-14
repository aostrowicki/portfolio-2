import React, { useState, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import github from '../assets/github.svg'
import close from '../assets/close.svg'
import gsap from 'gsap'

export default function Website({ title, img, href, githref, tools, work }) {

    const swiper = useMediaQuery({ maxWidth: 900 })
    const [showPopup, setShowPopup] = useState(false);
    const pop = useRef(null);

    useEffect(() => {
        showPopup ? document.querySelector('body').style.overflowY = "hidden" : document.querySelector('body').style.overflowY = "auto";
        showPopup ? document.querySelector('body').style.marginRight = "12px" : document.querySelector('body').style.marginRight = "0px";
        gsap.set(pop.current, { autoAlpha: 0 });
        showPopup ? gsap.to(pop.current, { autoAlpha: 1, transform: 'scale(1)', duration: 0.15, ease: 'power1.inOut' }) : '';
    }, [showPopup])

    return (
        <>
            <div onClick={() => setShowPopup(true)} className="websites-item" style={{ backgroundImage: `url(${img})` }} />

            {showPopup &&
                <><div className="popup" ref={pop}>
                    <div className="popup-container">
                        <div className="close-btn" onClick={() => setShowPopup(false)}>
                            <img src={close} img="website portfolio work" />
                        </div>

                        <div className="popup-img" style={{ backgroundImage: `url(${img})` }}>
                        </div>
                        <div className="popup-text">
                            <h2 className="subheader">{title}</h2>

                            <h4 className="title">About project:</h4>
                            <p className="paragraph">
                                {work}
                            </p>

                            <h4 className="title">Tools used:</h4>
                            <ul>
                                {tools && tools.map((item) => {
                                    return <li key={item} className="paragraph" id={item}>{item}</li>
                                })}
                            </ul>

                            <div className="btn-container">
                                <a href={href} target="_blank" className="btn">View Site</a>
                                {githref && <a href={githref} target="_blank" className="btn nowidth"><img src={github} alt="github icon" /></a>}
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="popup-bg" onClick={() => setShowPopup(false)} /></>
            }
        </>
    )
}
