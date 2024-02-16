import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <Link to={{ pathname: "https://instagram.com/abaad_enterprises?igshid=YmMyMTA2M2Y=" }} target="_blank"
            ><button className='btn2 links'>Visit Instagram</button></Link>
            <div className="sizedBox"></div>
            <Link to={{ pathname: "https://maps.app.goo.gl/zxDUECeqcqKijYcU7?g_st=iw" }} target="_blank"
            ><button className='btn2 links'>Check on Maps</button></Link>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
