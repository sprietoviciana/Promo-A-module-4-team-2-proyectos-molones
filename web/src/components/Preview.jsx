import PropTypes from "prop-types";
import Preview_Card from "./Preview_Card";

function Preview({ projectInfo }) {
  return (
    <section className="preview">
      <div
        className="projectImage"
        style={{ backgroundImage: `url(${projectInfo.image})` }}
      ></div>
      <Preview_Card projectInfo={projectInfo} />
    </section>
  );
}

export default Preview;

Preview.propTypes = {
  projectInfo: PropTypes.object.isRequired,
};
