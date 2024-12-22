import "../styles/layout/ShowProjects.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Hero from "./Hero";
import Preview_Card from "./Preview_Card";

function ShowProjects({ allProjects, onDeleteProject }) {
  return (
    <>
      <header>
        <Hero>
          <Link className="button--link" to="/main">
            Nuevo proyecto
          </Link>
        </Hero>
      </header>

      <main className="showProjects__container">
        <section className="showProjects__cards">
          {allProjects.map((project) => {
            return (
              <Preview_Card
                key={project.id}
                projectInfo={project}
                onDeleteProject={onDeleteProject}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default ShowProjects;
ShowProjects.propTypes = {
  allProjects: PropTypes.array.isRequired,
  onDeleteProject: PropTypes.func.isRequired,
};
