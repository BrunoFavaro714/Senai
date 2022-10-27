drop database if exists armazena_arquivos;
create database armazena_arquivos charset = UTF8 collate = utf8_general_ci;
use armazena_arquivos;
create table arquivos(
	 id integer primary key not null auto_increment,
	 tipo varchar(5) not null,
	 arquivo mediumblob
);

insert into arquivos values (null,'.jpg',load_file("https://github.com/wellifabio/senai2022/blob/master/2des/bcd/aula10/blobitens/note.jpg?raw=true"));
insert into arquivos values (null,'.png',load_file("https://github.com/wellifabio/senai2022/blob/master/2des/bcd/aula10/blobitens/tel.png?raw=true"));
insert into arquivos values (null,'.txt',load_file("https://github.com/wellifabio/senai2022/raw/master/2des/bcd/aula10/blobitens/text.txt"));
insert into arquivos values (null,'.docx',load_file("https://github.com/wellifabio/senai2022/blob/master/2des/bcd/aula10/blobitens/texto.docx?raw=true"));

select id, tipo from arquivos;