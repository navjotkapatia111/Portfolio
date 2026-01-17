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
      image:'/Youtube.png',
      description:'I build this by fetching the youtube api. In which you can search and watch videos and also enjoy options of live chat',
      technology:'Typescript, React, Redux and Tailwindcss',
      link:'https://youtube-lk5r.vercel.app/'
    },
    {
      title:'Netflix',
      image:'/netflix.png',
      description:'Its basically an netflix based UI frontend project. I build this one as my practice project',
      technology:'Typescript, React, Redux and Tailwindcss',
      link:'https://netflix-clone-jade-six-81.vercel.app/'
    },
    {
      title:'BookKeeper',
      image:'/bookkeeper.png',
      description:'I build this one using MERN where u can list out of your books collection with some details like name, price, publishDate.',
      technology:'MERN and TailwindCSS',
      link:'https://bookkeeper-orcin.vercel.app/'
    },
    {
      title:'Food Restuarant Web App',
      image:'/food.png',
      description:'I build this by fetching the swiggy api. In which you can simply see the food items provided by different restuarants through swiggy',
      technology:'HTML, CSS and JavaScript',
      link:'https://www.youtube.com/watch?v=CpBPJ5hoG50'
    },

  ]
    return(

        <div className='min-h-screen flex flex-col mt-[72px] items-center'>

        <h2 className="text-3xl sm:text-4xl md:text-5xl mt-10 md:mt-[6rem] font-extrabold text-white text-center">Hi, I'm Navjot Kapatia</h2>
        <p className="font-semibold mt-4 md:mt-[2rem] text-lg sm:text-xl md:text-2xl text-white text-center">  MERN | TypeScript | Tailwind | OOPS | GIT
        </p>

        <h1 className='font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mt-10 md:mt-[6rem] text-center'>Overview</h1>
        <div className="text-white text-center text-base sm:text-lg leading-relaxed max-w-xs sm:max-w-2xl px-2 sm:px-4">
        <p className='text-base sm:text-lg mt-4 md:mt-[2rem] text-white '>I am a passionate Full Stack Web Developer with hands-on experience in building modern, responsive web applications using the MERN stack. I specialize in React, TypeScript, and Tailwind CSS for frontend development, and Node.js with Express and MongoDB for backend services.</p>
        </div>

        <h1 className='font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mt-10 md:mt-[6rem] text-center'> Training Experience</h1>        
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-8 md:mt-12 max-w-xs sm:max-w-4xl w-full bg-gray-800 text-white p-4 sm:p-6 rounded-lg shadow-md relative gap-4 md:gap-0">

        <div>
            <h3 className="text-lg sm:text-2xl font-bold mb-2">CodingZone Solutions</h3>
            <p className="text-base sm:text-lg leading-relaxed">
            I completed a 6-month Industrial Training Program in Full Stack Web Development,
            where I worked on a Food Restaurant Web App.
            </p>
        </div>
        <div className="text-white text-base sm:text-xl min-w-fit mb-4 md:mb-15">
            Jan 2025 - June 2025
            </div>
        </div>

        <section id="projects" className="mt-8 md:mt-10 px-2 sm:px-4">
        <h1 className='font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mt-10 md:mt-[6rem] text-center'>Projects</h1>  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 md:mt-10 max-w-xs sm:max-w-4xl w-full">
          {projects.map((project)=>(
            <ProjectCard key={project.title}{...project}/>
          ))}
        </div>
        </section>

        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl mt-10 md:mt-[6rem] text-white text-center">Contact</h1>
          <Contact />
      </div>
      
    )
}
export default Body