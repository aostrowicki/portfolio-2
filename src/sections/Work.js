import React, { useState, useEffect, useContext } from 'react'
import Websites from '../components/Websites'
import Icons from '../components/Icons'
import Illustrations from '../components/Illustrations'
import { NavContext } from '../context'
import InView, { useInView } from 'react-intersection-observer'

export default function Work() {

    const categories = ['Websites', 'Web Apps', 'Illustrations'];
    
    const [activeTab, setActiveTab] = useState(categories[0]);
    const { active, setActive } = useContext(NavContext);

    const [ref, inView, entry] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        inView ? setActive('work') : '';
    }, [inView]);

    return (
        <section id="work" ref={ref}>
            <div className="container">
                <h1 className="header">My work</h1>
                <div className="categories">
                    {categories.map(item => (
                        <React.Fragment key={item}><span className={`link ${activeTab === item ? 'active' : ''}`} key={item}>{item}</span>
                            <span className="loader"></span></React.Fragment >
                    ))}
                </div>

                {activeTab === 'Websites' && <Websites />}
                {activeTab === 'Web Apps' && <Icons />}
                {activeTab === 'Illustrations' && <Illustrations />}
            </div>
        </section>
    )
}
