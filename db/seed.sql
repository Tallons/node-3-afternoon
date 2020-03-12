CREATE TABLE product (
product_id SERIAL PRIMARY KEY NOT NULL,
name varchar(50) NOT NULL,
description varchar(100) NOT NULL,
price INT NOT NULL,
image_url text NOT NULL
);