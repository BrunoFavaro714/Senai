drop database if exists techman;
create database techman charset=UTF8 collate utf8_general_ci;
use techman;


create table pefis(
    id int not null auto_increment primary key,
    perfil varchar(15) not null
);

create table usuarios(
    id int not null auto_increment primary key,
    senha varchar(6) not null,
    perfil int not null,
    foreign key (perfil) references perfis(id)
);

create table equipamentos(
    id int not null auto_increment primary key,
    equipamento varchar(255) not null,
    imagem varchar(100) not null,
    descricao varchar(255) not null,
    ativo boolean,
    data datetime not null
);

create table comentarios(
    id int not null auto_increment primary key,
    comentario varchar(150),
    equipamento int not null,
    perfil int not null,
    data datetime not null,
    foreign key (equipamento) references equipamentos(id),
    foreign key (perfil) references perfis(id)
);

describe pefis;
describe usuarios;
describe equipamentos;
describe comentarios;