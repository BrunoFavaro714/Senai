drop procedure if exists insere_itens;
delimiter //
create procedure insere_itens()
    begin
        declare erro_sql tinyint default false;
	    declare continue handler for sqlexception set erro_sql = true;
        start transaction;

            insert into Pedidos(pedido_id, cliente_id, data, hora) value(50, 1, curdate(), '18:43:28');
            insert into Itens_Pedido value(50, 1, 3, (select valor from Pizzas where pizza_id = 1));
            insert into Itens_Pedido value(50, 20, 2, (select valor from Pizzas where pizza_id = 20));
            insert into Itens_Pedido value(50, 3, 1, (select valor from Pizzas where pizza_id = 3));

            update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 50) where pedido_id = 50;
            
            select * from Itens_Pedido;
            select * from Pedidos;
            if erro_sql = false then
                commit;
                select 'Pedido efetuado com sucesso' as Resultado;
            else
                rollback;
                select 'Falha au efetivar pedido'as Resultado;
            end if;
end//
delimiter ;0