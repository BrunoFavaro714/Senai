drop database if exists alunos;
create database alunos charset=UTF8 collate utf8_general_ci;
use alunos;

create table alunos(
    id_aluno integer not null primary key auto_increment,
    nome varchar(50) not null,
    nascimento date not null,
    sexo varchar(1) not null,
    peso float(10,2) not null
);

create table telefones(
    id_aluno integer not null,
    telefones varchar(20) not null,
    foreign key (id_aluno) references alunos(id_aluno)
);

create table aparelhos(
    id_aparelho integer not null primary key auto_increment,
    aparelho varchar(30) not null
);

create table exercicios(
    id_exercicio integer not null primary key auto_increment,
    descricao_exercicio varchar(30) not null,
    grupo_muscular varchar(20) not null,
    id_aparelho integer not null,
    foreign key (id_aparelho) references aparelhos(id_aparelho)
);

create table ficha_exercicios(
    id_aluno integer not null,
    id_exercicio integer not null,
    dia_semana varchar(15) not null,
    serie varchar(50) not null,
    foreign key (id_aluno) references alunos(id_aluno),
    foreign key (id_exercicio) references exercicios(id_exercicio)
);

describe clientes;
describe telefones;
describe aparelhos;
describe exercicios;
describe ficha_exercicios;
show tables;