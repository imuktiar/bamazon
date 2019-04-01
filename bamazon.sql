create database bamazon;
use bamazon;

create table products(
	item_id int not null auto_increment,
    product_name varchar(100),
    department_name varchar(100),
    price decimal(10, 2) not null,
    stock_quantity int not null,
    primary key(item_id)
);

insert into products(product_name, department_name, price, stock_quantity)
values("GTX 1080ti", "Electronics", 650, 100), 
("Coilovers", "Car Parts", 700, 30), 
("Jordans", "Shoes", 160, 50), 
("Entry Table", "Furniture", 100, 80), 
("Lifx", "Lighting", 35, 150),
("Phillips Hue", "Lighting", 30, 100), 
("Bed", "Furniture", 500, 20), 
("Coffee Maker", "Kitchen", 150, 150), 
("Poster", "Decoration", 7, 300),
("Cat Toy", "Pet Section", 3, 300);

select * from products; 