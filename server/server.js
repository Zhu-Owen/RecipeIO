const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 8888;

var recipeRouter = require("./routes/recipe.js");
var ingRouter = require("./routes/ingredients.js");
app.use(cors());
app.use("/recipe", recipeRouter);
app.use("/ingredients", ingRouter);


app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => console.log("App is listening on port :" + PORT));

module.exports = app;
