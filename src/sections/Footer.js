import React from 'react'
import Info from '../components/Info'
import Links from '../components/Links'
import Divider from '../components/Divider'

export default function Footer() {
    return (
        <footer className="push" id="footer">
            <div className="container">
                <div className="upper">
                    <Info />
                    <Links />
                </div>
                <Divider />
                <div className="lower">
                    <span>Copyright © 2020 by Adam Ostrowicki</span>
                </div>
            </div>

        </footer>
    )
}
