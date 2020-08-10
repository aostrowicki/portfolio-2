import React from 'react'
import contact from '../assets/contact.svg'
import location from '../assets/location.svg'

export default function Info() {
    return (
        <div className="info">
            <div className="info-item">
                <img src={location} alt=""/>
                <p className="paragraph">61-216, Poznan <span>Poland</span></p>
            </div>
            <div className="info-item">
                <img src={contact} alt=""/>
                <p className="paragraph">a.ostrowicki10@gmail.com</p>
            </div>
        </div>
    )
}
