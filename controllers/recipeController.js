const express = require("express");
const router = express.Router();
const RecipeModel = require("../models").Recipe;
const UserModel = require("../models").User;

function formatDate(theDate){
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const year = theDate.getFullYear();
  const month = months[theDate.getMonth()];
  const day = theDate.getDate();
  const thisDate = `${month}.${day}.${year}`;
  return thisDate
}

//index route
router.get("/", async (req, res) => {
    // console.log(req.user);
    const allRecipes = await RecipeModel.findAll()
    res.render("recipes/index.ejs", { recipes: allRecipes, cookieId: req.user.id,});
});

//new recipe route
router.get("/new", async (req, res) => {
    res.render("recipes/new.ejs", {cookieId: req.user.id,});
});

// SHOW ROUTE 
router.get("/:id", async (req, res) => {   
  const recipeFromDB = await RecipeModel.findByPk(req.params.id, {include: [UserModel],});
  // console.log(recipeFromDB)  
  const recipeOwnerAndDate = `${recipeFromDB.User.firstname} ${recipeFromDB.User.lastname} on ${formatDate(recipeFromDB.createdAt)}`;
  res.render('recipes/show.ejs', {recipe: recipeFromDB, cookieId: req.user.id, submittedBy: recipeOwnerAndDate});
});

//post route for new recipe
router.post("/", async (req, res) => {
  req.body.userId = req.user.id;
  const newRecipe = await RecipeModel.create(req.body);
  res.redirect(`recipes/${newRecipe.id}`);
});

router.get("/:id/edit", async (req, res) => {
    const foundRecipe = await RecipeModel.findByPk(req.params.id);
    res.render("recipes/edit.ejs", {
      recipe: foundRecipe, cookieId: req.user.id,
    });
  
});

//put route
router.put("/:id", async (req, res) => {
    const updatedRecipe = await RecipeModel.update(req.body, {
        where: { id: req.params.id },
        returning: true,});
    res.redirect(`/recipes/${req.params.id}`);
});

router.delete("/:id", async (req, res) => {
  await RecipeModel.destroy({where: { id: req.params.id } });
    res.redirect("/recipes");
});


module.exports = router;