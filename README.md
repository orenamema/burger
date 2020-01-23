# Burger
# Restaurant Application - Node Express Handlebars


## Introduction

I have created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. The user can use this application to keep track of its favorite burgers and of the type and number of burgers it has eaten over time. This application can also be used by a restaurant to keep track of their burger orders and determine what are their most popular items, this way they can adapt to the demand and increase their sales.

## Technology Used

* [MySQL](https://www.npmjs.com/package/mysql)
* [InquirerJs](https://www.npmjs.com/package/inquirer/v/0.2.3)
* [Nodejs](https://nodejs.org/en/)
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
* [Express](https://www.npmjs.com/package/express)
* [JQuery](https://www.npmjs.com/package/jquery)
* [Heroku](https://www.heroku.com)
* [Javascript](https://www.w3schools.com/js)


## Application

![alt text](https://github.com/orenamema/burger/raw/master/public/assets/img/burger.gif)

In order to access this application the user can follow the next steps:
* Navigate to burger in the Terminal
* Then navigate to the application with the command `node server.js`
* Make sure it is listening to localhost:8080
* Open http://localhost:8080/ in your browser
* Use the app by typing your burger of choice 
* Then click on devour it to move it to the other side or TRASH to delete the burger

Here is the link to the deployed application [Burger](https://arcane-inlet-20074.herokuapp.com/)
The application has been deployed on Heroku.



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
The code above is the part of the code that let's us change the state of the burger to devoured. It also sends the `PUT` request then reload the page with the updated data, in this case the list of burgers.

## Learning Points

While building this application I've used `Express Handlebars` which has been very useful as it allowed me to keep the view and code seperated.

## Author

**Oren Amema**

* [Github](https://github.com/orenamema)
* [LinkedIn](https://www.linkedin.com/in/oren-amematekpo-b7a12b13)
* [Portfolio](https://orenamema.github.io/UpdatedPortfolio/)
