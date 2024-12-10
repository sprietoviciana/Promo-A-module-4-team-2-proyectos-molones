import "../styles/layout/Landing.scss";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <main className="container-landing">
        <h1 className="title-landing">4Code</h1>
        <p className="subtitle">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <div className="button btn">
          <Link to="/main">
            <a href="">Comenzar</a>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Landing;
