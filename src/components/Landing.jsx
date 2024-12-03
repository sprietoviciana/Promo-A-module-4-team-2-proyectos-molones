import "../styles/layout/Landing.scss";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Header from "./Header";

function Landing() {
  return (
    <>
      <div className="container">
        <Header />
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

        <Footer />
      </div>
    </>
  );
}

export default Landing;
