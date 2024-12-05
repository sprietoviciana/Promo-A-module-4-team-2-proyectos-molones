import "../styles/layout/ShowProjects.scss";
import { Link } from "react-router-dom";
import Hero from "./Hero";

function ShowProjects() {
  return (
    <main className="showProjects-container">
      <Hero>
        <Link className="button--link" to="/main">
          Nuevo proyecto
        </Link>
      </Hero>
      <p>ShowProjects</p>
    </main>
  );
}

export default ShowProjects;
