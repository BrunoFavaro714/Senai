drop database if exists dentista;
create database dentista charset=UTF8 collate utf8_general_ci;
use dentista;

create table profissionais (
    id integer primary key not null auto_increment,
    nome varchar(50) not null,
    especialidade varchar(20) not null
);

create table consultas (
    id integer primary key not null auto_increment,
    paciente varchar(50) not null,
    data date not null,
    horario time not null,
    profissional integer not null,
    foreign key (profissional) references profissionais(id)
);

create table tratamentos(
    id integer primary key not null auto_increment,
    consulta integer not null,
    tratamento varchar(20) not null,
    valor float(10,2) not null,
    foreign key (consulta) references consultas(id)
);

load data infile 'C:/Users/Desenvolvimento/Desktop/dentistas/profissionais.csv'
into table profissionais
fields terminated by ';'
enclosed by '"'
lines terminated by '\r\n'
ignore 1 rows;

load data infile 'C:/Users/Desenvolvimento/Desktop/dentistas/consultas.csv'
into table consultas
fields terminated by ';'
enclosed by '"'
lines terminated by '\r\n'
ignore 1 rows;

load data infile 'C:/Users/Desenvolvimento/Desktop/dentistas/tratamentos.csv'
into table tratamentos
fields terminated by ';'
enclosed by '"'
lines terminated by '\r\n'
ignore 1 rows;

-- update consultas set data=curdate();
-- update consultas set horario=current_time();

create view vw_completa as
select p.id as id_profissional, p.nome, p.especialidade, c.id as id_consulta, c.paciente, c.data, c.horario, t.id as id_tratamento, t.tratamento, t.valor
from  profissionais p
inner join consultas c
on p.id = c.Profissional
join tratamentos t
on c.id = t.consulta;