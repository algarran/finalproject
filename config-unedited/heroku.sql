

create table User (
id int auto_increment not null,
  email varchar(255) null unique,
 password varchar(255) null,
 primary key(id)

);

create table Client (
id int auto_increment not null,
firstName char(255) not null,
lastName char(255)  not null,
phone varchar(255) not null,
email varchar(255) null unique,
primary key(id)
);

create table Address (
street varchar(255) not null,
city varchar(255) not null,
state varchar(255) not null,
county varchar(255) not null
);

create table Job (

submitDate varchar(255) null,
serviceDate varchar(255) null,
roofGrade varchar(255) null,
notes varchar(255) null
);

ALTER TABLE User
  ADD createdAt timestamp not null
    AFTER password;
    
    ALTER TABLE Client
  ADD createdAt timestamp not null
    AFTER email;
    
    ALTER TABLE Address
  ADD createdAt timestamp not null
    AFTER county;
    
    ALTER TABLE Job
  ADD createdAt timestamp not null
    AFTER notes;
    
