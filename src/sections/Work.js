import React, { useState, useEffect, useContext } from 'react'
import Websites from '../components/Websites'
import Icons from '../components/Icons'
import Illustrations from '../components/Illustrations'
import { NavContext } from '../context'
import InView, { useInView } from 'react-intersection-observer'

//preload
import outdo from '../assets/websites/outdo.png'
import barb from '../assets/websites/barb.png'
import portfolio from '../assets/websites/portfolio-2.png'
import pokecards from '../assets/websites/pokecards.png'

export default function Work() {

    const categories = ['Websites', 'Web Apps', 'Illustrations'];

    const [activeTab, setActiveTab] = useState(categories[0]);
    const { active, setActive } = useContext(NavContext);

    const [ref, inView, entry] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            setActive('work');
            
            //preload
            const img1 = new Image();
            const img2 = new Image();
            const img3 = new Image();
            const img4 = new Image();
            img1.src = outdo;
            img2.src = barb;
            img3.src = portfolio;
            img4.src = pokecards;
        }
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
