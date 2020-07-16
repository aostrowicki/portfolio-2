import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import github from '../assets/github.svg'
import close from '../assets/close.svg'

export default function Website({ title, img, href, githref, tools, work }) {

    const swiper = useMediaQuery({ maxWidth: 900 })
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            {/* {!swiper && */}
                <div onClick={() => setShowPopup(true)} className="websites-item" style={{ backgroundImage: `url(${img})` }} />
            {/* } */}

            {/* {swiper &&
                <div className="swiper-slide" >
                    <img src={img} />
                </div>
            } */}

            {showPopup &&
                <><div className="popup">
                    <div className="popup-container">
                        <div className="close-btn" onClick={() => setShowPopup(false)}>
                            <img src={close} />
                        </div>

                        <div className="popup-img" style={{ backgroundImage: `url(${img})` }}>
                        </div>
                        <div className="popup-text">
                            <h2 className="subheader">{title}</h2>

                            <h4 className="title">Responsible for:</h4>
                            <ul>
                                {work && work.map((item) => {
                                    return <li className="paragraph" id={item}>{item}</li>
                                })}
                            </ul>

                            <h4 className="title">Tools used:</h4>
                            <ul>
                                {tools && tools.map((item) => {
                                    return <li className="paragraph" id={item}>{item}</li>
                                })}
                            </ul>

                            <div className="btn-container">
                                <a href={href} className="btn">View Site</a>
                                {githref && <a href={githref} className="btn nowidth"><img src={github} /></a>}
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="popup-bg" onClick={() => setShowPopup(false)} /></>
            }
        </>
    )
}
