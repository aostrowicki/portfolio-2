import React from 'react'
import github from '../assets/github.svg'
import fiverr from '../assets/fiverr.svg'
import linkedin from '../assets/linkedin.svg'

export default function Links() {
    return (
        <div className="links">
            <a href="https://www.linkedin.com/in/aostrowicki/?locale=en_US" target="_blank" className="icon-btn"><img src={linkedin} alt="" /></a>
            <a href="https://github.com/aostrowicki" target="_blank" className="icon-btn"><img src={github} alt="" /></a>
            <a href="https://www.fiverr.com/aostrowicki" target="_blank" className="icon-btn"><img src={fiverr} alt="" /></a>
        </div>
    )
}