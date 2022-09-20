DROP DATABASE IF EXISTS emprestimo;
CREATE DATABASE emprestimo charset=UTF8 collate utf8_general_ci;
USE emprestimo;

CREATE TABLE clientes (
    cpf varchar(14) not null primary key,
    pri_nome varchar(20) not null,
    sobrenome varchar(20) not null,
    cep varchar(10) not null,
    complement varchar(10) not null
);

CREATE TABLE telefones (
    cpf varchar(14) not null,
    tipo varchar(10) not null,
    numeto varchar(15) not null,
    foreign key (cpf) references clientes (cpf)
);

CREATE TABLE emprestimos (
    id integer not null primary key auto_increment,
    cpf varchar(14) not null,
    data date not null,
    capital float(10,2) not null,
    n_parcelas integer not null,
    taxa_juros float(5,2) not null,
    imposto integer,
    foreign key (cpf) references clientes (cpf)
);

CREATE TABLE parcelas (
    id integer not null,
    vencimento date not null,
    pagamento date,
    valor float(10,2) not null,
    val_recebido float(10,2),
    foreign key (id) references emprestimos (id)
);

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/aula06/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/aula06/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/aula06/emprestimos.csv'
INTO TABLE emprestimos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

DELIMITER #
CREATE TRIGGER parcelar AFTER INSERT ON emprestimos FOR EACH ROW
begin
    INSERT INTO parcelas VALUE (2, '2022-09-28', '2022-12-12', 430, 10)
end#

DELIMITER ;

select * from parcelas;