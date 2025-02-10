import React from 'react'
import Image from "next/image"
import Link from 'next/link'
const Project = () => {
  return (
    <div>
    <h1 className='heading'>My Projects </h1>
    <div className='project'>
        <h2 className='pro-h2'>There are my some Projects</h2>
        <p className='pro-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Fuga dolorem asperiores, consequuntur corrupti modi dolor quod, ad alias similique 
           tenetur voluptatum facere excepturi amet sapiente rerum ratione distinctio ab inventore.</p>
    </div>

    <div className='main'>
      <div className='card'>
      <Image src="/images/burger.png"alt="" width={200}  height={200} className="img2"/>
      <h3 className='card-h'>E-commerce website</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus reiciendis voluptatum impedit ipsum?</p>
          <span><Link href="https://e-commerce-mile3-1l38.vercel.app/" className="span">preveiw</Link></span>
          <div className='tag-btn'>
          <button className="tag">Typescript</button>
          <button className="tag1">Node.js</button>
          <button className="tag2">Tailwind</button>
          </div>
            </div> 

          <div className='card'>
      <Image src="/images/port.png"alt="" width={200}  height={200} className="img2"/>
      <h3 className='card-h'>My Portfolio</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis doloremque pariatur cum dolore ipsum!</p>
      <span><Link href="https://portfoliomile4-l31x.vercel.app/" className="span">preveiw</Link></span>
          <div className='tag-btn'>
          <button className="tag">Next.js</button>
          <button className="tag1">React</button>
          <button className="tag2">Tailwind</button>
        </div> 
          </div> 

          <div className='card'>
      <Image src="/images/count.png"alt="" width={200}  height={200} className="img2"/>
      <h3 className='card-h'> Countdown Timer</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos officiis blanditiis sed ducimus sequi? </p>
      
       <span><Link href="https://github.com/iffatmumtaz/html.css.git" className="span">preveiw</Link></span>
          <div className='tag-btn'>
          <button className="tag">Typescript</button>
          <button className="tag1">Html</button>
          <button className="tag2">Css</button>
          </div>
          </div> 
          <div className='card'>
      <Image src="/images/resume.png"alt="" width={200}  height={200} className="img2"/>
      <h3 className='card-h'>Resume a builder</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor qui debitis veniam voluptates possimus?</p>
      <span><Link href="https://github.com/iffatmumtaz/milestone-4" className="span">preveiw</Link></span>
          <div className='tag-btn'>
          <button className="tag">Html</button>
          <button className="tag1">Typescript</button>
          <button className="tag2">Css</button>
          </div>
          </div> 
          <div className='card'>
      <Image src="/images/furnio.png"alt="" width={200}  height={200} className="img2"/>
      <h3 className='card-h'>Furniture website</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, obcaecati. Explicabo in non eveniet.</p>
      <span><Link href="https://hackathon2-red.vercel.app/" className="span">preveiw</Link></span>
          <div className='tag-btn'>
          <button className="tag">Typescript</button>
          <button className="tag1">Html</button>
          <button className="tag2">Css</button>
          </div>
          </div> 
          <div className='card'>
      <Image src="/images/web.png"alt="" width={200}  height={200} className="img2"/>
      <h3 className='card-h'>A simple website</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores reiciendis cumque amet aut quas?</p>
      <span><Link href="https://github.com/iffatmumtaz/simple-website" className="span">preveiw</Link></span>
          <div className='tag-btn'>
          <button className="tag">Typescript</button>
          <button className="tag1">Html</button>
          <button className="tag2">Css</button>
          </div>
          </div> 
     
    </div>
    </div>
    
  )
}

export default Project;
