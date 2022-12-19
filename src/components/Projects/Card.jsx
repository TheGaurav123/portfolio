import React from 'react'
import { useState } from 'react'

const Card = ({ thumbNail, image, title, visitLink, githubLink }) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div className="col-12 col-md-4 mb-5 mb-md-0 projectBox">
            <div className="row">
                <div className="col-12">
                    <div className="h4 mb-4">{title}</div>
                </div>
                <div className="col-12">
                    <img className='img-fluid w-100' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} src={isHovered ? image : thumbNail} alt="thumbNail" />
                </div>
                <div className="col-12">
                    <div className="row my-5 d-flex justify-content-center mx-auto">
                        <img onClick={()=>window.open(githubLink, '_blank')} className='my-auto me-3 ms-4 githubIcon' src={require('../../assets/images/Social Icons/githubIcon.png')} alt="Github" />
                    </div>
                    <button className='demoBtn' onClick={()=>window.open(visitLink, '_blank')}>Visit Website</button>
                </div>

            </div>
        </div>
    )
}

export default Card