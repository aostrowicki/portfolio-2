import React from 'react'
import mail from '../assets/mail.svg'
import Form from '../components/Form'

export default function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <div className="left">
                    <h1 className="header">Contact me</h1>
                    <span className="paragraph">cos tam huj</span>
                    <div className="img">
                        <img src={mail} alt="" />
                    </div>
                </div>
                <div className="right">
                    <Form />
                </div>
            </div>
        </section>
    )
}
