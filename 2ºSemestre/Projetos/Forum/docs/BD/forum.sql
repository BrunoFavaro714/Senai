drop database if exists reenyedito;
create database reenyedito charset=UTF8 collate utf8_general_ci;
use reenyedito;

create table usuario(
    id_user int auto_increment not null primary key,
    email varchar(60) unique not null,
    user varchar(15) not null,
    senha varchar(30) not null,
    favoritos varchar(30) not null
);

create table categorias(
    id_cat int primary key auto_increment not null,
    nome_cat varchar(30) not null,
    descricao varchar(150) not null
);

create table sub_cat(
    id_subcat int primary key auto_increment not null,
    id_cat int not null,
    nome_subcat varchar(30) not null,
    descricao varchar(150) not null,
    foreign key (id_cat) references categorias(id_cat)
);

create table publicacoes(
    id_publi int primary key not null auto_increment,
    id_user int not null,
    id_subcat int not null,
    horario date not null,
    conteudo varchar(150) not null,
    foreign key (id_user) references usuario(id_user),
    foreign key (id_subcat) references sub_cat(id_subcat)
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

describe usuario;
describe categorias;
describe sub_cat;
describe publicacoes;
describe comentarios;
describe respostas;
show tables;

insert into usuario values
(null, "victoriacduo@gmail.com", "victoriacduo", "1234", "stardew"),
(null, "brunofavaro.714@gmail.com", "brunofavaro", "4321", "pokemon"),
(null, "reenyes.lima@gmail.com", "reenyelima", "6789", "mario");

insert into categorias values
(null, "stardew valley", "joguinho maravilhoso de fazendinha <3"),
(null, "pokemon", "pokemon temos que pegar, pegá-los eu tentarei"),
(null, "mario", "its me mario");

insert into sub_cat values 
(null, 1, "sementes", "tempo de crescimento e valor de cada semente"),
(null, 1, "npcs", "presentes favoritos e solteiros"),
(null, 1, "geral", "dúvidas gerais sobre stardew valley"),
(null, 2, "itens", "como usar itens"),
(null, 2, "pokebolas", "função de cada pokebola"),
(null, 2, "geral", "dúvidas gerais sobre pokemon"),
(null, 3, "segredos", "passagens secretas no geral"),
(null, 3, "geral", "dúvidas gerais sobre mario"),
(null, 3, "poderes", "dúvidas de cada poder");

insert into publicacoes values
(null, 1, 2, "13:47:32", "o sebastiano está na pista galera?? quero casá-lo comigo s2s2"),
(null, 2, 1, "03:22:57", "a semente de fruta antiga morre no inverno? "),
(null, 3, 6, "09:36:01", "como que passar pelo inferno da rock cave?"),
(null, 1, 9, "22:15:28", "qual o poder da fire flower?"),
(null, 2, 4, "14:29:41", "como se usa o itemfinder");

insert into comentarios values
(null, 3, 1, "sim @victoriacduo o sebastiao está disponível para casamento"),
(null, 2, 1, "não @victoriacduo pois ele vai casar comigo !!!!"),
(null, 1, 2, "sim @brunofavaro a pranta morre no inverno, recomendo plantar na estufa"),
(null, 3, 2, "recomendo pegar o flash antes, mas da uma olhada nesse guia www.guia.com/rock-cave");

insert into respostas values
(null, 3, 3, "não sabia disso, obrigado pela dica");

select * from usuario;
select * from categorias;
select * from sub_cat;
select * from publicacoes;
select * from comentarios;
select * from respostas;