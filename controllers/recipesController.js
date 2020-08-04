const express = require("express");
const router = express.Router();

const RecipeHeader = require("../models").RecipeHeader;
const RecipeCategories = require("../models").RecipeCategories;

//index route
router.get("/", async (req, res) => {
    const allRecipes = await RecipeHeader.findAll()
    res.render("recipes/index.ejs", { recipes: allRecipes,});
});

//new recipe route
router.get("/new", async (req, res) => {
    const categories = await RecipeCategories.findAll();
    res.render("recipes/new.ejs",{ categories: categories });
});

// // SHOW ROUTE - GET ONE FRUIT
// router.get("/:id", (req, res) => {
//   Fruit.findByPk(req.params.id, {
//       // include : [User]  <= this method returns all columns
//       include : [
//       {
//         model: User,
//         attributes: ['name'],
//       },
//       {
//         model: Season,
//       },
//       ],
//     attributes: ['name', 'color', 'readyToEat']
//   })
//   .then(fruitFromDB => {
//       res.render('fruits/show.ejs', {
//           fruit: fruitFromDB
//       });
//   })
// })

// //post route
// router.post("/", async (req, res) => {
//   if (req.body.readyToEat === "on") {
//     req.body.readyToEat = true;
//   } else {
//     req.body.readyToEat = false; 
//   }
//   const newFruit = await Fruit.create(req.body);
//   res.redirect("/fruits");
// });

// router.get("/:id/edit", async (req, res) => {
//   const foundFruit = await Fruit.findByPk(req.params.id);
//   const allSeasons = await Season.findAll();
//   res.render("fruits/edit.ejs", {
//     fruit: foundFruit, 
//     seasons: allSeasons,
//   });
// });

// //put route
// router.put("/:id", (req, res) => {
//   if (req.body.readyToEat === "on") {
//     req.body.readyToEat = true;
//   } else {
//     req.body.readyToEat = false;
//   }
//   Fruit.update(req.body, {
//     where: { id: req.params.id },
//     returning: true,
//   }).then((updatedFruit) => {
//     Season.findByPk(req.body.season).then((foundSeason) => {
//       Fruit.findByPk(req.params.id).then((foundFruit) => {
//         foundFruit.addSeason(foundSeason);
//         res.redirect("/fruits");
//       });
//     });  
//   });
// });


// router.delete("/:id", async (req, res) => {
//   await Fruit.destroy({where: { id: req.params.id } });
//     res.redirect("/fruits");
// });


module.exports = router;