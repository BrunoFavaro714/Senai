drop database if exists entregas;
create database entregas charset=UTF8 collate utf8_general_ci;
use entregas;

create table clientes(
    id_cliente integer not null primary key auto_increment,
    cpf integer not null,
    nome varchar(50) not null,
    cep varchar(10) not null,
    numero integer not null,
    complemento varchar(10)
);

create table telefones(
    id_cliente integer not null,
    telefone varchar(20) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

create table entregador(
    id_entregador integer not null primary key auto_increment,
    nome_entregador varchar(50) not null,
    veiculo varchar(10) not null
);

create table produto(
    id_produto integer not null primary key auto_increment,
    nome_produto varchar(20) not null,
    preco_unitario float(8, 2) not null
);

create table pedido(
    id_cliente integer not null,
    id_pedido integer not null primary key auto_increment,
    id_entregador integer not null,
    data date not null,
    hora_pedido time not null,
    hora_entrega time,
    hora_fim time,
    foreign key (id_cliente) references clientes(id_cliente),
    foreign key (id_entregador) references entregador(id_entregador)
);

create table itens(
    id_pedido integer not null,
    quantidade integer not null,
    id_produto integer not null,
    foreign key (id_pedido) references pedido(id_pedido),
    foreign key (id_produto) references produto(id_produto)
);

describe clientes;
describe telefones;
describe entregador;
describe produto;
describe pedido;
describe itens;
show tables;

LOAD DATA INFILE 'D:/BrunoFavaro/Senai/JavaScript/database/Atividade 08-18-2022/entregas/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/BrunoFavaro/Senai/JavaScript/database/Atividade 08-18-2022/entregas/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/BrunoFavaro/Senai/JavaScript/database/Atividade 08-18-2022/entregas/entregadores.csv'
INTO TABLE entregador
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/BrunoFavaro/Senai/JavaScript/database/Atividade 08-18-2022/entregas/produtos.csv'
INTO TABLE produto
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/BrunoFavaro/Senai/JavaScript/database/Atividade 08-18-2022/entregas/pedidos.csv'
INTO TABLE pedido
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/BrunoFavaro/Senai/JavaScript/database/Atividade 08-18-2022/entregas/itens.csv'
INTO TABLE itens
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from clientes;
select * from telefones;
select * from entregador;
select * from produto;
select * from itens;