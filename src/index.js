const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2/promise");

const server = express();

server.use(cors());
server.use(express.json({ limit: "25mb" }));

const port = 4002;
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

// Subir un proyecto a la bbdd
server.post("/api/projects", async (req, res) => {
  const projectData = req.body;
  console.log("Datos que me envía frontend: ", projectData);

  // Compruebo si los datos que envía frontend están completos
  const requiredData = [
    "autor",
    "job",
    "photo",
    "nameProject",
    "slogan",
    "technologies",
    "repo",
    "demo",
    "description",
    "image",
  ];

  for (const data of requiredData) {
    if (!(data in projectData) || projectData[data] === "") {
      return res.status(400).json({
        status: "error",
        result: "Comprueba si has rellenado todos los campos",
      });
    }
  }

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
    result: "Sus datos se han enviado correctamente",
    cardURL: "esta será la url de la página para visualizar el proyecto",
  });
});

// Visualizar todos los proyectos

server.get("/ShowProjects", async (req, res) => {
  const connection = await getConnection();

  const query = `SELECT * FROM autors
                  INNER JOIN projects
                  ON projects.fk_autor = autors.idAutor;`;

  const [result] = await connection.query(query);

  connection.end();

  if (result.length === 0) {
    res.status(200).json({
      status: "error",
      message: "No se ha encontrado ningún projecto",
    });
  } else {
    res.status(200).json({
      status: "success",
      message: result,
    });
  }
});
