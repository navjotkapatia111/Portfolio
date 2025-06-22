import React from "react"

type Projects = {
    title:string,
    image:string,
    description:string,
    technology:string,
    link:string
}

export const ProjectCard:React.FC<Projects>=({title,image,description,technology,link})=>{
    return(
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white hover:scale-105 transition-transform">
             <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
            <img src={image} alt={`${title} screenshot`}
            className="rounded-md mt-5 mb-4 w-full h-48 object-cover"/>
            <p className="text-xl font-bold mt-4 mb-2">{description}</p>
            <p  className="text-gray-300 mt-4 mb-4">{technology}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">View Live Project</a>
        </div>
    )

}