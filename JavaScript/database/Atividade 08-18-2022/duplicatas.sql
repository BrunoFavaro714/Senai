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