export const imagesToday = [
	{ id: 2, src: require("../assets/pic2.jpg"), cat: "Seaside" },
	{ id: 3, src: require("../assets/pic3.jpg"), cat: "Seaside" },
	{ id: 11, src: require("../assets/pic11.jpg"), cat: "Astronaut" },
	{ id: 12, src: require("../assets/pic12.jpg"), cat: "Astronaut" },
	{ id: 13, src: require("../assets/pic13.jpg"), cat: "Astronaut" },
	{ id: 14, src: require("../assets/pic14.jpg"), cat: "Seaside" },
	{ id: 16, src: require("../assets/pic16.jpg"), cat: "Seaside" },
];

export const imagesWeek = [
	{ id: 1, src: require("../assets/pic1.jpg"), cat: "Seaside" },
	{ id: 2, src: require("../assets/pic2.jpg"), cat: "Seaside" },
	{ id: 3, src: require("../assets/pic3.jpg"), cat: "Seaside" },
	{ id: 4, src: require("../assets/pic4.jpg"), cat: "Seaside" },
	{ id: 5, src: require("../assets/pic5.jpg"), cat: "Seaside" },
	{ id: 6, src: require("../assets/pic6.jpg"), cat: "Seaside" },
	{ id: 7, src: require("../assets/pic7.jpg"), cat: "Seaside" },
	{ id: 8, src: require("../assets/pic8.jpg"), cat: "Seaside" },
	{ id: 9, src: require("../assets/pic9.jpg"), cat: "Astronaut" },
	{ id: 10, src: require("../assets/pic10.jpg"), cat: "Astronaut" },
	{ id: 11, src: require("../assets/pic11.jpg"), cat: "Astronaut" },
	{ id: 12, src: require("../assets/pic12.jpg"), cat: "Astronaut" },
	{ id: 13, src: require("../assets/pic13.jpg"), cat: "Astronaut" },
	{ id: 14, src: require("../assets/pic14.jpg"), cat: "Seaside" },
	{ id: 15, src: require("../assets/pic15.jpg"), cat: "Seaside" },
	{ id: 16, src: require("../assets/pic16.jpg"), cat: "Seaside" },
];

export const images = {
	imagesToday,
	imagesWeek,
};

function checkCat(cats) {
	return cats.cat === "Astronaut";
}
export const Astronauttodaypics = imagesToday.filter(checkCat);
export const Astronautweekpics = imagesWeek.filter(checkCat);
