DROP DATABASE IF EXISTS locadora;
CREATE DATABASE locadora charset=UTF8 COLLATE utf8_unicode_ci;
USE locadora;

CREATE TABLE clientes(
    cod_cli integer not null primary key auto_increment,
    nome varchar(50) not null,
    endereco varchar(100) not null,
    telefones varchar(15) not null
);


CREATE TABLE filmes(
    cod_fil integer not null primary key auto_increment,
    filme varchar(50) not null,
    genero varchar(20) not null
);

CREATE TABLE locacoes(
    id_loca integer not null primary key auto_increment,
    cod_cli integer not null,
    cod_fil integer not null,
    data_loca DATE not null,
    data_devo DATE,

    foreign key (cod_cli) references clientes(cod_cli),
    foreign key (cod_fil) references filmes(cod_fil)
);

describe clientes;
describe filmes;
describe locacoes;

show tables;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/aula8/locadora_be/docs/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/aula8/locadora_be/docs/filmes.csv'
INTO TABLE filmes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/aula8/locadora_be/docs/locacoes.csv'
INTO TABLE locacoes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from clientes;
select * from filmes;
select * from locacoes;