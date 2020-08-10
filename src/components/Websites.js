import React, { useEffect, useState } from 'react'
import Website from './Website'
import outdo from '../assets/websites/outdo.png'
import barb from '../assets/websites/barb.png'
import p1 from '../assets/websites/portfolio.png'
import p2 from '../assets/websites/portfolio-2.png'

export default function Websites() {

    return (
        <>
            <div className="websites-grid">
                <Website href="https://google.com" githref="https://github.com/aostrowicki/portfolio-2" img={p2} title="Portfolio" work={["Website Design", "Implementing Design", "Illustrations", "Icons"]} tools={["React", "Adobe Illustrator", "Adobe XD"]} />
                <Website href="https://outdo.org.in" img={outdo} title="OutDo" work={["Implementing Design", "Assets Export", "Animations Optimization", "Design Improvements"]} tools={["Adobe Illustrator", "Adobe After Effects", "Lottie.js"]} />
                <Website href="https://google.com" githref="https://github.com/aostrowicki/barber-shop" img={barb} title="BBarber" work={["Website Design", "Implementing Design", "Icons"]} tools={["Figma", "Adobe Illustrator"]} />
                <Website href="https://google.com" githref="https://github.com/aostrowicki/portfolio-website" img={p1} title="Portfolio" work={["Website Design", "Implementing Design", "Illustrations"]} tools={["Figma", "Adobe Illustrator"]} />
            </div>
        </>
    )
}
