import {Linkedin, AtSign,GitBranch, Twitter } from "lucide-react"

const Bio = () => {
    return(
        <section className="bg-white text-center md:text-left rounded-xl p-2 md:p-5 shadow-md"> 
            <img 
                src="/computer.png" alt="profile picture"  
                className="h-32 w-32 rounded-full mx-auto md:mx-0"
            />
            <h1 className="text-lg md:text-2xl font-bold mt-3">Harleen Singh</h1> 
            <p className="text-secondary-foreground py-2">I'm a full stack web developer trying to make my corner of the internet a little bit better everyday.</p> 
            <div className="flex flex-row justify-center md:justify-start gap-2 mt-2"> 
            <a href="https://www.linkedin.com/in/harleensingh01/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-blue-400 hover:text-blue-500 cursor-pointer"/>  
            </a> 
            <a href="https://x.com/HarleenS01" target="_blank" rel="noopener noreferrer">
                <Twitter className="text-pink-400 hover:text-pink-500 cursor-pointer"/>   
            </a> 
            <a href="https://github.com/Harleens1" target="_blank" rel="noopener noreferrer">
                <GitBranch className="text-red-400 hover:text-red-500 cursor-pointer"/> 
            </a>
            </div>
        </section> 
    )
    
} 

export default Bio