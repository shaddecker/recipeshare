# Project #2 - Recipe Share

My first Full Stack Application!

## Recipe Share

This is my attempt to create a shareable recipe list.  Users must sign up in order to share and view any recipes.  Users can only edit and delete recipes that belong to them, but they can view all recipes from the index page.  Clicking a recipe title takes the user to a formatted recipe show page.  From there they can edit or delete if the recipe belongs to them.
This application adheres to the models, views, and controllers file structure.  There are 2 models, both of which have 7 RESTful routes and full CRUD.

### [The application can be found here](http://localhost:3000/)

## Technologies Used

Technologies included in this application:
 - Javascript 
 - Express 
 - HTML 
 - CSS 
 - Json Web Tokens (JWT) 
 - Node.js 
 - DotENV   
 - bcryptjs
 - Postgres

## Approach Taken

I wanted this to be as simple as possible for a couple reasons.  1. I am not creative when it comes to designing beautiful web sites.  I just don't have it.  2.  I wanted to make sure the back end was solid and that I fully understood the 7 RESTful routes and how they drove the application.

## User Stories

User Stories List:

 1. As a user I want to sign up so that I can view recipes on the site.
 2. As a user I want to sign up so that I can share recipes that I have and enjoy
 3. As a user I want to have quick access to my recipes from anywhere.
 4. As a user I want to be able to edit a recipe if I noticed any mistakes or have changed the recipe.
 5. As a user I want to be able to delete a recipe that I no longer want to share.
 6. As a user I want to be able to sign in and have easy navigation between the various screens.
 7. As a user I would like to be able to search for recipes with certain keywords in the title.
 8. As a user I would expect to be able to easily read what is written on every page of the site.
 9. As a user I would like to be able to easily find the recipes I have submitted.
 10. As a user I would expect the site to be secure.


## Bugs and unfinished stuff

From the beginning i wanted the categories to be dynamically populated from a db table.  Eventually this would be full CRUD as well as standard measurements and ingredients.
I would like to add extended searching ability.  To be able to search on ingredients, users, titles, and categories.

```
