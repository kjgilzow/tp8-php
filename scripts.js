  //tp6 js and ajax

function loadFileInto(recipeName, listName, whereTo) {

    // creating a new XMLHttpRequest object
    ajax = new XMLHttpRequest();
  
    fromFile = "recipes.php?recipeName" + recipeName + "&listName" + listName;

    // defines the GET/POST method, source, and async value of the AJAX object
    ajax.open("GET", fromFile, true);

    // provides code to do something in response to the AJAX request
    ajax.onreadystatechange = function() {
      if ((this.readyState == 4) && (this.status == 200)) {
        document.querySelector(whereTo).innerHTML = this.responseText;

      } else if ((this.readyState == 4) && (this.status != 200)) {
        console.log("Error: " + this.responseText);
      }

    } // end ajax.onreadystatechange function

    // initiate request and wait for response
    ajax.send();

  }

//tp7 js

function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
    this.recipeName = recipeName;
    this.contributorName = contributorName;
    this.imageURL = imageURL;
    this.ingredients = ingredientsURL;
    this.equipment = equipmentURL;
    this.directions = directionsURL;

    this.displayRecipe = function() {

      document.querySelector("#title").innerHTML = this.recipeName;
      document.querySelector("#contributor").innerHTML = this.contributorName;
      document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL + ")";
      loadFileInto(this.recipe, "ingredients", "#ingredients ul");
      loadFileInto(this.recipe, "equipment", "#equipment ul");
      loadFileInto(this.recipe, "directions", "#directions ol");

    }
  }

  MapleBrownSugarCookies = new Recipe("Maple Brown Sugar Cookies", "Kailin Gilzow", "cookies.jpg", "ingredients.html", "equipment.html", "instructions.html")
  PeachCrisp = new Recipe("Peach Crisp", "Zaire Moon", "https://images.unsplash.com/photo-1639588473831-dd9d014646ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", "peach-crisp-ingredients.html", "peach-crisp-equipment.html", "peach-crisp-directions.html")
  WineMustard = new Recipe("Hal's Wine Mustard", "Ally Steigmann", "https://images.unsplash.com/photo-1578129377420-4795675e892e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80", "wine-mustard-ingredients.html", "wine-mustard-equipment.html", "wine-mustard-directions.html")



  window.onload = function() {

    document.querySelector("#firstRecipe").onclick = function() {
      MapleBrownSugarCookies.displayRecipe();
    }
    
    document.querySelector("#secondRecipe").onclick = function() {
      PeachCrisp.displayRecipe();
    }
    
    document.querySelector("#thirdRecipe").onclick = function() {
      WineMustard.displayRecipe();
    }
    
  }
