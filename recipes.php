<?

$name = $_GET["recipeName"];
$list = $_GET["recipeList"];

if ($name == "Maple Brown Sugar Cookies") {
  if ($list == "ingredients") {
    include "ingredients.html";
    
  } elseif ($list == "equipment") {
    include "equipment.html";
    
  } elseif ($list == "directions") {
    include "instructions.html";
    
  } else {
    echo "1";
    
  }
  
} elseif ($name == "Peach Crisp") {
  if ($list == "ingredients") {
    include "peach-crisp-ingredients.html";
    
  } elseif ($list == "equipment") {
    include "peach-crisp-equipment.html";
    
  } elseif ($list == "directions") {
    include "peach-crisp-directions.html";
    
  } else {
    echo "1";
    
  }
  
} elseif ($name == "Hal's Wine Mustard") {
  if ($list == "ingredients") {
    include "wine-mustard-ingredients.html";
    
  } elseif ($list == "equipment") {
    include "wine-mustard-equipment.html";
    
  } elseif ($list == "directions") {
    include "wine-mustard-directions.html";
    
  } else {
    echo "1";
    
  }
  
}