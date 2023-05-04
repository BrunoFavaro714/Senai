-- para importar as informações, cole isso no "sql" no site do php myadim
LOAD DATA INFILE "F:/Pudim/3SEMESTRE/TCC/usuario/docs/USUARIOS.CSV"
INTO TABLE usuarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

