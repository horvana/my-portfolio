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
                  <a href={repo_url}>Live Page</a>
                  <span> | </span>
                  <a href={live_page}>Source Code</a>
                </div>
              </div>
            );
          })}
    </div>
  );
}
