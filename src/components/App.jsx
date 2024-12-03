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

function App() {
  const [projectInfo, setProjectInfo] = useState({
    name: "Elegant workspace",
    slogan: "Diseños Exclusivos",
    technologies: "React JS - HTML - CSS",
    demo: "Web Link",
    repo: "GitHub Link",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem, dolorem mollitia.Ullam aliquid",
    autor: "Emmelie Bjôrklund",
    job: "Full stack Developer",
    image: { imgProject },
    photo: { imgAutor },
  });

  const [urlCard, setUrlCard] = useState("");

  const handleValuesProject = (value, id) => {
    if (id === "name") {
      setProjectInfo({ ...projectInfo, name: localStorage.set("name", value) });
    } else if (id === "slogan") {
      setProjectInfo({
        ...projectInfo,
        slogan: localStorage.set("slogan", value),
      });
    } else if (id === "repo") {
      setProjectInfo({ ...projectInfo, repo: localStorage.set("repo", value) });
    } else if (id === "demo") {
      setProjectInfo({ ...projectInfo, demo: localStorage.set("demo", value) });
    } else if (id === "technologies") {
      setProjectInfo({
        ...projectInfo,
        technologies: localStorage.set("technologies", value),
      });
    } else if (id === "desc") {
      setProjectInfo({ ...projectInfo, desc: localStorage.set("desc", value) });
    } else if (id === "autor") {
      setProjectInfo({
        ...projectInfo,
        autor: localStorage.set("autor", value),
      });
    } else if (id === "job") {
      setProjectInfo({ ...projectInfo, job: localStorage.set("job", value) });
    } else if (id === "image") {
      setProjectInfo({
        ...projectInfo,
        image: localStorage.set("image", value),
      });
    } else if (id === "photo") {
      setProjectInfo({
        ...projectInfo,
        photo: localStorage.set("photo", value),
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
        console.log("urlCard", urlCard);
      });
  };
  console.log("urlCard", urlCard);
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/main"
          element={
            <>
              <div className="container">
                <Header />
                <Main
                  projectInfo={projectInfo}
                  onChangeInput={handleValuesProject}
                  onSubmitForm={handleSubmitForm}
                  urlCard={urlCard}
                />
                <Footer />
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
