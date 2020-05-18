import React from 'react'
import Website from './Website'
import dd from '../assets/websites/devdes.png'

export default function Websites() {
    return (
        <div className="websites-grid">
            <Website img={dd} title="Trick or Treat" description="Contrary to ntrary ntrary ntrarypopular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."/>
            <Website  img={dd} title="test" description="test"/>
        </div>
    )
}
