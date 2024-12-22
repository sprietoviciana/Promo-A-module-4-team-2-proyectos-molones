import "../styles/layout/Main.scss";
import PropTypes from "prop-types";
import Form from "./Form";
import Hero from "./Hero";
import Preview from "./Preview";
import { Link } from "react-router-dom";

function Main({ projectInfo, onChangeInput, onSubmitForm, urlCard}) {
  return (
    <main className="main">
      <Hero>
        <Link className="button--link" to="/ShowProjects">
          Ver proyectos
        </Link>
      </Hero>

      <Preview projectInfo={projectInfo} />

      <Form
        onChangeInput={onChangeInput}
        onSubmitForm={onSubmitForm}
        urlCard={urlCard}
        projectInfo={projectInfo}
      />
    </main>
  );
}

export default Main;

Main.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  projectInfo: PropTypes.object.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  urlCard: PropTypes.string.isRequired,
};
