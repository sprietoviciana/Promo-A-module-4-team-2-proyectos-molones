const express = require("express");
const cors = require("cors");
const path = require("path");

const server = express();

server.use(cors());

const port = 4001;
server.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});

const staticServerPath = "./web/dist";

server.use(express.static(staticServerPath));

const userProjects = [
  {
    id: 1,
    name: "4Code",
    slogan: "Lorem ipsum hjajs jsiuyd uahjksjhda",
    technologies: "React, JS, Node, Html",
    demo: "https://www.youtube.com/watch?v=gmDAMQiyfSE",
    repo: "https://github.com/Adalab/ejercicios-de-los-materiales/blob/main/html-spotify/mobile.jpg",
    desc: "Lorem ipsum peojsvg hjaghd hgjasd",
    autor: "Nuria",
    job: "Devops",
    image: "../src/images/ebook-example.jpg",
    photo: "../src/images/mujer_tech.png"
  },
  {
    id: 2,
    name: "5Code",
    slogan: "Lorem ipsum hjajs jsiuyd uahjksjhda",
    technologies: "React, JS, Node, Html",
    demo: "https://www.youtube.com/watch?v=gmDAMQiyfSE",
    repo: "https://github.com/Adalab/ejercicios-de-los-materiales/blob/main/html-spotify/mobile.jpg",
    desc: "Lorem ipsum peojsvg hjaghd hgjasd",
    autor: "Silvia",
    job: "Devops",
    image: "../src/images/ebook-example.jpg",
    photo: "../src/images/mujer_tech.png"
  },
  {
    id: 3,
    name: "6Code",
    slogan: "Lorem ipsum hjajs jsiuyd uahjksjhda",
    technologies: "React, JS, Node, Html",
    demo: "https://www.youtube.com/watch?v=gmDAMQiyfSE",
    repo: "https://github.com/Adalab/ejercicios-de-los-materiales/blob/main/html-spotify/mobile.jpg",
    desc: "Lorem ipsum peojsvg hjaghd hgjasd",
    autor: "Cristina",
    job: "Devops",
    image: "../src/images/ebook-example.jpg",
    photo: "../src/images/mujer_tech.png"
  },
  {
    id: 4,
    name: "7Code",
    slogan: "Lorem ipsum hjajs jsiuyd uahjksjhda",
    technologies: "React, JS, Node, Html",
    demo: "https://www.youtube.com/watch?v=gmDAMQiyfSE",
    repo: "https://github.com/Adalab/ejercicios-de-los-materiales/blob/main/html-spotify/mobile.jpg",
    desc: "Lorem ipsum peojsvg hjaghd hgjasd",
    autor: "Belén",
    job: "Devops",
    image: "../src/images/ebook-example.jpg",
    photo: "../src/images/mujer_tech.png"
  },
];

server.get("/projects/list", (request, response) => {
  response.status(200).json({
    success: true,
    projects: userProjects
  })
})
