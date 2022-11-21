DROP DATABASE IF EXISTS estacionamento;
CREATE DATABASE estacionamento charset=UTF8 collate utf8_general_ci;
USE estacionamento;

CREATE TABLE clientes(
    cpf varchar(14) primary key not null,
    nome varchar(100) not null,
    telefone varchar(20) not null
);

CREATE TABLE veiculos(
    placa varchar(7) primary key not null,
    tipo varchar(5) not null,
    modelo varchar(25) not null,
    cor varchar(50) not null,
    cpf varchar(14) not null,
    foreign key(cpf) references clientes(cpf)
);

CREATE TABLE vagas(
    id_vaga integer not null primary key auto_increment,
    status boolean,
    tipo varchar(10) not null,
    valor_hora float(6,2) not null
);

CREATE TABLE controle (
    cpf varchar(14) not null,
    entrada datetime not null,
    saida datetime,
    placa varchar(7) not null,
    id_vaga integer not null,
    valor_total float(6,2)
);

insert into clientes value('989.724.070-54', 'Carlos Andrade Machado Silva', '(68)3216-6247');
insert into veiculos value('CKN2236', 'Carro', 'Fiat Uno', 'Preto', '989.724.070-54');
insert into vagas value(default, 1, 'Idoso', 5.00);
insert into controle value('989.724.070-54','2022-04-23 13:34:26','2022-04-23 15:42:31', 'CKN2236', 1, null);

create view vw_completa as
SELECT c.cpf, c.nome, c.telefone, v.placa, v.tipo, v.modelo, v.cor, ct.entrada, ct.saida, ct.id_vaga, vg.valor_hora From clientes c
inner join veiculos v
on c.cpf = v.cpf
join controle ct
on v.placa  = ct.placa
inner join vagas vg
on ct.id_vaga = vg.id_vaga;

select * from clientes;
select * from veiculos;
select * from vagas;    
select * from controle;

drop procedure if exists check_in;
delimiter //
create procedure check_in(cpf varchar(14), nome varchar(100), telefone varchar(20), placa varchar(7), tipo varchar(5), modelo varchar(25), cor varchar(50), idVaga int)
BEGIN

    insert into clientes value(cpf, nome, telefone);
    insert into veiculos value(placa, tipo, modelo, cor, cpf);
    insert into controle value(cpf, curdate(), null, placa, idVaga, null);
    update vagas set status=1 where id_vaga=idVaga;

END //
delimiter ;

drop procedure if exists check_out;
delimiter //
create procedure check_out(cli_cpf varchar(14), idVaga int, vTotal float)
BEGIN

    update controle set saida=curdate() where cpf=cli_cpf order by entrada desc limit 1;
    update controle set valor_total=vTotal where cpf=cli_cpf order by entrada desc limit 1;
    update vagas set status=0 where id_vaga=idVaga;
    delete from veiculos where cpf=cli_cpf;
    delete from clientes where cpf=cli_cpf;
    
END //
delimiter ;