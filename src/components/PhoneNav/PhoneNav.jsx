import React from 'react'
import './phonenav.css'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
const PhoneNav = () => {

    const navLinks = [{
        label: 'Home',
        to: '#home'
    },
    {
        label: 'Projects',
        to: '#projects'
    },
    {
        label: 'Skills',
        to: '#skills'
    },
    {
        label: 'About',
        to: '#about'
    },
    ]

    return (
        <>
            <div className="container d-block phoneNav d-md-none">
                <div className="container linksDiv text-start d-flex flex-column justify-content-evenly">
                    <BrowserRouter>
                        {navLinks.map((val, index) => {
                            return <Link key={index} className='phoneLink' to={val.to}>{val.label}</Link>
                        })}
                        <Link to='#form' className='contactBtn py-2 btnHover text-center' style={{textDecoration:'none', color:'white'}} >Contact</Link>
                    </BrowserRouter>


                </div>
            </div>
        </>
    )
}

export default PhoneNav