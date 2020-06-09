import React, { useEffect, useContext } from 'react'
import mail from '../assets/mail.svg'
import Form from '../components/Form'
import { NavContext } from '../context'
import { useInView } from 'react-intersection-observer'

export default function Contact() {

    const { active, setActive } = useContext(NavContext);

    const [ref, inView, entry] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        inView ? setActive('contact') : '';
    }, [inView]);

    return (
        <section id="contact" ref={ref}>
            <div className="container">
                <div className="left">
                    <h1 className="header">Contact me</h1>
                    <span className="paragraph">Don't wanna use form? Send me <a href="">e-mail</a> </span>
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
