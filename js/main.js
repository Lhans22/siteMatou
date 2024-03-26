//il ne doit pas avoir plusieurs fois le même id
//l'image est optionelle
const element =[
		{
			id : "first",
			navTitre:"premier page",
			titre:"Ceci est un titre",
			description:"je suis une para graphe hhhhhhhhhhhhhsdfhjfghn,kfjhdfsnbbfkgbkfjvbkbkjbkxdfbjkfcbjkv bjkbjkbjkbjkxbjfbjkbjkxxfbjkvbjkvfbj kvbjjkbvfkfbjbjvkxbjkvbvbjkbjkfvbjkvbjkxbjkbjkxbjkvbjkbjk bjvfbjkxbjkbjkxbbjkbjkxfxbjkbjkvbjkvfbjkxb jkxvbbjkbjbjfxbjvfvfxbjkbjkxfbjbjbjkbjkbjkvfbjkvbjkxvbvbjbjkxfbjkvbjkvfbvfbjkvxbjkbjkfbjbjvfbjkvfbjkxvbjkvbjkvbjkbjk",
			image : "panda.jpg",
		},
		{
			id : "test",
			navTitre:"deuxième page",
			titre:"test test ",
			description:"dsfshdfskjdfkjfsdf",
		},
		{
			id : "test2",
			navTitre:"troisième page",
			titre:"test2",
			description:"",
			image : "",
		},
		{
			id : "test3",
			navTitre:"quatrième page",
			titre:"",
			description:"",
			image : "",
		},
	];


/*----------------------------------NE PAS TOUCHER EN DESSOU DE CETTE LIGNE------------------------------------------*/

ElementsHtml="";
navHtml="";

element.forEach(function (item) {

	// la barre de navigation
	navHtml=navHtml+"<a class='item' href='#"+item.id+"'>"+item.navTitre+"</a>";

});

invertElement = element.reverse();

invertElement.forEach(function (item) {

	//le contenu des pages
	ElementsHtml=ElementsHtml+"<section id='"+item.id+"' class=''>"
		ElementsHtml=ElementsHtml+"<h1>"+item.titre+"</h1>"
		ElementsHtml=ElementsHtml+"<div class='ui segment'>"+item.description+"</div>"
		if(item.image){
			ElementsHtml=ElementsHtml+"<div class='medium ui image'>"
				ElementsHtml=ElementsHtml+"<img src='img/"+item.image+"'>"
			ElementsHtml=ElementsHtml+"</div>"
		}
	ElementsHtml=ElementsHtml+"</section>"
});


$(document).ready(function(){
    $(".main").html(ElementsHtml);
    $(".navigationMenu").html(navHtml);
    $("a").on( "click", function( event ) {
    	$("a").removeClass("active")
    	$( this ).addClass("active")
    });
});