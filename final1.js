
xhr= new XMLHttpRequest();
xhr.open("GET","https://www.themealdb.com/api/json/v1/1/search.php?s");
xhr.send();
var data;
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    data=JSON.parse(this.responseText);
	for(i=0;i<data.meals.length;i++){
		var color;
		if(i%2 == 0){
			color = 'bg-info';
		}
		else{
			color = 'bg-warning';
		}
	    var tr=document.createElement("tr");
	    tr.classList.add(color,"text-dark");

	    var img=document.createElement("td");
	    var img2 = document.createElement("img");
	    img2.src=data.meals[i].strMealThumb;
	    img2.style.height="300px";
	    img.appendChild(img2);
	    tr.appendChild(img);

	    var id=document.createElement("td");
	    id.innerHTML=data.meals[i].idMeal;
	    tr.appendChild(id);

	    var name=document.createElement("td");
	    name.innerHTML=data.meals[i].strMeal;
	    tr.appendChild(name);

	    var category=document.createElement("td");
	    category.innerHTML=data.meals[i].strCategory;
	     tr.appendChild(category);

	    var tag=document.createElement("td");
	    tag.innerHTML=data.meals[i].strTags;
	     tr.appendChild(tag);

	    var recipe=document.createElement("td");
	    recipe.innerHTML=data.meals[i].strInstructions;
	    recipe.style.width="100px";
	    tr.appendChild(recipe);

        var x=document.getElementById("main");
        x.appendChild(tr);

        document.getElementById("loading").style.display="none";
        x.style.display="table"; 
        console.log(data);  
       }
	}
};
