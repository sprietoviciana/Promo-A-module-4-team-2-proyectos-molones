import "../styles/App.scss";
import imgProject from "../images/apuntes-tablet.jpg";
import imgAutor from "../images/mujer_tech2.png";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import localStorage from "../services/localStorage";
import Landing from "./Landing";
import { Route, Routes } from "react-router-dom";
import ShowProjects from "./ShowProjects";

function App() {
  const [projectInfo, setProjectInfo] = useState({
    nameProject: localStorage.get("nameProject", "Elegant workspace"),
    slogan: localStorage.get("slogan", "Diseños Exclusivos"),
    technologies: localStorage.get("technologies", "React JS - HTML - CSS"),
    demo: localStorage.get("demo", "Web Link"),
    repo: localStorage.get("repo", "GitHub Link"),
    description: localStorage.get(
      "description",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem, dolorem mollitia.Ullam aliquidº"
    ),
    autor: localStorage.get("autor", "Emmelie Bjôrklund"),
    job: localStorage.get("job", "Full stack Developer"),
    image: localStorage.get("image", imgProject),
    photo: localStorage.get("photo", imgAutor),
  });

  const [urlCard, setUrlCard] = useState("");

  const [allProjects, setAllProjects] = useState([]);

  const handleValuesProject = (value, id) => {
    if (id === "nameProject") {
      localStorage.set("nameProject", value);
      setProjectInfo({ ...projectInfo, nameProject: value });
    } else if (id === "slogan") {
      localStorage.set("slogan", value);
      setProjectInfo({ ...projectInfo, slogan: value });
    } else if (id === "repo") {
      localStorage.set("repo", value);
      setProjectInfo({ ...projectInfo, repo: value });
    } else if (id === "demo") {
      localStorage.set("demo", value);
      setProjectInfo({ ...projectInfo, demo: value });
    } else if (id === "technologies") {
      localStorage.set("technologies", value);
      setProjectInfo({ ...projectInfo, technologies: value });
    } else if (id === "description") {
      localStorage.set("description", value);
      setProjectInfo({ ...projectInfo, description: value });
    } else if (id === "autor") {
      localStorage.set("autor", value);
      setProjectInfo({ ...projectInfo, autor: value });
    } else if (id === "job") {
      localStorage.set("job", value);
      setProjectInfo({ ...projectInfo, job: value });
    } else if (id === "image") {
      localStorage.set("image", value);
      setProjectInfo({
        ...projectInfo,
        image: value,
      });
    } else if (id === "photo") {
      localStorage.set("photo", value);
      setProjectInfo({
        ...projectInfo,
        photo: value,
      });
    }
  };

  const URL_PRODUCTION =
    "https://promo-a-module-4-team-2-proyectos.onrender.com";
  const URL_LOCAL = `http://localhost:${import.meta.env.VITE_PORT}`;
  const URL = import.meta.env.PROD ? URL_PRODUCTION : URL_LOCAL;

  const fetchProjects = () => {
    return fetch(`${URL}/ShowProjects`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllProjects(data.message);
      });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmitForm = () => {
    fetch(`${URL}/api/projects`, {
      method: "POST",
      body: JSON.stringify(projectInfo),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("data", data);
        setUrlCard(data.cardURL);
      })
      .then(() => fetchProjects());
  };

  // fetch delete
  const handleDeleteProject = (id) => {
    fetch(`${URL}/ShowProjects/${id}`, {
      method: "DELETE",
    }).then(() => fetchProjects());
  };

  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/main"
            element={
              <Main
                projectInfo={projectInfo}
                onChangeInput={handleValuesProject}
                onSubmitForm={handleSubmitForm}
                urlCard={urlCard}
                onDeleteProject={handleDeleteProject}
              />
            }
          />
          <Route
            path="/showProjects"
            element={
              <ShowProjects
                projectInfo={projectInfo}
                allProjects={allProjects}
                onDeleteProject={handleDeleteProject}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
