//l'id doit etre égal a l'id de la bare de navigation et il ne doit pas avoir deux fois le même id
//image est optionelle
const element =[
		{
			id : "first",
			titre:"Ceci est un titre",
			description:"je suis une para graphe hhhhhhhhhhhhhsdfhjfghn,kfjhdfsnbbfkgbkfjvbkbkjbkxdfbjkfcbjkv bjkbjkbjkbjkxbjfbjkbjkxxfbjkvbjkvfbj kvbjjkbvfkfbjbjvkxbjkvbvbjkbjkfvbjkvbjkxbjkbjkxbjkvbjkbjk bjvfbjkxbjkbjkxbbjkbjkxfxbjkbjkvbjkvfbjkxb jkxvbbjkbjbjfxbjvfvfxbjkbjkxfbjbjbjkbjkbjkvfbjkvbjkxvbvbjbjkxfbjkvbjkvfbvfbjkvxbjkbjkfbjbjvfbjkvfbjkxvbjkvbjkvbjkbjk",
			image : "panda.jpg",
		},
		{
			id : "test",
			titre:"",
			description:"",
			image : "",
		},
		{
			id : "",
			titre:"",
			description:"",
			image : "",
		},
		{
			id : "",
			titre:"",
			description:"",
			image : "",
		},
	];


/*----------------------------------NE PAS TOUCHER EN DESSOU DE CETTE LIGNE------------------------------------------*/

ElementsHtml="";

element.forEach(function (item) {
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
});