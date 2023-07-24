import React from 'react'
import "./ProjectDetails.scss"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ProjectDetailsCard from '../../components/projectdetailscard/ProjectDetailsCard'
import { useParams } from 'react-router-dom'

const ProjectDetails = (props) => {
  const params=useParams();
  const id=params.projectId;
  console.log("id",id)
  return (
    <div>
      {/* <Navbar style={{position:"",marginTop:"-30%"}}/> */}
      <ProjectDetailsCard data={id}/>
      <Footer/>
    </div>
  )
}
      
export default ProjectDetails