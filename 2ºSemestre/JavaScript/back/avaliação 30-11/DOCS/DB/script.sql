drop database if exists cursos;
create database cursos charset=UTF8 collate utf8_general_ci;
use cursos;

create table alunos(
    id integer primary key auto_increment,
    nome varchar(50) not null,
    nascimento datetime not null
);

create table cursos(
    id integer primary key auto_increment,
    curso varchar(50) not null,
    duracao integer not null
);

create table cursados(
    aluno integer not null,
    curso integer not null,
    data datetime not null
);

load data infile 'C:/Users/Desenvolvimento/Desktop/avaliacao/alunos.csv'
into table alunos
fields terminated by ';'
enclosed by '"'
lines terminated by '\r\n'
ignore 1 rows;

load data infile 'C:/Users/Desenvolvimento/Desktop/avaliacao/cursos.csv'
into table cursos
fields terminated by ';'
enclosed by '"'
lines terminated by '\r\n'
ignore 1 rows;

load data infile 'C:/Users/Desenvolvimento/Desktop/avaliacao/cursados.csv'
into table cursados
fields terminated by ';'
enclosed by '"'
lines terminated by '\r\n'
ignore 1 rows;

select * from alunos;
select * from cursos;
select * from cursados;

create view vw_completa as
select a.id as id_alunos, a.nome, a.nascimento, c.id as id_curso, c.curso, c.duracao, ca.data
from alunos a
inner join cursados ca
on a.id = ca.aluno
join curso c
on ca.curso = c.id;