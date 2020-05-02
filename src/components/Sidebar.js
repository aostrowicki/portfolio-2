import React from 'react'
import logo from '../assets/logo.svg'
import scroll from '../assets/scroll.svg'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={logo}></img>
            </div>

            <div className="navigation">
                <ul>
                    <li className="link active">Home</li>
                    <li className="link">About me</li>
                    <li className="link">What I do</li>
                    <li className="link">My work</li>
                    <li className="link">Contact</li>
                </ul>
            </div>

            <div className="scroll">
                <img src={scroll} />
                <div className="paragraph">Scroll down</div>
            </div>
        </div>
    )
}
