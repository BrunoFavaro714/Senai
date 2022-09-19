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
    -- vencimento date not null,
    pagamento date,
    -- valor float(10,2) not null,
    val_recebido float(10,2),
    foreign key (id) references emprestimos (id)
);

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/aula06/clientes.csv'
INTO TABLE clientes
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

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/aula06/telefones.csv'
INTO TABLE telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

CREATE PROCEDURE preencher_parcelas()
BEGIN
   LOOP
    DECLARE var integer(99); [default 0];
    IF var < 10 THEN
        var = var + 1;
      insert into parcelas(1, null, null);
    END IF;
    LEAVE label1;
  END LOOP
END;

DELIMITER ;

CALL preencher_parcelas();

select * from parcelas;