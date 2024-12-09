import "../styles/layout/ShowProjects.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Hero from "./Hero";
import Preview_Card from "./Preview_Card";

function ShowProjects({ projectInfo }) {
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
          <Preview_Card projectInfo={projectInfo} />
          <Preview_Card projectInfo={projectInfo} />
          <Preview_Card projectInfo={projectInfo} />
          <Preview_Card projectInfo={projectInfo} />
          <Preview_Card projectInfo={projectInfo} />
          <Preview_Card projectInfo={projectInfo} />
        </section>
      </main>
    </>
  );
}

export default ShowProjects;
ShowProjects.propTypes = {
  projectInfo: PropTypes.object.isRequired,
};
