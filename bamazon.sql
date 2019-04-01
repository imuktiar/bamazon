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
values 
("Diffuser", "Car Parts", 700, 30), 
("Adidas", "Shoes", 160, 50), 
("Persol", "Frames", 100, 80), 
("Sharpie", "Office", 35, 150),
("Screw driver", "Home", 30, 100), 
("Sofa", "Furniture", 500, 20), 

select * from products; 
