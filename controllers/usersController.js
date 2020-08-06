const express = require("express");
const router = express.Router();
const UserModel = require("../models").User;
const RecipeModel = require("../models").Recipe;

// GET USERS PROFILE
router.get("/profile/:id", async (req, res) => {
  if (req.user.id == req.params.id) {
    const userProfile = await  UserModel.findByPk(req.params.id,{
      include: [ { model: RecipeModel }]
    });  
    console.log(userProfile.Recipes) ;
    res.render("users/profile.ejs", { user: userProfile, cookieId: req.user.id });
  } else {
    // res.json("unauthorized");
    res.redirect("/");
  }
});

//PUT an update route
router.put("/profile/:id", async (req, res) => {
  const userProfile = await UserModel.update(req.body, 
    {where: { id: req.params.id }, returning: true, });
    res.redirect(`/users/profile/${req.params.id}`);   
});

router.delete("/:id", async (req, res) => {
  await UserModel.destroy({where: { id: req.params.id } });
  res.redirect("/");
});

module.exports = router;