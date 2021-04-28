const express = require("express");
const router = express.Router();

const axios = require("axios").default;

const qs = require("querystring");

const APIkey = require("../config");

router.get("/", (req, res) => {
    res.send("api is working");
});

router.get("/autocomplete/:query", (req, res) => {
    var query = req.params.query;

    if (!query) {
        res.status(400).send("Bad Request");
    } 

    var params = {
        apiKey: APIkey, 
        query : query,
        number: 5
    };

    var options = {
        method: 'GET',
        url: 'https://api.spoonacular.com/food/ingredients/autocomplete?' + qs.stringify(params)
    }
    console.log(options);
    axios.request(options).then(data => {
        const results = [];
        data.data.forEach(element => {
            results.push(element.name);
        });
        res.send(results);
    }).catch(err => {
        console.log(err);
    })
})

module.exports = router;

