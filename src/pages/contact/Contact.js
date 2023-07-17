import React from 'react'
import "./Contact.scss"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Hero2 from '../../components/hero2/Hero2'
import ContactForm from '../../components/contact-form/ContactForm'

const Contact = () => {
  const contactData={
    "heading":"CONTACTS.",
    "para":"Lets have a chat"
  } 

  return (
    <div>
       <Navbar/>
       <Hero2 props={contactData}/>
       <ContactForm/>
       <Footer/>
    </div>
  )
}

export default Contact