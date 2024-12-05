ALTER TABLE projects ADD COLUMN fk_autor INT;
ALTER TABLE projects ADD FOREIGN KEY (fk_autor) REFERENCES autors(idAutor);