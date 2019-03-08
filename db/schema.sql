CREATE DATABASE burgers_db;

USE DATABASE burgers_db;

CREATE TABLE burgers (
    id int auto_increment primary key,
    burger_name varchar(255),
    devoured boolean default false
)