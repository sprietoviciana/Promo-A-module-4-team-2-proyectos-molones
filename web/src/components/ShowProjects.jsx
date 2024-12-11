import "../styles/layout/ShowProjects.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Hero from "./Hero";
import Preview_Card from "./Preview_Card";

function ShowProjects({ projectInfo, allProjects}) {
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
            return <Preview_Card projectInfo={project} />
          })}
          
        </section>
      </main>
    </>
  );
}

export default ShowProjects;
ShowProjects.propTypes = {
  projectInfo: PropTypes.object.isRequired,
  allProjects: PropTypes.object.isRequired,
};
