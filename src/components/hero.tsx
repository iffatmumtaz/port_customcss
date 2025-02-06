import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='Hero'>
      <div className='img-div'>
        <Image src="/images/banner.jpeg" alt="img" width={200} height={200} className="img"/>
      </div>
      <div className='info-div'>
        <h1 className='name'>Hello, <br/> I am <br/> Iffat Mumtaz</h1>
        <div className='btn2'>
            <button className='bt1'><Link href="/" className='bt-li'>About Me</Link></button>
            <button className='bt1'><Link href="/contact" className='bt-li'>Contact Me</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Hero
