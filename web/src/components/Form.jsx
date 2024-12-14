import PropTypes from "prop-types";
import GetAvatar from "./GetAvatar";
import localStorage from "../services/localStorage";
import "../styles/layout/Main.scss";

function Form({ onChangeInput, onSubmitForm, urlCard, projectInfo }) {
  const handleChangeInput = (event) => {
    onChangeInput(event.target.value, event.target.id);
  };

  const handleChangeimage = (image) => {
    onChangeInput(image, "image");
  };

  const handleChangephoto = (image) => {
    onChangeInput(image, "photo");
  };

  const handleSaveProyect = (event) => {
    event.preventDefault();
    onSubmitForm();
  };

  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          className="addForm__input"
          type="text"
          name="nameProject"
          id="nameProject"
          placeholder="Nombre del proyecto"
          value={
            localStorage.get("nameProject") === undefined
              ? ""
              : projectInfo.nameProject
          }
          onChange={handleChangeInput}
        />
        <input
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          value={
            localStorage.get("slogan") === undefined ? "" : projectInfo.slogan
          }
          onChange={handleChangeInput}
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio (copia y pega la url)"
            value={
              localStorage.get("repo") === undefined ? "" : projectInfo.repo
            }
            onChange={handleChangeInput}
          />
          <input
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo (copia y pega la url)"
            value={
              localStorage.get("demo") === undefined ? "" : projectInfo.demo
            }
            onChange={handleChangeInput}
          />
        </div>
        <input
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
          value={
            localStorage.get("technologies") === undefined
              ? ""
              : projectInfo.technologies
          }
          onChange={handleChangeInput}
        />
        <textarea
          className="addForm__input"
          type="text"
          name="description"
          id="desc"
          placeholder="descripción"
          value={
            localStorage.get("description") === undefined
              ? ""
              : projectInfo.description
          }
          rows="5"
          onChange={handleChangeInput}
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          className="addForm__input"
          type="text"
          name="autor"
          id="autor"
          placeholder="Nombre"
          value={
            localStorage.get("autor") === undefined ? "" : projectInfo.autor
          }
          onChange={handleChangeInput}
        />
        <input
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
          value={localStorage.get("job") === undefined ? "" : projectInfo.job}
          onChange={handleChangeInput}
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <label htmlFor="image" className="button">
          <GetAvatar
            onChangeInput={handleChangeimage}
            text="Subir foto del proyecto"
          />
        </label>
        <input
          className="addForm__hidden"
          type="file"
          name="image"
          id="image"
        />

        <label htmlFor="photo" className="button">
          <GetAvatar
            onChangeInput={handleChangephoto}
            text="Subir foto de la autora"
          />
        </label>
        <input
          className="addForm__hidden"
          type="file"
          name="photo"
          id="photo"
        />
        <button onClick={handleSaveProyect} className="button--large">
          Guardar proyecto
        </button>
      </fieldset>
      <a className="form__link button__link" href={urlCard} target="_blank">
        {urlCard && <p className="button">Click para ver tu proyecto</p>}
      </a>
    </form>
  );
}

export default Form;

Form.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  urlCard: PropTypes.string.isRequired,
  projectInfo: PropTypes.object.isRequired,
};
