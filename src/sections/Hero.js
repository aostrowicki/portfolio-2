import React from 'react'
import Button from '../components/Button'
import arrow from '../assets/arrow-right.svg'
import hero from '../assets/hero.svg'

export default function Hero() {
    return (
        <section id="home">
            <div className="container">
                <h4 className="subtitle"><span>I'm Adam</span>, Frontend Developer and UI Designer</h4>
                <h1 className="header">I will do dosadksao sakod</h1>
                <Button target="#" type="right">See my work <img src={arrow} /></Button>

                <div className="img">
                    <img src={hero} />
                </div>
            </div>
        </section>
    )
}
