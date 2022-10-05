DROP DATABASE IF EXISTS livrocaixa;
CREATE DATABASE livrocaixa charset=UTF8 collate utf8_general_ci;

USE livrocaixa;

CREATE TABLE lancamentos (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data varchar(10) NOT NULL,
    descricao varchar(50) NOT NULL,
    valor float(10,2) NOT NULL,
    tipo varchar(1)
);

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/aula7/lojinha_be/docs/lancamentos.csv'
INTO TABLE lancamentos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;