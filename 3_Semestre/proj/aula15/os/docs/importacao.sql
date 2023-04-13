LOAD DATA INFILE "D:/BrunoFavaro/Senai/3_Semestre/proj/aula15/os/docs/csvs/colaboradores.csv"
INTO TABLE colaborador
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "D:/BrunoFavaro/Senai/3_Semestre/proj/aula15/os/docs/csvs/os.csv"
INTO TABLE os
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "D:/BrunoFavaro/Senai/3_Semestre/proj/aula15/os/docs/csvs/comentarios.csv"
INTO TABLE comentario
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

UPDATE os SET encerramento = NULL WHERE encerramento = '0000-00-00 00:00:00.000';