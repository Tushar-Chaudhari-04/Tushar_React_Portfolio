import React from 'react'
import "./Hero2.scss"

const Hero2 = (props) => {
    console.log("props",props.props,props.heading,props.para)
  return (
    <div className='hero2'>
    <div className='heading'>
        <h1 style={{color:"rgb(248,217,15)"}}>{props.props.heading}</h1>
        <p style={{color:"rgb(248,217,15)"}}>{props.props.para}</p>
    </div>
    </div>
  )
}

export default Hero2

//style={{color:"rgb(248,217,15)"}}