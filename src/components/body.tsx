import React from 'react'
import '../index.css'
import Contact from './contact'
import { ProjectCard } from './projects'

 function Body(){

  const projects=[
    {
      title:'ToDo List',
      image:'/todo.png',
      description:'In this you can simply create and delete your daily tasks.',
      technology:'HTML, CSS and JavaScript',
      link:'https://tofolist.vercel.app/'
    },
    {
      title:'Calculator',
      image:'/calc.png',
      description:'In this you can perform simple calculations.',
      technology:'HTML, CSS and JavaScript',
      link:'https://calculator-amber-nu.vercel.app/'
    },
    {
      title:'Youtube',
      image:'',
      description:'I build this by fetching the youtube api. In which you can search and watch videos and also enjoy options of live chat',
      technology:'Typescript, React, Redux and Tailwindcss',
      link:''
    },
    // {
    //   title:'Food Restuarant Web App',
    //   image:'',
    //   description:'I build this by fetching the swiggy api. In which you can simply see the food items provided by different restuarants through swiggy',
    //   technology:'HTML, CSS and JavaScript',
    //   link:''
    // },

  ]
    return(

        <div className='min-h-screen flex flex-col mt-[72px] items-center  '>

        <h2 className="text-5xl mt-[6rem] font-extrabold text-white">Hi, I'm Navjot Kapatia</h2>
      <p className="font-semibold mt-[2rem] text-2xl text-white">  MERN | TypeScript | Tailwind | OOPS | GIT
      </p>

        <h1 className='font-extrabold text-5xl text-white mt-[6rem]'>Overview</h1>
        <div className="text-white text-center text-lg leading-relaxed max-w-2xl px-4">
        <p className='text-lg mt-[2rem] text-white '>I am a passionate Full Stack Web Developer with hands-on experience in building modern, responsive web applications using the MERN stack. I specialize in React, TypeScript, and Tailwind CSS for frontend development, and Node.js with Express and MongoDB for backend services.</p>
        </div>

        <h1 className='font-extrabold text-5xl text-white mt-[6rem]'>Experience</h1>        
        <div className="flex items-center justify-between mt-12 max-w-4xl w-full bg-gray-800 text-white p-6 rounded-lg shadow-md relative">

        <div>
            <h3 className="text-2xl font-bold mb-2">CodingZone Solutions</h3>
            <p className="text-lg leading-relaxed">
            I completed a 6-month Industrial Training Program in Full Stack Web Development,
            where I worked on a Food Restaurant Web App.
            </p>
        </div>
        <div className="text-white text-xl min-w-fit mb-15">
            Jan 2025 - June 2025
            </div>
        </div>


        <section id="projects" className="mt-10 px-4">
        <h1 className='font-extrabold text-5xl text-white mt-[6rem] text-center'>Projects</h1>  
        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-4xl w-full">
          {projects.map((project)=>(
            <ProjectCard key={project.title}{...project}/>
          ))}
        </div>
        </section>

        <h1 className="font-extrabold text-5xl mt-[6rem] text-white">Contact</h1>
          <Contact />
      </div>
      
    )
}
export default Body