import React from 'react'
import Nav from '../Nav/Nav'
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './landing.css'
const Landing = () => {
    return (
        <div id='home'>
            <Nav />
            <div className="heroSection container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6 text-center left py-5">
                        {/* Hero Image */}
                        <div className="heroImg mt-5">
                            <img src={require('../../assets/images/heroImg.jpeg')} className='img-fluid2' alt="Akash Gaurav" />
                        </div>

                        {/* Hero Info */}
                        <div className="heroInfo">
                            <div className="h4 heroName">Akash Gaurav</div>
                            <div className="h4 heroTitle">Fullstack Developer, UI/UX Designer</div>
                        </div>


                        {/* Hero Para */}
                        <div className="heroPara mx-auto">
                            <div className="p w-75 px-2 px-md-0 mx-auto">Strong knowledge of basic web technologies such as HTML5, CSS3, Bootstrap. In-depth knowledge of JavaScript, React JS. Knowledge of database platforms such as MongoDB, SQL and Working knowledge of Linux, Windows</div>
                        </div>

                        {/* Let's Connect Button */}
                        <div className="connectBtn">
                            <button className='btnHover'><BrowserRouter><Link style={{textDecoration:'none', color:'white'}} to={'#form'}>Say Hello</Link> </BrowserRouter></button>
                        </div>

                    </div>
                    <div className="col-12 col-md-6 right text-center">
                        <div className="h4 mt-5 socialSlogan">I'm Here Also,</div>
                        <div className="socialIcon mx-auto w-100">
                            <img className='icons' onClick={() => window.open('https://github.com/TheGaurav123', '_blank')} src={require('../../assets/images/Social Icons/githubIcon.png')} alt="GitHub" />
                            <img src={require('../../assets/images/Social Icons/figmaIcon.png')} alt="Figma" />
                            <img className='icons' onClick={() => window.open('https://www.linkedin.com/in/akashgaurav123/', '_blank')} src={require('../../assets/images/Social Icons/linkedinIcon.png')} alt="LinkdeIn" />
                        </div>

                        {/* Resume Button */}
                        <div className="resumeBtn">
                            <button className='btnHover'> <a style={{color:'white', textDecoration:'none'}} href={require('../../assets/Resume/resume.pdf')} download='Resume'>Get Resume</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing