import React, { useState } from 'react'
import close from '../assets/close.svg'

export default function Illustration({ title, img }) {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <div className="illustrations-item" style={{ backgroundImage: `url(${img})` }} onClick={() => setShowPopup(true)}>
                <h4 className="title">{title}</h4>
            </div>

            {showPopup &&
                <>
                    <div className="img-popup">
                        <div className="close-btn" onClick={() => setShowPopup(false)}>
                            <img src={close} />
                        </div>
                        <img src={img} alt="" />
                    </div>
                    <div className="popup-bg" onClick={() => setShowPopup(false)}></div>
                </>
            }
        </>
    )
}
