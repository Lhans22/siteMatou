//l'id doit etre égal a l'id du main et il ne doit pas avoir deux fois le même id
//ne pas toucher l'id du premier
const nav =[
		{name:"test",id:"first"},
		{name:"page1",id:""},
		{name:"page2",id:""},
	];


/*----------------------------------NE PAS TOUCHER EN DESSOU DE CETTE LIGNE------------------------------------------*/

navHtml="";

nav.forEach(function (item) {
	navHtml=navHtml+"<a class='item' href='#"+item.id+"'>"+item.name+"</a>";
});

$(document).ready(function(){
    $(".navigationMenu").html(navHtml);
});