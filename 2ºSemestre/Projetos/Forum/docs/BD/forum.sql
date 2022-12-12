
drop database if exists reenyedito;
create database reenyedito charset=UTF8 collate utf8_general_ci;
use reenyedito;

create table roles(
    id_role int not null auto_increment primary key,
    tipo varchar(10) not null
);

create table usuario(
    id_user int auto_increment not null primary key,
    id_role int not null,
    email varchar(60) unique not null,
    user varchar(15) not null,
    senha varchar(30) not null,
    favoritos varchar(30) not null,
    foreign key (id_role) references roles(id_role)
);

create table categorias(
    id_cat int primary key auto_increment not null,
    nome_cat varchar(30) not null,
    descricao varchar(150) not null
);

create table publicacoes(
    id_publi int primary key not null auto_increment,
    id_user int not null,
    id_cat int not null,
    horario datetime not null,
    img mediumblob,
    conteudo varchar(150) not null,
    foreign key (id_user) references usuario(id_user),
    foreign key (id_cat) references categorias(id_cat)
);

create table comentarios(
    id_coment int not null primary key auto_increment,
    id_user int not null,
    id_publi int not null,
    conteudo varchar(150) not null,
    foreign key (id_user) references usuario(id_user),
    foreign key (id_publi) references publicacoes(id_publi)
);

create table respostas(
    id_resp int primary key auto_increment not null,
    id_coment int not null,
    id_user int not null,
    conteudo varchar(150) not null,
    foreign key (id_user) references usuario(id_user),
    foreign key (id_coment) references comentarios(id_coment)
);

describe roles;
describe usuario;
describe categorias;
describe publicacoes;
describe comentarios;
describe respostas;
show tables;

insert into roles values 
(1, "ADMIN"),
(2, "USER");

insert into usuario values
(null, 1, "victoriacduo@gmail.com", "victoriacduo", "1234", "stardew"),
(null, 2, "brunofavaro.714@gmail.com", "brunofavaro", "4321", "pokemon"),
(null, 2,"reenyes.lima@gmail.com", "reenyelima", "6789", "mario");

insert into categorias values
(null, "stardew valley", "joguinho maravilhoso de fazendinha <3"),
(null, "pokemon", "pokemon temos que pegar, pegá-los eu tentarei"),
(null, "mario", "its me mario");

insert into publicacoes values
(null, 1, 1, "2022-12-06 13:47:32", (to_base64(LOAD_FILE("C:/Users/Desenvolvimento/Desktop/assets/publi.jpg"))), "o sebastiano está na pista galera?? quero casá-lo comigo s2s2"),
(null, 2, 1, "2022-12-04 03:22:57", (to_base64(LOAD_FILE("C:/Users/Desenvolvimento/Desktop/assets/stardew2.jpg"))), "a semente de fruta antiga morre no inverno? "),
(null, 3, 2, "2022-12-03 09:36:01", (to_base64(LOAD_FILE("C:/Users/Desenvolvimento/Desktop/assets/poke1.jpg"))), "como que passar pelo inferno da rock cave?"),
(null, 1, 3, "2022-12-01 22:15:28", (to_base64(LOAD_FILE("C:/Users/Desenvolvimento/Desktop/assets/mario.png"))), "qual o poder da fire flower?"),
(null, 2, 2, "2022-12-07 14:29:41", (to_base64(LOAD_FILE("C:/Users/Desenvolvimento/Desktop/assets/poke2.jpg"))), "como se usa o itemfinder");

insert into comentarios values
(null, 3, 1, "sim @victoriacduo o sebastiao está disponível para casamento"),
(null, 2, 1, "não @victoriacduo pois ele vai casar comigo !!!!"),
(null, 1, 2, "sim @brunofavaro a pranta morre no inverno, recomendo plantar na estufa"),
(null, 3, 2, "recomendo pegar o flash antes, mas da uma olhada nesse guia www.guia.com/rock-cave");

insert into respostas values
(null, 3, 3, "não sabia disso, obrigado pela dica");

select * from roles;
select * from usuario;
select * from categorias;
select * from publicacoes;
select * from comentarios;
select * from respostas;

create view vw_zinha as
select u.id_user, u.id_role, u.email, u.user, u.senha, u.favoritos, 
p.id_publi, p.horario, p.conteudo, p.img, 
c.id_cat, c.nome_cat, c.descricao
from usuario u
inner join publicacoes p
on u.id_user = p.id_user
join categorias c
on p.id_cat = c.id_cat;