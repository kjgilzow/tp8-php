  //tp6 js and ajax

function loadFileInto(recipeName, recipeList, whereTo) {

    // creating a new XMLHttpRequest object
    ajax = new XMLHttpRequest();
  
    fromFile = "recipes.php?recipeName=" + recipeName + "&recipeList=" + recipeList;
  
    console.log("FromURL: " + fromFile);

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

function Recipe(recipeName, contributorName, imageURL) {
    this.recipe = recipeName;
    this.contributorName = contributorName;
    this.imageURL = imageURL;

    this.displayRecipe = function() {

      document.querySelector("#title").innerHTML = this.recipe;
      document.querySelector("#contributor").innerHTML = this.contributorName;
      document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL + ")";
      loadFileInto(this.recipe, "ingredients", "#ingredients ul");
      loadFileInto(this.recipe, "equipment", "#equipment ul");
      loadFileInto(this.recipe, "directions", "#directions ol");

    }
  }

  MapleBrownSugarCookies = new Recipe("Maple Brown Sugar Cookies", "Kailin Gilzow", "cookies.jpg")
  PeachCrisp = new Recipe("Peach Crisp", "Zaire Moon", "https://images.unsplash.com/photo-1639588473831-dd9d014646ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")
  WineMustard = new Recipe("Hal's Wine Mustard", "Ally Steigmann", "https://images.unsplash.com/photo-1578129377420-4795675e892e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80")



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
