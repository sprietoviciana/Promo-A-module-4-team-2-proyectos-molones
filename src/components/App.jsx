import "../styles/App.scss";
import imgProject from "../images/apuntes-tablet.jpg";
import imgAutor from "../images/mujer_tech2.png";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";
import localStorage from "../services/localStorage";
import Landing from "./Landing";
import { Route, Routes } from "react-router-dom";
import ShowProjects from "./ShowProjects";

function App() {
  const [projectInfo, setProjectInfo] = useState({
    name: localStorage.get("name", "Elegant workspace"),
    slogan: localStorage.get("slogan", "Diseños Exclusivos"),
    technologies: localStorage.get("technologies", "React JS - HTML - CSS"),
    demo: localStorage.get("demo", "Web Link"),
    repo: localStorage.get("repo", "GitHub Link"),
    desc: localStorage.get(
      "desc",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem, dolorem mollitia.Ullam aliquidº"
    ),
    autor: localStorage.get("autor", "Emmelie Bjôrklund"),
    job: localStorage.get("job", "Full stack Developer"),
    image: localStorage.get("image", { imgProject }),
    photo: localStorage.get("photo", { imgAutor }),
  });

  const [urlCard, setUrlCard] = useState("");

  const handleValuesProject = (value, id) => {
    if (id === "name") {
      localStorage.set("name", value);
      setProjectInfo({ ...projectInfo, name: value });
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
    } else if (id === "desc") {
      localStorage.set("desc", value);
      setProjectInfo({ ...projectInfo, desc: value });
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

  const handleSubmitForm = () => {
    fetch("https://dev.adalab.es/api/projectCard", {
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
        console.log("data", data);
        setUrlCard(data.cardURL);
      });
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
              />
            }
          />
          <Route path="/showProjects" element={<ShowProjects />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
