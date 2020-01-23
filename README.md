# Burger
# Restaurant Application - Node Express Handlebars


## Introduction
I have created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

## Technology Used
* [MySQL](https://www.npmjs.com/package/mysql)
* [InquirerJs](https://www.npmjs.com/package/inquirer/v/0.2.3)
* [Nodejs](https://nodejs.org/en/)
* [Express-Handlebars]
* [Express]
* [JQuery]
* [Heroku]


## Application

![alt text](https://github.com/orenamema/burger/raw/master/public/assets/img/burger.gif)

## Code
````
$(function () {

    $(".change-devour").on("click", function (event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: newDevoured
      };

      // Send PUT request

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function () {
          console.log("changed devoured status to", newDevoured);
          location.reload(); // Reload the page to get the updated list
        }
      );
    });
````

## Learning Points
Handlebars

## Author

**Oren Amema**

* [Github](https://github.com/orenamema)
* [LinkedIn](https://www.linkedin.com/in/oren-amematekpo-b7a12b13)
* [Portfolio](https://orenamema.github.io/UpdatedPortfolio/)
