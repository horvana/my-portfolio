import { myProjects } from "../list";

export default function Projects() {
  return (
    <div className="projects">
          {myProjects.map((project) => {
            const { name, image, repo_url, live_page } = project;
            return (
                <div className="project" key={name}>
                <h2>{name}</h2>
                <div className="img-container">
                    <img src={image} alt={`${name} preview`}></img>
                </div>
                <div className="links">
                  <a href={repo_url} target="_blank" rel="noopener noreferrer">Source Code</a>
                  <span> | </span>
                  <a href={live_page} target="_blank" rel="noopener noreferrer">Live Page</a>
                </div>
              </div>
            );
          })}
    </div>
  );
}
