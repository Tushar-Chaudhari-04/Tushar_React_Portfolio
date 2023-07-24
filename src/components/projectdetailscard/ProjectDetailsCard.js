import React from 'react'
import "./ProjectDetailsCard.scss"
import ProjectData from "../../Portfolio-Database/ProjectData"
import { Link } from 'react-router-dom';

const ProjectDetailsCard = (data) => {
    console.log("props.props.id",data.data);
    const projectData=ProjectData[data.data-1];
    console.log("projectData",projectData);
  return (
    <div className='projectdetailscard'>
    <div className='prodetailsleft'>
    <h1>{projectData.heading}</h1>
      <p>{projectData.subheading}</p>
      During the course of this project,
      <ul>
      {projectData.projectdetails.map(data=>(
        <li className='projectdetailsdata'>{data}</li>
      ))}
      </ul>
    </div>
    <div className='prodetailsright'>
    <div className="project-img">
        <img src={projectData.img} alt="Project Img" />
      </div>
    </div>
    <Link to="/projects" className="btn back-btn">Back</Link> 
    </div>
  )
}

export default ProjectDetailsCard