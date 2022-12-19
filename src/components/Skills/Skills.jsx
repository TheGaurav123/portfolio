import React from 'react'
import './skills.css'
const Skills = () => {

  const skillData = [
    {
      skillLogo: require('../../assets/images/Skill/frontend.png'),
      skillTag: 'Fullstack Developer',
      skillLine: 'Development Partners',
      skills: ['HTML', 'CSS', 'Javascript', 'React.js', 'Node.js', 'MongoDB']
    },

    {
      skillLogo: require('../../assets/images/Skill/designer.png'),
      skillTag: 'Designer',
      skillLine: 'Things I Design',
      skills: ['Web', 'UI/UX', 'Apps', 'Logo']
    },

    {
      skillLogo: require('../../assets/images/Skill/enthusiast.png'),
      skillTag: 'More About Me',
      skillLine: '',
      skills: ['Ability to Plan Well', 'Passionate About My Work', 'Ability to be a Team Player', 'Car Enthusiast', 'A Calm Minded Person']
    },





  ]

  return (
    <div id='skills'>
      <div className="container-fluid skillContainer pt-5 p-0">
        {/* Upper Bg Div */}
        <div className="container-fluid upperBg"></div>

        {/* Skill Main Container */}
        <div className="container-fluid skillMainContainer">

          {/* Logo Div */}
          <div className="d-flex row mt-0 mt-md-5 mx-auto text-center justify-content-evenly">

            {skillData.map((val, index) => {
              return (
                <div className="skill py-3 py-md-4 mt-5 mt-md-0 col-12 col-lg-4" key={index}>

                  <img src={val.skillLogo} alt={val.skillTag} />

                  <div className="h4 my-5 skillTag">{val.skillTag}</div>

                  <div className="skillData w-75 mx-auto py-2 px-2">
                    <div className="mt-4 h5 fw-lighter skillTitle mb-2">{val.skillLine}</div>

                    <div className="skillSet h-75 d-flex flex-column justify-content-evenly text-start ps-4">
                      {val.skills.map((val, index) => {
                        return (
                          <li key={index}>{val}</li>
                        )
                      })}
                      
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills