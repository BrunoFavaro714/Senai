drop database if exists duplicatas;
create database duplicatas charset=UTF8 collate utf8_general_ci;
use duplicatas;

create table clientes(
    cod_cli integer not null primary key auto_increment,
    nome varchar(50) not null,
    endereco varchar(50) not null,
    bairro varchar(20) not null,
    cidade varchar(20) not null,
    uf varchar(2) not null
);

create table telefones(
    cod_cli integer not null,
    tipo varchar(8) not null,
    telefone varchar(20) not null
);

create table duplicatas(
    num_dupli integer not null primary key auto_increment,
    cod_cli integer not null,
    data_compra date not null,
    vencimento date not null,
    pagamento date,
    valor float(10, 2) not null,
    diferenca float(8, 2)
);

describe clientes;
describe telefones;
describe duplicatas;
show tables;

LOAD DATA INFILE 'D:/BrunoFavaro/Senai/JavaScript/database/Atividade 08-18-2022/duplicatas/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/BrunoFavaro/Senai/JavaScript/database/Atividade 08-18-2022/duplicatas/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/BrunoFavaro/Senai/JavaScript/database/Atividade 08-18-2022/duplicatas/duplicatas.csv'
INTO TABLE duplicatas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from clientes c
join telefones t
on c.cod_cli = t.cod_cli;

create view vw_clientes as
select c.cod_cli, c.nome, c.endereco, c.bairro, c.cidade, c.uf, t.tipo, t.telefone
from clientes c
join telefones t
on c.cod_cli = t.cod_cli;

select * from clientes;
select * from telefones;
select * from duplicatas;