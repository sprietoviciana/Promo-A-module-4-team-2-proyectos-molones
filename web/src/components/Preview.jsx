import PropTypes from "prop-types";
import Preview_Card from "./Preview_Card";

function Preview({ projectInfo, onDeleteProject }) {
  return (
    <section className="preview">
      <div
        className="projectImage"
        style={{ backgroundImage: `url(${projectInfo.image})` }}
      ></div>
      <Preview_Card
        projectInfo={projectInfo}
        onDeleteProject={onDeleteProject}
      />
    </section>
  );
}

export default Preview;

Preview.propTypes = {
  projectInfo: PropTypes.object.isRequired,
  onDeleteProject: PropTypes.func.isRequired,
};
