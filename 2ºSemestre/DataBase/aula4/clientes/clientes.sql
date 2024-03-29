drop database if exists clientes;
create database clientes charset=UTF8 collate utf8_general_ci;
use clientes;

create table clientes(
    id_cliente integer not null primary key auto_increment,
    nome varchar(50) not null,
    nascimento date not null,
    sexo varchar(1) not null,
    peso float(10,2) not null
);

create table telefones(
    id_cliente integer not null,
    telefones varchar(20) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

describe clientes;
describe telefones;
show tables;

LOAD DATA INFILE 'D:/BrunoFavaro/Senai/JavaScript/database/Atividade 08-18-2022/clientes/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/BrunoFavaro/Senai/JavaScript/database/Atividade 08-18-2022/clientes/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from clientes;
select * from telefones;