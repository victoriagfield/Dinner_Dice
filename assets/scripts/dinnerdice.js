var drinkVodka = document.querySelector("#radioVodka");
var drinkBrandy = document.querySelector("#radioBrandy");
var drinkTequlia = document.querySelector("#radioTequila");
var drinkRum = document.querySelector("#radioRum");
var drinkGin = document.querySelector("#radioGin");

var mealChicken = document.querySelector("#radioChicken");
var mealBeef = document.querySelector("#radioBeef");
var mealSeafood = document.querySelector("#radioSeafood");
var mealVegan = document.querySelector("#radioVegan");
var mealVegetarian = document.querySelector("#radioVegetarian");


var foodBtn = document.querySelector("#btnFood");
var drinkBtn = document.querySelector("#btnDrink");


drinkBtn.addEventListener("click", function(){
    var option = "";
    if(drinkVodka.checked){
        option = "Vodka";
    }
    else if(drinkBrandy.checked){
        option = "Brandy";
    }
    else if(drinkTequlia.checked){
        option = "Tequila";
    }
    else if(drinkRum.checked){
        option = "Rum";
    }
    else if(drinkGin.checked){
        option = "Gin";
    }
    console.log(option)

    var queryURL = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" + option;

// Creating an AJAX call for a list of specified alcohol.
    $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            var drinkID = response[(Math.floor(Math.random() * response.length))].idDrink;
            var drinkName = response.strDrink;
            console.log = drinkID;
        });
})


foodBtn.addEventListener("click", function(){
    var option = "";
    if(mealChicken.checked){
        option = "Chicken";
    }
    else if(mealBeef.checked){
        option = "Beef";
    }
    else if(mealSeafood.checked){
        option = "Seafood";
    }
    else if(mealVegan.checked){
        option = "Vegan";
    }
    else if(mealVegetarian.checked){
        option = "Vegetarian";
    }
    console.log(option);
    
    var queryURL = "https://www.themealdb.com/api/json/v2/9973533/filter.php?c=" + option;

// Creating an AJAX call for a list of random meals with the specified catergory.
    $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            var mealID = response[(Math.floor(Math.random() * response.length))].idMeal;
            var mealName = response.strMeal;
            console.log = mealID;

        });
})