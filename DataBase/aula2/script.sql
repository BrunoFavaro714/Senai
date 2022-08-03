drop database if exists pedidos;
create database pedidos charset=utf8 collate utf8_general_ci;
use pedidos;

create table clientes(
    id_cliente integer not null primary key auto_increment,
    pri_nome varchar(20) not null,
    sobrenome varchar(20) not null,
    endereco varchar(100) not null
);
create table telefones(
    id_cliente integer not null,
    telefones varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);
create table pedidos(
    num_pedido integer not null primary key auto_increment,
    id_cliente integer not null,
    data timestamp not null,
    valor decimal(8,2) not null,
    descricao varchar(100) not null,
    quantidade integer(4) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);


discribe clientes;
describe telefones;
describe pedidos;
show tables;

insert into clientes values 
(null, "Jorge", "Silva", "Rua Coisa Bueno - jaguariuna - SP"),
(null, "Vanessa", "Silva", "Rua Amancio Bueno - jaguariuna - SP"),
(null, "Marcelo", "Souza", "Rua Dois - Pedreira - SP"),
(null, "Juliana", "Tavares", "Rua Bueno Bueno - jaguariuna - SP");

select * from clientes