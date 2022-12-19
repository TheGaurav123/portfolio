import React from 'react'
import './project.css'
import Card from './Card'
const Project = () => {


  const projectInfo = [
    {
      id: 1,
      thumbNail: require('../../assets/images/Project Images/Weather Project/thumbnail.png'),
      hoverImg: require('../../assets/images/Project Images/Weather Project/img.png'),
      title: 'Weather Info',
      liveLink: 'https://mausaminfo.netlify.app/',
      githubLink: 'https://github.com/TheGaurav123/Weather-Forecast'
    },
    {
      id: 2,
      thumbNail: require('../../assets/images/Project Images/Developer Project/thumbnail.png'),
      hoverImg: require('../../assets/images/Project Images/Developer Project/img.png'),
      title: 'Developer Resource',
      liveLink: 'https://developerresource.netlify.app/',
      githubLink: 'https://github.com/developer-resource/Dev-Resources'
    },
    {
      id: 3,
      thumbNail: require('../../assets/images/Project Images/CRUD Project/thumbnail.png'),
      hoverImg: require('../../assets/images/Project Images/CRUD Project/img.png'),
      title: 'University Management',
      liveLink: 'https://universitymanagement.netlify.app',
      githubLink: 'https://github.com/TheGaurav123/CRUD-UniversityManagement'
    },

  ]



  return (
    <div className="container-fluid mb-5 mb-md-0 projectContainer" id='projects'>

      {/* Top Section */}
      <div className="row py-3">
        <div className="col-12" >
          <div className="h4"><u>My Recent Works !</u></div>
        </div>
      </div>

      {/* Project Section */}
      <div className="row mt-0 mt-md-5 gy-5 text-center">
        {projectInfo.map((val, index) => {
          return <Card visitLink={val.liveLink} githubLink={val.githubLink} key={index} title={val.title} thumbNail={val.thumbNail} image={val.hoverImg}/>
        })}

      </div>

    </div>

  )
}

export default Project


