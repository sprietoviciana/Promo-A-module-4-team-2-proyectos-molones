import "../styles/layout/ShowProjects.scss";
import { Link } from "react-router-dom";
import Hero from "./Hero";

function ShowProjects() {
  return (
    <>
      <header>
        <Hero>
          <Link className="button--link" to="/main">
            Nuevo proyecto
          </Link>
        </Hero>
      </header>

      <main className="showProjects-container">
        <section>ShowProjects</section>
      </main>
    </>
  );
}

export default ShowProjects;
