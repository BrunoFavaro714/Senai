drop database if exists tarefas;
create database tarefas charset=UTF8 collate utf8_general_ci;
use tarefas;

create table tarefas(
    id integer not null auto_increment primary key,
    descri varchar(150) not null,
    hora_inicio time not null,
    hora_fim time,
    estado varchar(10)
);

insert into tarefas value(null, 'Fazer Projeto em uma aula', '07:40:00', null, 'Aberta');
insert into tarefas value(null, 'Instalar dependencias mobile', '07:35:00', '08:11:45', 'Finalizada');
insert into tarefas value(null, 'Fazer Projeto em uma aula', '07:40:00', null, 'Cancelada');

select * from tarefas;
select * from tarefas where estado='Aberta';
select * from tarefas where estado='Finalizada';
select * from tarefas where estado='Cancelada';