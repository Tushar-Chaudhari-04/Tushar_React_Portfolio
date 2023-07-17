import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Hero2 from '../../components/hero2/Hero2'

const Experience = () => {
  const expData={
    "heading":"Experience.",
    "para":"My Experience"
  } 

  return (
    <div>
       <Navbar/>
       <Hero2 props={expData}/>
       <Footer/>
    </div>
  )
}

export default Experience