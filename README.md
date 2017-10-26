# Burger Logger
A food logging app that allows users to input the type of burger they'd like to eat and keep track of the burgers they have 'devoured'.  Use MySQL, Node, Express, Handlebars, ORM (yup, a total nightmare!)

## Methology
* package.json
* server.js
  * Dependencies
  * Basic server connection
  * MySQL connection
* database
  * schema
  * seed file
* configuration
  * connection.js
  * orm.js
* models
* controllers
* views
  * index.HTML
  * layouts --> main.handlebars
  * partials
* public
  * assets --> css, imgs, js

### Back-end Directory structure
```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
### Screenshot Front-end WIP
![BurgerLogLogLog](./public/assets/css/img/BurgerLogLogLog.pdf)


**Thank you for your Attetnion!**

Gail Izaguirre (C) 2017.  All Rights Reserved.
