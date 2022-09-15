DROP DATABASE IF EXISTS estacionamento;
CREATE DATABASE estacionamento charset=UTF8 collate utf8_general_ci;
USE estacionamento;

CREATE TABLE clientes(
    cpf varchar(11) primary key not null unique,
    nome varchar(100) not null,
    telefone varchar(20) not null
)

CREATE TABLE veiculos(
    placa varchar(7) primary key not null unique,
    tipo varchar(5) not null,
    modelo varchar(25) not null,
    cor varchar(10) not null,
    proprietario varchar(11) not null,
    foreign key(proprietario) references clientes(cpf)
)

CREATE TABLE vagas(
    
)