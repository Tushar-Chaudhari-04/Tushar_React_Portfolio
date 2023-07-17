import React from "react";
import "./SkillComponent.scss";

const SkillComponent = (props) => {
    console.log("props",props.props)
  return <div className="skill-container">
    <img src={props.props.skillImg} alt={props.props.skillName}/>
    <p>{props.props.skillName}</p>
  </div>;
};

export default SkillComponent;
