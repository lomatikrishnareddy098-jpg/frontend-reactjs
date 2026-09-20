import projects from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import "./App.css";

function App() {
    return (
        <div className="app">
            <h1>Projects</h1>

            <div className="projects-container">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;