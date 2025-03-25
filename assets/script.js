const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/***Ajout d'un event listener flèche droite et gauche***/
const rightarrow = document.querySelector(".arrow_right");
const leftarrow = document.querySelector(".arrow_left");

rightarrow.addEventListener("click", () => {
	console.log("J'ai cliqué sur la flèche droite");
})

leftarrow.addEventListener("click", () => {
	console.log("J'ai cliqué sur la flèche gauche");
})

