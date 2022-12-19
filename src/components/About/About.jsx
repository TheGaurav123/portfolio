import React from 'react'
import './about.css'
const About = () => {
    return (
        <div className="container-fluid carrerContainer border d-flex justify-content-end flex-column" id='about'>
            <div className="row">
                <div className="h2 carrerTitle pt-3 pb-5 mb-5">My <span style={{ color: 'var(--btnBackground)', fontFamily: "'Rochester', cursive" }}>J</span>ourney.</div>
                <div className="col-12 text-center">
                    <img className='img-fluid' src={require('../../assets/images/skillMap.png')} alt="carrierMap" />
                </div>
            </div>
        </div>
    )
}

export default About