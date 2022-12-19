import React, { useState } from 'react'
import './nav.css'
import Hamburger from 'hamburger-react'
import PhoneNav from '../PhoneNav/PhoneNav';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


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


const Nav = () => {

    // Hamberger
    const [isOpen, setOpen] = useState(false)

    return (
        <nav className='position-fixed w-100 nav'  >
            <div className="container-fluid nav-container px-4">
                <div className="row">
                    <div className="col-6 col-md-4">
                        <div className="h4 hero-heading"><BrowserRouter> <Link to='#home' className='hero-heading'>Gaurav.</Link></BrowserRouter></div>
                    </div>
                    <div className="col-md-4 d-none d-md-flex justify-content-between">
                        <BrowserRouter>
                            {navLinks.map((val, index) => {
                                return <Link key={index} className='my-auto navLabel' to={val.to} >{val.label}</Link>
                            })}
                        </BrowserRouter>



                    </div>
                    <div className="col-6 col-md-4 d-flex justify-content-end">

                        <button className='d-none btnHover d-md-block my-auto contactBtn'><BrowserRouter>
                            <Link to='#form' style={{ textDecoration: 'none', color: 'white' }} >Contact</Link>
                        </BrowserRouter></button>

                        {/* Hamberger */}
                        <div className="hambergerDiv d-md-none d-sm-block">
                            <Hamburger color='white' toggled={isOpen} toggle={setOpen} />
                            {isOpen ? <PhoneNav /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav