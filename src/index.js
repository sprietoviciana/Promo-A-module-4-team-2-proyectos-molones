const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2/promise");

const server = express();

server.use(cors());
server.use(express.json({ limit: "25mb" }));

require("dotenv").config();

server.set("view engine", "ejs");

const port = process.env.PORT;
const URL = process.env.PROD
  ? "https://promo-a-module-4-team-2-proyectos.onrender.com"
  : `http://localhost:${port}`;
console.log(process.env);
server.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});

async function getConnection() {
  const connection = await mysql.createConnection({
    host: "9-76q.h.filess.io",
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.USER_DB,
  });
  connection.connect();
  return connection;
}

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
    cardURL: `${URL}/detail/${resultProject.insertId}`,
  });
});

//Motor de plantillas

server.get("/detail/:idProject", async (req, res) => {
  const id = req.params.idProject;
  const connection = await getConnection();
  const query = `SELECT * FROM projects INNER JOIN autors ON projects.fk_autor = autors.idAutor WHERE projects.idProyect = ?`;
  const [result] = await connection.query(query, [id]);

  connection.end();

  if (result.length === 0) {
    res.status(200).json({
      status: "error",
      message: "No se ha encontrado ningún projecto",
    });
  } else {
    res.render("detailProject", { projectInfo: result[0] });
  }
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

//endpoint para eliminar un proyecto

server.delete("/ShowProjects/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({
      message: "Invalid ID. Must be a number.",
    });
  } else {
    const connection = await getConnection();
    const query = "DELETE FROM projects WHERE idProyect = ?";
    await connection.query(query, [id]);
    connection.end();
    res.status(204).send();
  }
});

const staticServerPath = "./web/dist";
server.use(express.static(staticServerPath));

const pathServerPublicStyles = "./src/public-css";
server.use(express.static(pathServerPublicStyles));
