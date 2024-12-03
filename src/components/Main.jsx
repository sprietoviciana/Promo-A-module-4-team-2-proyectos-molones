import "../styles/layout/Main.scss";
import PropTypes from "prop-types";
import Form from "./Form";
import Hero from "./Hero";
import Preview from "./Preview";

function Main({ projectInfo, onChangeInput, onSubmitForm, urlCard }) {
  return (
    <main className="main">
      <Hero />

      <Preview projectInfo={projectInfo} />

      <Form onChangeInput={onChangeInput} onSubmitForm={onSubmitForm} urlCard={urlCard} />
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
