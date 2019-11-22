xhr= new XMLHttpRequest();
xhr.open("GET","https://www.thecocktaildb.com/api/json/v1/1/search.php?s");
xhr.send();
var data;
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    data=JSON.parse(this.response);
    
    document.getElementById("drink11").innerHTML=data.drinks[11].idDrink;
 	document.getElementById("drink12").innerHTML=data.drinks[11].strDrink;
 	document.getElementById("drink13").src=data.drinks[11].strDrinkThumb;
	document.getElementById("drink14").innerHTML=data.drinks[11].strCategory;
	document.getElementById("drink15").innerHTML=data.drinks[11].strAlcoholic;
	document.getElementById("drink16").innerHTML=data.drinks[11].strInstructions;

	document.getElementById("drink21").innerHTML=data.drinks[12].idDrink;
 	document.getElementById("drink22").innerHTML=data.drinks[12].strDrink;
 	document.getElementById("drink23").src=data.drinks[12].strDrinkThumb;
	document.getElementById("drink24").innerHTML=data.drinks[12].strCategory;
	document.getElementById("drink25").innerHTML=data.drinks[12].strAlcoholic;
	document.getElementById("drink26").innerHTML=data.drinks[12].strInstructions;

	document.getElementById("drink31").innerHTML=data.drinks[13].idDrink;
 	document.getElementById("drink32").innerHTML=data.drinks[13].strDrink;
 	document.getElementById("drink33").src=data.drinks[13].strDrinkThumb;
	document.getElementById("drink34").innerHTML=data.drinks[13].strCategory;
	document.getElementById("drink35").innerHTML=data.drinks[13].strAlcoholic;
	document.getElementById("drink36").innerHTML=data.drinks[13].strInstructions;

	document.getElementById("drink41").innerHTML=data.drinks[14].idDrink;
 	document.getElementById("drink42").innerHTML=data.drinks[14].strDrink;
 	document.getElementById("drink43").src=data.drinks[14].strDrinkThumb;
	document.getElementById("drink44").innerHTML=data.drinks[14].strCategory;
	document.getElementById("drink45").innerHTML=data.drinks[14].strAlcoholic;
	document.getElementById("drink46").innerHTML=data.drinks[14].strInstructions;

	document.getElementById("drink51").innerHTML=data.drinks[15].idDrink;
 	document.getElementById("drink52").innerHTML=data.drinks[15].strDrink;
 	document.getElementById("drink53").src=data.drinks[15].strDrinkThumb;
	document.getElementById("drink54").innerHTML=data.drinks[15].strCategory;
	document.getElementById("drink55").innerHTML=data.drinks[15].strAlcoholic;
	document.getElementById("drink56").innerHTML=data.drinks[15].strInstructions;

	document.getElementById("drink61").innerHTML=data.drinks[16].idDrink;
 	document.getElementById("drink62").innerHTML=data.drinks[16].strDrink;
 	document.getElementById("drink63").src=data.drinks[16].strDrinkThumb;
	document.getElementById("drink64").innerHTML=data.drinks[16].strCategory;
	document.getElementById("drink65").innerHTML=data.drinks[16].strAlcoholic;
	document.getElementById("drink66").innerHTML=data.drinks[16].strInstructions;

	document.getElementById("drink71").innerHTML=data.drinks[8].idDrink;
 	document.getElementById("drink72").innerHTML=data.drinks[8].strDrink;
 	document.getElementById("drink73").src=data.drinks[8].strDrinkThumb;
	document.getElementById("drink74").innerHTML=data.drinks[8].strCategory;
	document.getElementById("drink75").innerHTML=data.drinks[8].strAlcoholic;
	document.getElementById("drink76").innerHTML=data.drinks[8].strInstructions;

	document.getElementById("drink81").innerHTML=data.drinks[22].idDrink;
 	document.getElementById("drink82").innerHTML=data.drinks[22].strDrink;
 	document.getElementById("drink83").src=data.drinks[22].strDrinkThumb;
	document.getElementById("drink84").innerHTML=data.drinks[22].strCategory;
	document.getElementById("drink85").innerHTML=data.drinks[22].strAlcoholic;
	document.getElementById("drink86").innerHTML=data.drinks[22].strInstructions;

	document.getElementById("drink91").innerHTML=data.drinks[19].idDrink;
 	document.getElementById("drink92").innerHTML=data.drinks[19].strDrink;
 	document.getElementById("drink93").src=data.drinks[19].strDrinkThumb;
	document.getElementById("drink94").innerHTML=data.drinks[19].strCategory;
	document.getElementById("drink95").innerHTML=data.drinks[19].strAlcoholic;
	document.getElementById("drink96").innerHTML=data.drinks[19].strInstructions;

  }
};
  