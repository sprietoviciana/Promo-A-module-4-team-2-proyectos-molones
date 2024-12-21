import PropTypes from "prop-types";

function Preview_Card({ projectInfo }) {
  return (
    <>
      <article className="card">
        <button>X</button>
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">
            Personal project card
          </span>
        </h2>

        <div className="card__author">
          <div
            className="card__authorPhoto"
            style={{ backgroundImage: `url(${projectInfo.photo})` }}
          ></div>
          <p className="card__job">{projectInfo.job}</p>
          <h3 className="card__name__autor">{projectInfo.autor}</h3>
        </div>

        <div className="card__project">
          <h3 className="card__name">{projectInfo.nameProject}</h3>
          <p className="card__slogan">{projectInfo.slogan}</p>
          <p className="card__description">{projectInfo.description}</p>

          <div className="card__technicalInfo">
            <p className="card__technologies">{projectInfo.technologies}</p>

            <a
              className="icon icon__www"
              href={projectInfo.demo}
              target="_blank"
              title="Haz click para ver el proyecto online"
            ></a>
            <a
              className="icon icon__github"
              href={projectInfo.repo}
              target="_blank"
              title="Haz click para ver el código del proyecto"
            ></a>
          </div>
        </div>
      </article>
    </>
  );
}

export default Preview_Card;
Preview_Card.propTypes = {
  projectInfo: PropTypes.object.isRequired,
};
