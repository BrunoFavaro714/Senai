drop database if exists linhas;
create database linhas charset=UTF8 collate utf8_general_ci;
use linhas;

create table motorista(
    cpf varchar(20) not null primary key,
    nome_motorista varchar(30) not null
);

create table telefones(
    cpf varchar(20) not null,
    telefones varchar(20) not null,
    foreign key (cpf) references motorista(cpf)
);

create table linhas(
    id_linha integer not null primary key auto_increment,
    descricao_linha varchar(30) not null
);

create table horarios(
    id_linha integer not null,
    horario time not null,
    foreign key (id_linha) references linhas(id_linha)
);

create table mot_linha(
    cpf varchar(20) not null,
    id_linha integer not null,
    data date not null
);

describe motorista;
describe telefones;
describe linhas;
describe horarios;
describe mot_linha;
show tables;

select * from motorista m
join telefones t
on m.cpf = t.cpf;

create view vw_motorista as
select c.cpf, c.nome_motorista, t.telefones from clientes c
join telefones t
on c.cpf = t.cpf;

select * from vw_motorista;