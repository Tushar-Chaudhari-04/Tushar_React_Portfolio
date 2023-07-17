import React from "react";
import "./ProjectCard.scss";
import SocialMediaImg from "../../assets/social-media.png";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
    console.log("props",props.props.img)
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={props.props.img} alt="Project Img" />
      </div>
      <h2>{props.props.heading}</h2>
      <p>
        {props.props.para}
      </p>
      <div className="viewsource-btn">
        <Link className="btn">View</Link>
        <Link className="btn">Source</Link>    
      </div>
      
    </div>
  );
};

export default ProjectCard;
