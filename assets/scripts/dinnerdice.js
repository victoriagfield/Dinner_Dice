var drinkOpt1 = document.querySelector(".radioVodka");
var drinkOpt2 = document.querySelector(".radioWhiskey");
var drinkOpt3 = document.querySelector(".radioTequila");
var drinkOpt4 = document.querySelector(".radioRum");
var drinkOpt5 = document.querySelector(".radioGin");

var mealOpt1 = document.querySelector(".radioChicken");
var mealOpt2 = document.querySelector(".radioBeef");
var mealOpt3 = document.querySelector(".radioSeafood");
var mealOpt4 = document.querySelector(".radioVegan");
var mealOpt5 = document.querySelector(".radioVegetarian");


var foodBtn = document.querySelector(".btnFood");
var drinkBtn = document.querySelector(".btnDrink");


foodBtn.addEventListener("click", function(){
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
})


drinkBtn.addEventListener("click", function(){
    var option = $(this).attr("data-name");
    var queryURL = "https://www.themealdb.com/api/json/v2/9973533/filter.php?c=" + option;

// Creating an AJAX call for the specific movie button being clicked
    $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            var mealID = response.idMeal;
            var mealName = response.strMeal;
        });
})