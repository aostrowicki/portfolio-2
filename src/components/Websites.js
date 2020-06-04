import React, { useEffect } from 'react'
import Website from './Website'
import dd from '../assets/websites/devdes.png'
import Swiper from 'swiper'
import { useMediaQuery } from 'react-responsive'

export default function Websites() {

    const showSwiper = useMediaQuery({ maxWidth: 900 })

    useEffect(() => {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }, [showSwiper]);

    return (
        <>
            {!showSwiper &&
                <div className="websites-grid">
                    <Website img={dd} title="Trick or Treat" description="Contrary to ntrary ntrary ntrarypopular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." />
                    <Website img={dd} title="test" description="test" />
                </div>
            }
            {showSwiper &&
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src={dd} alt="" /></div>
                        <div className="swiper-slide"><img src={dd} alt="" /></div>
                        <div className="swiper-slide"><img src={dd} alt="" /></div>
                    </div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            })
        </>
    )
}
