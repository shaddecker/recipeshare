const express = require("express");
const router = express.Router();

const RecipeModel = require("../models").Recipe;

//index route
router.get("/", async (req, res) => {
    const allRecipes = await RecipeModel.findAll()
    res.render("recipes/index.ejs", { recipes: allRecipes,});
});

//new recipe route
router.get("/new", async (req, res) => {
    res.render("recipes/new.ejs");
});

// SHOW ROUTE 
router.get("/:id", async (req, res) => {   
  const recipeFromDB = await RecipeModel.findByPk(req.params.id);
  res.render('recipes/show.ejs', {recipe: recipeFromDB });
});

//post route for new recipe
router.post("/", async (req, res) => {
  const newRecipe = await RecipeModel.create(req.body);
  res.redirect(`recipes/${newRecipe.id}`);
});

router.get("/:id/edit", async (req, res) => {
  const foundRecipe = await RecipeModel.findByPk(req.params.id);
  res.render("recipes/edit.ejs", {
    recipe: foundRecipe
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