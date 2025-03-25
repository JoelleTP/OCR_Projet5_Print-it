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

/***Définition nombre de points en fonction du slides***/
let slidesnumber = slides.length;
let newdot;
const dots = document.querySelector(".dots");

for (let i = 0; i < slidesnumber; i++) {
	newdot = document.createElement("div");
	dots.appendChild(newdot);
	newdot.classList.add("dot");
}

/***Modification du bulletpoint de la slide affichée***/
const alldots = document.querySelectorAll(".dot");
let slidesposition = 0; 

for (let i = 0; i < alldots.length; i++) {
	if (i === slidesposition) {
		alldots[i].classList.add("dot_selected");
	}
	else {
		alldots[i].classList.remove("dot_selected");
	}
}
