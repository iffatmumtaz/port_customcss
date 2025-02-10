import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <h1 className='heading'>ABOUT ME</h1>
      <Image src="/images/banner.png" alt="img" width={200} height={200} className="img1" />
      <h2>Microdosing synth tattooed vexillogist</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eum vel totam esse ducimus quis? Lorem ipsum dolor
        sit amet, consectetur adipisicing elit.
        Accusantium exercitationem placeat eligendi inventore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fuga corporis molestias alias facilis harum molestiae?</p>
      <div className='btn3'>
        <button className="bt2"><FaLinkedin className='icon' /></button>
        <button className="bt2"><FaGithub className='icon' /></button>
        <button className="bt2"><FaFacebook className='icon' /></button>
        <button className="bt2"><FaTwitter className='icon' /></button>
        <button className="bt2"><FaInstagram className='icon' /></button>
      </div>
    </div>
  );
}

export default About;
