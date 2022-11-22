drop database if exists reenyedito;
create database reenyedito charset=UTF8 collate utf8_general_ci;
use reenyedito;

create table usuario(
    email varchar(60) primary key not null,
    id_user int auto_increment not null,
    user varchar(15) not null,
    senha varchar(30) not null,
    favoritos varchar(30) not null
);

create table categorias(
    id_cat int primary key auto_increment not null,
    nome_cat varchar(30) not null,
    descricao varchar(150) not null,
),

create table sub_cat(
    id_subcat int primary key auto_increment not null,
    nome_subcat varchar(30) not null,
    descricao varchar(150) not null,
),

create table publicacoes(
    id_publi int primary key not null auto_increment,
    id_user int not null,
    horario date not null,
    id_subcat int not null,
    conteudo varchar(150) not null,
    foreign key (id_user) references usuario(id_user),
    foreign key (id_subcat) references sub_cat(id_subcat),
);

create table comentarios(
    id_user int not null,
    id_publi int not null,
    id_coment int not null primary key auto_increment,
    conteudo varchar(150) not null,
),

create table respostas(
    id_resp int not null,
    id_coment int not null,
    id_user int not null,
    conteudo varchar(150) not null,
    foreign key (id_user) references usuario(id_user),
    foreign key (id_coment) references comentarios(id_coment),
)