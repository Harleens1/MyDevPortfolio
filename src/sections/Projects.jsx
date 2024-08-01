import ProjectCard from "../components/ProjectCard"


const projects = [
    {
        name: "Summarizer", 
        description: "An article summarizer using AI.",  
        url: "https://hsarticlesummarizer.netlify.app/", 
        imgUrl: "summarizer.png",
    }, 
    {
        name: "Simple Snake", 
        description: "My take on the nostalgic snake game.", 
        url: "https://hssnakegame.netlify.app/",
        imgUrl: "snake.png",
    }, 
    {
        name: "Budget Tracker", 
        description: "Budget tracker to manage finances and track expenses.", 
        url: "https://hsbudgettracker.netlify.app/",
        imgUrl: "budget.png",
    }, 
    {
        name: "Hirigana language quiz", 
        description: "Language quiz on the Japanese hirigana alphabet.", 
        url: "https://hirigana-quiz.netlify.app/",
        imgUrl: "hirigana.png",
    }, 
    {
        name: "Library", 
        description: "A book tracking app to keep track of the books you have read.", 
        url: "https://hsbookslist.netlify.app/",
        imgUrl: "books.png",
    }, 
    {
        name: "Blog", 
        description: "My personal blog where I sometimes share my thoughts.", 
        url: "https://hsblog.netlify.app/",
        imgUrl: "blog.png",
    }, 
]


const Projects = () => {
    return (
        <>
            <h1 className="text-4xl text-left font-bold mb-2">Recent Projects</h1> 
            <ul className="bg-white text-left rounded-xl p-4">
                {projects.map ((project, i) => ( 
                    <li key={i}>
                    <ProjectCard 
                    name = {project.name} 
                    description = {project.description} 
                    url = {project.url}
                    imgUrl = {project.imgUrl} 
                    />
                    </li>
                   
                ))}
            </ul>
        </>
    )
} 

export default Projects