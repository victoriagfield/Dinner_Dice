var drinkOpt1 = document.querySelector(".Vodka");
var drinkOpt2 = document.querySelector(".Whiskey");
var drinkOpt3= document.querySelector(".Tequila");
var drinkOpt4 = document.querySelector(".Rum");
var drinkOpt5 = document.querySelector(".Gin");

var mealOpt1 = document.querySelector(".Chicken");
var mealOpt2 = document.querySelector(".Beef");
var mealOpt3= document.querySelector(".Seafood");
var mealOpt4 = document.querySelector(".Vegan");
var mealOpt5 = document.querySelector(".Vegetarian");

var option = $(this).attr("data-name");
var queryURL = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" + option;

// Creating an AJAX call for the specific movie button being clicked
    $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            var drinkID = response.idDrink;
            var drinkName = response.strDrink;

        });