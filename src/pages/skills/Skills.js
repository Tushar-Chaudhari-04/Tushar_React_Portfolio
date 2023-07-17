import React from "react";
import "./Skills.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Hero2 from "../../components/hero2/Hero2";
import SkillComponent from "../../components/skillcomponent/SkillComponent";
import skillsData from "../../Portfolio-Database/SkillsData";

const Skills = () => {
  const expData = {
    heading: "SKILLS.",
    para: "My Skills",
  };

  return (
    <div>
      <Navbar />
      <Hero2 props={expData} />
      <div className="skill-section">
        {skillsData.map((elem) => (
          <SkillComponent props={elem} key={elem.skillName} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
