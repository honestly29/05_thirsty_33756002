// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {shopName: "The Thirsty Student",
                productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
                shopLocations: {
                    "London": ["Tom", "55 Street"],
                    "Paris": ["Alice", "64 Street"],
                    "New York": ["Ben", "70 Street"],
                }
};

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData);
}); 

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
});


// Handle search
router.get("/search", (req, res) => {
    res.render("search.ejs");
});

router.get('/search_result', function (req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
 });


// Handle registration
router.get("/register", (req,res) => {
    res.render("register.ejs"); 
}); 
 
router.post("/registered", (req,res) => { 
  res.send(' Hello '+ req.body.first + ' '+ req.body.last + ' you are now registered! We will send an email to you at ' + req.body.email);    
});


// Handle the survey 
router.get("/survey", (req,res) => {
    res.render("survey.ejs", shopData);
});

router.post("/surveyed", (req,res) => {
    res.render("surveyed.ejs", req.body);
});


// Export the router object so index.js can access it
module.exports = router;