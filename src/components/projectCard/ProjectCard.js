import React from "react";
import "./ProjectCard.scss";
import SocialMediaImg from "../../assets/social-media.png";
import { Link, useNavigate } from "react-router-dom";
import ProductDetails from "../../pages/projectdetails/ProjectDetails";

const ProjectCard = (props) => {
    console.log("props",props.props.img)
    const navigate=useNavigate();

  return (
    <div className="project-card" onClick={()=>navigate(`/projects/${props?.props?.id}`)}>
      <div className="project-img">
        <img src={props.props.img} alt="Project Img" />
      </div>
      <h2>{props.props.heading}</h2>
      <p>
        {props.props.para}
      </p>
      <div className="viewsource-btn">
        {/* <Link className="btn">View</Link>
        <Link className="btn">Source Code</Link>     */}
      </div>
      
    </div>
  );
};

export default ProjectCard;
