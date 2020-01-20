var mysql = require("mysql");
var express = require("express");
var exphbs = require("express-handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "password",
  database: "burger_db"
});