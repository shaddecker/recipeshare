const express = require("express");
const router = express.Router();

const User = require('../models').User;
const Recipes = require('../models').RecipeHeaders;


//user profile path
router.get("/profile/:id", async (req, res) => {
  // IF USER ID FROM TOKEN MATCHES THE REQUESTED ENDPOINT, LET THEM IN
  console.log("here");
  if (req.user.id == req.params.id) {
    const userProfile  = await User.findByPk(req.params.id, {
      include: [
        {
          model: Receipes,
          attributes: ["id", "lastname","firstname"],
        },
      ],
    });
    console.log("here");
      res.render("users/profile.ejs", { user: userProfile,});
  }else{
    res.redirect("/");
  }
});

//PUT an update route
router.put("/profile/:id", async (req, res) => {
  const updatedUser = await User.update(req.body, 
    {where: {id: req.params.id }, returning: true, });
    // console.log()
    res.redirect(`/users/profile/${req.params.Id}`); 
});

router.delete("/:id", async (req, res) => {
  await User.destroy({where: { id: req.params.id } });
  res.redirect("/");
});

module.exports = router;