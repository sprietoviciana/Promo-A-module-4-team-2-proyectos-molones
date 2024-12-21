import laptopCodeSolid from "../images/laptop-code-solid.svg";
import Logo from "./Logo";
import { Link } from "react-router";
import "../styles/layout/Header.scss";

function Header() {
  return (
    <header className="header">
      <Link
        to="/"
        title="Haz click para volver a la página inicial"
        className="header__brand"
      >
        <img
          className="header__companyLogo"
          src={laptopCodeSolid}
          alt="Logo proyectos molones"
        />

        <h1 className="header__title">4Code</h1>
      </Link>

      <Logo />
    </header>
  );
}

export default Header;
