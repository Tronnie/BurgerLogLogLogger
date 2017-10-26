DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR (100) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  timing TIMESTAMP,
  PRIMARY KEY (id)
);

-- Start MySQL command line tool and login: `mysql -u root -p`
  -- With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it
  -- in other words, you'll be creating your database.
