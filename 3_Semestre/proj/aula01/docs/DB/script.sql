drop database if exists chaparia;
create database chaparia charset=UTF8 collate utf8_general_ci;
use chaparia;

create table entregadores (
    id integer not null auto_increment primary key,
    nome varchar(50) not null,
    email varchar(50) not null,
    senha varchar(20) not null,
    veiculo varchar(9) not null
);

create table pedidos (
    id_pedido integer not null auto_increment primary key,
    cliente varchar(50) not null,
    endereco varchar(150) not null,
    produto varchar(150) not null,
    data date not null,
    hora_pedido time not null,
    hora_entrega time not null,
    hora_fim time,
    entregador integer not null,
    foreign key (entregador) references entregadores(id)
);

load data infile 'D:/BrunoFavaro/Senai/3_Semestre/proj/aula01/docs/dados/entregadores.csv'
into table entregadores
fields terminated by ';'
enclosed by '"'
lines terminated by '\r\n'
ignore 1 rows;

load data infile 'D:/BrunoFavaro/Senai/3_Semestre/proj/aula01/docs/dados/pedidos.csv'
into table pedidos
fields terminated by ';'
enclosed by '"'
lines terminated by '\r\n'
ignore 1 rows;

select * from entregadores;
select * from pedidos;