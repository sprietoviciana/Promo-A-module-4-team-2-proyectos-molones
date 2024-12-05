CREATE TABLE projects (
`idProyect` int auto_increment primary key,
`name` varchar(45) not null,
`slogan` varchar(100) not null,
`technologies` varchar(45) not null,
`repo` LONGTEXT not null,
`demo` LONGTEXT,
`desc` LONGTEXT,
`image` LONGTEXT not null
);

CREATE TABLE autors(
`idAutor` int auto_increment primary key,
`autor`VARCHAR(45) not null,
`job`VARCHAR(45) not null,
`photo`LONGTEXT not null
);