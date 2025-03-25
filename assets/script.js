/***Définition des variables***/
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

const rightarrow = document.querySelector(".arrow_right");
const leftarrow = document.querySelector(".arrow_left");
let slidesimage = document.querySelector(".banner-img");
let slidestext = document.querySelector ("#banner p");
let slidesnumber = slides.length;
let slidesposition = 0; 

/***Fonction***/
/*Fonction : définition nombre de points en fonction du slides*/
function createDots() {
	let newdot;
	const dots = document.querySelector(".dots");
	for (let i = 0; i < slidesnumber; i++) {
		newdot = document.createElement("div");
		dots.appendChild(newdot);
		newdot.classList.add("dot");
	}
}

/*Fonction : modification du bulletpoint de la slide affichée*/
function updateDots() {
	const alldots = document.querySelectorAll(".dot");
	for (let i = 0; i < alldots.length; i++) {
		if (i === slidesposition) {
			alldots[i].classList.add("dot_selected");
		}
		else {
			alldots[i].classList.remove("dot_selected");
		}
	}
}

/***Initialisation du slider***/
createDots();
updateDots();


/***Changement de slides lorsque l'on clique sur la flèche droite ou la flèche gauche***/
rightarrow.addEventListener("click", () => {
	slidesposition++;
	slidesimage.setAttribute("src", `./assets/images/slideshow/${slides[slidesposition].image}`);
	slidestext.innerHTML = slides[slidesposition].tagLine;
	updateDots();
})

leftarrow.addEventListener("click", () => {
	slidesposition--;
	slidesimage.setAttribute("src", `./assets/images/slideshow/${slides[slidesposition].image}`);
	slidestext.innerHTML = slides[slidesposition].tagLine;
	updateDots();
})



