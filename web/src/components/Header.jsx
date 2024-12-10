import laptopCodeSolid from "../images/laptop-code-solid.svg";
import Logo from "./Logo";
import { Link } from "react-router";
import "../styles/layout/Header.scss";

function Header() {
  return (
    <header className="header">
      <a
        className="header__brand"
        href="./"
        title="Haz click para volver a la página inicial"
      >
        <Link to="/">
          <img
            className="header__companyLogo"
            src={laptopCodeSolid}
            alt="Logo proyectos molones"
          />
        </Link>
        <h1 className="header__title">4Code</h1>
      </a>
      <Logo />
    </header>
  );
}

export default Header;
