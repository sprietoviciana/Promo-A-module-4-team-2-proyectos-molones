const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2/promise");

const server = express();

server.use(cors());
server.use(express.json({ limit: "25mb" }));

const port = 4001;
server.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});

const staticServerPath = "./web/dist";
server.use(express.static(staticServerPath));

async function getConnection() {
  const connection = await mysql.createConnection({
    host: "9-76q.h.filess.io",
    user: "4Code_taskmanyit",
    password: "726125c8e89b4a14bd5b71809dd2de738d0b82d7",
    database: "4Code_taskmanyit",
  });
  connection.connect();
  return connection;
}

// const userProjects = [
//   {
//     id: 1,
//     nameProject: "4Code",
//     slogan: "Lorem ipsum hjajs jsiuyd uahjksjhda",
//     technologies: "React, JS, Node, Html",
//     demo: "https://www.youtube.com/watch?v=gmDAMQiyfSE",
//     repo: "https://github.com/Adalab/ejercicios-de-los-materiales/blob/main/html-spotify/mobile.jpg",
//     description: "Lorem ipsum peojsvg hjaghd hgjasd",
//     autor: "Nuria",
//     job: "Devops",
//     image: "../src/images/ebook-example.jpg",
//     photo: "../src/images/mujer_tech.png"
//   },
//   {
//     id: 2,
//     nameProject: "5Code",
//     slogan: "Lorem ipsum hjajs jsiuyd uahjksjhda",
//     technologies: "React, JS, Node, Html",
//     demo: "https://www.youtube.com/watch?v=gmDAMQiyfSE",
//     repo: "https://github.com/Adalab/ejercicios-de-los-materiales/blob/main/html-spotify/mobile.jpg",
//     description: "Lorem ipsum peojsvg hjaghd hgjasd",
//     autor: "Silvia",
//     job: "Devops",
//     image: "../src/images/ebook-example.jpg",
//     photo: "../src/images/mujer_tech.png"
//   },
//   {
//     id: 3,
//     nameProject: "6Code",
//     slogan: "Lorem ipsum hjajs jsiuyd uahjksjhda",
//     technologies: "React, JS, Node, Html",
//     demo: "https://www.youtube.com/watch?v=gmDAMQiyfSE",
//     repo: "https://github.com/Adalab/ejercicios-de-los-materiales/blob/main/html-spotify/mobile.jpg",
//     description: "Lorem ipsum peojsvg hjaghd hgjasd",
//     autor: "Cristina",
//     job: "Devops",
//     image: "../src/images/ebook-example.jpg",
//     photo: "../src/images/mujer_tech.png"
//   },
//   {
//     id: 4,
//     nameProject: "7Code",
//     slogan: "Lorem ipsum hjajs jsiuyd uahjksjhda",
//     technologies: "React, JS, Node, Html",
//     demo: "https://www.youtube.com/watch?v=gmDAMQiyfSE",
//     repo: "https://github.com/Adalab/ejercicios-de-los-materiales/blob/main/html-spotify/mobile.jpg",
//     description: "Lorem ipsum peojsvg hjaghd hgjasd",
//     autor: "Belén",
//     job: "Devops",
//     image: "../src/images/ebook-example.jpg",
//     photo: "../src/images/mujer_tech.png"
//   },
// ];

server.post("/api/projects", async (req, res) => {
  const projectData = req.body;
  console.log("Datos que me envía frontend: ", projectData);

  const connection = await getConnection();

  const queryAutor = "INSERT INTO autors (autor, job, photo) VALUES (?, ?, ?);";
  const [resultAutor] = await connection.query(queryAutor, [
    projectData.autor,
    projectData.job,
    projectData.photo,
  ]);

  console.log("resultAutor.insertId", resultAutor.insertId);

  const queryProject =
    "INSERT INTO projects (nameProject, slogan, technologies, repo, demo, description, image, fk_autor) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
  const [resultProject] = await connection.query(queryProject, [
    projectData.nameProject,
    projectData.slogan,
    projectData.technologies,
    projectData.repo,
    projectData.demo,
    projectData.description,
    projectData.image,
    resultAutor.insertId,
  ]);

  connection.end();
  console.log("Resultado de la query: ", resultProject);

  res.status(201).json({
    status: "success",
    id: "Sus datos se han enviado correctamente",
  });
});
