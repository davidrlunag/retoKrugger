/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  Gameth
 * Created: 12 sep. 2021
 */

CREATE TABLE usuarios
(
 nombre varchar(100) NOT NULL,
 id serial PRIMARY KEY,
 email varchar(100)  NOT NULL,
 apellidos varchar(100)  NOT NULL,
 cedula number(10) NOT NULL
);  