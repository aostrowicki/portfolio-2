import React, { useEffect, useState } from 'react'
import Website from './Website'
import dd from '../assets/websites/devdes.png'
import dd1 from '../assets/websites/devdes1.png'
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
                    <Website href="https://google.com" img={dd} title="Trick or Treat" work={["dupa", "dupa"]} tools={["dupa", "dupa", "dupa"]} />
                    <Website href="https://google.com" img={dd} title="Trick or Treat" work={["dupa"]} tools={["dupa"]} />
                </div>
            }
            {showSwiper &&
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <Website href="https://google.com" img={dd} title="Trick or Treat" work={["dupa", "dupa"]} tools={["dupa", "dupa", "dupa"]} />
                        <Website href="https://google.com" img={dd1} title="Trick or Treatb" work={["dupa"]} tools={["dupa"]} />
                    </div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            })
        </>
    )
}
