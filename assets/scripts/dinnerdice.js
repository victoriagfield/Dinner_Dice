$(document).ready(function () {
var drinkVodka = document.querySelector("#radioVodka");
var drinkBrandy = document.querySelector("#radioBrandy");
var drinkTequlia = document.querySelector("#radioTequila");
var drinkRum = document.querySelector("#radioRum");
var drinkGin = document.querySelector("#radioGin");

var mealChicken = document.querySelector("#radioChicken");
var mealBeef = document.querySelector("#radioBeef");
var mealPork = document.querySelector("#radioPork");
var mealVegan = document.querySelector("#radioVegan");
var mealVegetarian = document.querySelector("#radioVegetarian");



var foodBtn = document.querySelector("#btnFood");
var drinkBtn = document.querySelector("#btnDrink");

var drinkResults = document.querySelector("#drinkResults");

var option = "";
drinkBtn.addEventListener("click", function () {

    if (drinkVodka.checked) {
        option = "Vodka";
    }
    else if (drinkBrandy.checked) {
        option = "Brandy";
    }
    else if (drinkTequlia.checked) {
        option = "Tequila";
    }
    else if (drinkRum.checked) {
        option = "Rum";
    }
    else if (drinkGin.checked) {
        option = "Gin";
    }
    console.log(option);
    

    var queryURL = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" + option;
    console.log(queryURL);
    // Creating an AJAX call for a list of specified alcohol.
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var randomIndex = Math.floor(Math.random() * response.drinks.length)
        var drinkName = response.drinks[randomIndex].strDrink;
        console.log(drinkName);
        $.ajax({
            url: "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=" + drinkName,
            method: "GET"
            //url: "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=" + "Kool-Aid%20Shot"//
        }).then(function (data) {//response.drinks.strDrinkThumb,
            $("#drinkResults").html("<figure> <img src = " + data.drinks[0].strDrinkThumb + "/preview" + ">" + "<figcaption>" + drinkName + "</figcaption> </figure>");
            var btnView = $('<button>').addClass('btn btn-sm btn-primary');
            btnView.text("Click to see the recipe");
            btnView.attr('data-toggle', 'modal');
            btnView.attr('data-target', '#recipeModal');
            $("#drinkResults").append(btnView);
            btnView.on("click", function () {
            $('#recipeModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget);
                $("#modalText").text(data.drinks[0].strInstructions);
                $("#ingredientsText").text(" ");
                for(var i = 1; i <= 15; i++){

                    var drinkM = data.drinks[0][`strMeasure${i}`]
                    var drinkI = data.drinks[0][`strIngredient${i}`]
                    console.log();
                    if(data.drinks[0][`strIngredient${i}`] == null || data.drinks[0][`strIngredients${i}`] == ''){
                        break;
                     
                    }
                    //Our Problem
                    if((drinkM == null || drinkM == "") && drinkI.length > 0){
                        drinkM = "Dealers choice of";
                    }
                    if((drinkM == null) && drinkI.length == 0){
                        drinkM = "";
                    }
                    $("#ingredientsText").append(drinkM + ' ' + drinkI);
                    $("#ingredientsText").append("<br>");

                    
                }
            });
            $("#copy-btn").click(function() {
                var concat = $("#modalText").text() + " " + $("#ingredientsText").text();
                var textarea = $("<textarea>");
                textarea.val(concat);
                $(".modal-body").append(textarea);
                textarea.select();
                document.execCommand("copy");
                textarea.remove();
            });
        
    });
    $(".card2-w-75").removeClass("d-none");

});
});
})

foodBtn.addEventListener("click", function () {
    var option = "";
    if (mealChicken.checked) {
        option = "Chicken";
    }
    else if (mealBeef.checked) {
        option = "Beef";
    }
    else if (mealPork.checked) {
        option = "Pork";
    }
    else if (mealVegan.checked) {
        option = "Vegan";
    }
    else if (mealVegetarian.checked) {
        option = "Vegetarian";
    }
    console.log(option);

    var queryURL = "https://www.themealdb.com/api/json/v2/9973533/filter.php?c=" + option;
    console.log(queryURL);
    // Creating an AJAX call for a list of random meals with the specified catergory.
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var randomIndex = Math.floor(Math.random() * response.meals.length)
        var mealName = response.meals[randomIndex].strMeal;
        console.log(mealName);
        $.ajax({
            url: "https://www.themealdb.com/api/json/v2/9973533/search.php?s=" + mealName,
            method: "GET"
        }).then(function (response) {
            $("#recipeResults").html("<figure> <img src = " + response.meals[0].strMealThumb + "/preview" + ">" + "<figcaption>" + mealName + "</figcaption> </figure>");
            //console.log(this);
            var btnView = $('<button>').addClass('btn btn-sm btn-primary');
            btnView.text("Click to see the recipe");
            btnView.attr('data-toggle', 'modal');
            btnView.attr('data-target', '#recipeModal');
            $("#recipeResults").append(btnView);
            btnView.on("click", function () {
            $('#recipeModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget);
                $("#modalText").text(response.meals[0].strInstructions);
                $("#ingredientsText").text(" ");
                for(var i = 1; i<= 15; i++){

                    var mealM = response.meals[0][`strMeasure${i}`]
                    var mealI = response.meals[0][`strIngredient${i}`]
                    console.log();
                    if(response.meals[0][`strIngredient${i}`] == null || response.meals[0][`strIngredients${i}`] == ''){
                        break;
                     
                    }
                    //Our Problem
                    if((mealM == null || mealM == "") && mealI.length > 0){
                        mealM = "Dealers choice of";
                    }
                    if((mealM == null) && mealI.length == 0){
                        mealM = "";
                    }
                    $("#ingredientsText").append(mealM + ' ' + mealI);
                    $("#ingredientsText").append("<br>");
                }
                
            });
            $("#copy-btn").click(function() {
                var concat = $("#modalText").text() + " " + $("#ingredientsText").text();
                var textarea = $("<textarea>");
                textarea.val(concat);
                $(".modal-body").append(textarea);
                textarea.select();
                document.execCommand("copy");
                textarea.remove();
            });

        });
    
    });
    $(".card-w-75").removeClass("d-none");
})})
});