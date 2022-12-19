import React from 'react'
import './form.css'




const Form = () => {

  return (
    <div className='formDiv container-fluid py-0 py-md-2' id='form'>
      <div className="row ">

        {/* Heading Section */}
        <div className="col-12 text-center mt-2 mb-4 d-none d-md-block">
          <div className="h2 formHeading pt-5">Get In Touch !</div>
          <div className="h6 mt-3 formPara">We will get in touch with you within 24 hours.</div>
        </div>


        {/* Contact Section */}
        <div className="col-12 my-2 d-none  d-md-block">
          <div className="row text-center desktopContact w-75 mx-auto ">

            <div className="col-4 contactForm py-4 d-flex justify-content-evenly">

              <div className="row">
                <div className="col-12">
                  <div className="h4 contactTitle">Contact Information</div>
                </div>

                <div className="col-12 h-50 d-flex ">
                  <div className="row">
                    <div className="col-12 my-auto">
                      <div className="h5">
                        <img src={require('../../assets/images/Contact Icon/Phone.png')} alt="Phone" />
                        <a className='fw-light' rel="noreferrer" style={{ color: 'white', textDecoration: 'none' }} href="tel:+916205875639">+916205875639</a>
                      </div>
                    </div>

                    <div className="col-12 my-auto">
                      <div className="h6">
                        <img src={require('../../assets/images/Contact Icon/message.png')} className='me-2' alt="Phone" />
                        <a className='fw-light' rel="noreferrer" style={{ color: 'white', textDecoration: 'none' }} href="mailto:theakashgaurav@gmail.com">mail@theakashgaurav</a>
                      </div>
                    </div>

                    <div className="col-12 my-auto">
                      <div className="h6">
                        <img src={require('../../assets/images/Contact Icon/Location.png')} alt="Location" />
                        <a className='fw-light' rel="noreferrer" style={{ color: 'white', textDecoration: 'none' }} target='_blank' href="https://www.google.com/maps/@25.6461686,85.0646612,16z">Patna, Bihar, India</a>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-12">
                  <div className="row">
                    <div className="col-4">
                      <img onClick={() => window.open('https://www.instagram.com/__hey__gaurav/', '_blank')} className='mx-auto img-fluid socialIcon' src={require('../../assets/images/Social Icons/instagram.png')} alt="Insta" />
                    </div>
                    <div className="col-4">
                      <img onClick={() => window.open('https://twitter.com/iamakashgaurav', '_blank')} className='mx-auto img-fluid socialIcon' src={require('../../assets/images/Social Icons/twitter.png')} alt="Twitter" />
                    </div>
                    <div className="col-4">
                      <img onClick={() => window.open('https://www.linkedin.com/in/akashgaurav123/', '_blank')} className='mx-auto img-fluid socialIcon' src={require('../../assets/images/Social Icons/linkedin.png')} alt="Linkedin" />
                    </div>
                  </div>
                </div>


              </div>


            </div>

            <div className="col-8 bg-white d-flex flex-column borderRight justify-content-center pt-3">
              <div className="h4 mb-5 pb-5">Feel Free To Contact !</div>
              <form action="https://formspree.io/f/xjvznaqj"
                method="POST" className='d-flex flex-column mb-5 justify-content-evenly'>
                <input type="text" required name='FullName' className='formInput w-75 mx-auto' placeholder='Full Name' />
                <input required type="phone" name='Phone' className='formInput my-5 w-75 mx-auto' placeholder='Phone' />
                <input required type="email" name='Email' className='formInput w-75 mx-auto' placeholder='Email' />
                <textarea name='Message' className='w-75 mt-5 p-2 mx-auto messageContainer' placeholder='Message' cols="20" rows="10"></textarea>
                <button required type='submit' className='w-25 sendBtn mx-auto mt-5 btnHover'>Send</button>
              </form>
            </div>
          </div>
        </div>



        {/* Contact Section For Phone*/}
        <div className="col-12 d-block text-center d-md-none">

          <div className="row bg-white">

            <div className="col-12 bg-dark pb-3 mb-4">
              <div className="col-12">
                <div className="h4 pt-3 pb-4 text-white">Contact information</div>
                <div className="row">
                  <div className="col-4">
                    <div className='h7 contact'>
                      <img src={require('../../assets/images/Contact Icon/Phone.png')} alt="Phone" />
                      <a className='fw-light' rel="noreferrer" style={{ color: 'white', textDecoration: 'none' }} href="tel:+916205875639">+916205875639</a>
                    </div>

                  </div>

                  <div className="col-4">
                    <div className="h7 contact">
                      <img src={require('../../assets/images/Contact Icon/message.png')} className='me-2' alt="Phone" />
                      <a className='fw-light' rel="noreferrer" style={{ color: 'white', textDecoration: 'none' }} href="mailto:theakashgaurav@gmail.com">mail@thegaurav</a>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="h7 contact">
                      <img src={require('../../assets/images/Contact Icon/Location.png')} alt="Location" />
                      <a className='fw-light' rel="noreferrer" style={{ color: 'white', textDecoration: 'none' }} target='_blank' href="https://www.google.com/maps/@25.6461686,85.0646612,16z">Patna, Bihar, India</a>
                    </div>
                  </div>

                </div>
              </div>
            </div>


            <div className="col-12 ">
              <div className="h4 pb-5 my-3 mt-5">Feel Free To Contact !</div>
              <form action="https://formspree.io/f/xjvznaqj"
                method="POST">
                <input type="text" required name='FullName' className='formInput w-100' placeholder='Full Name' />
                <input type="phone" required name='Phone' className='formInput w-100 my-5' placeholder='Phone' />
                <input type="email" required name='Email' className='formInput w-100' placeholder='Email' />
                <textarea name='Message' required cols="30" rows="10" className='my-5 messageContainer w-100 p-2' placeholder='Message'></textarea>
                <button type='submit' className='sendBtn btnHover mb-4 mt-3'>Send</button>
              </form>
            </div>




            {/* Social icons */}
            <div className="col-12 py-5">
              <div className="row">
                <div className="col-4">
                  <img onClick={() => window.open('https://www.instagram.com/__hey__gaurav/', '_blank')} className='mx-auto img-fluid socialIcon' src={require('../../assets/images/Social Icons/instagram.png')} alt="Insta" />
                </div>
                <div className="col-4">
                  <img onClick={() => window.open('https://twitter.com/iamakashgaurav', '_blank')} className='mx-auto img-fluid socialIcon' src={require('../../assets/images/Social Icons/twitter.png')} alt="Twitter" />
                </div>
                <div className="col-4">
                  <img onClick={() => window.open('https://www.linkedin.com/in/akashgaurav123/', '_blank')} className='mx-auto img-fluid socialIcon' src={require('../../assets/images/Social Icons/linkedin.png')} alt="Linkedin" />
                </div>

              </div>
            </div>
          </div>


        </div>


      </div>
    </div>
  )
}

export default Form