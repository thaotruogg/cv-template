const langRatings = [
	{ id: "jp", name: "Japanese", level: 3 },
	{ id: "en", name: "English", level: 3.5 },
	{ id: "vn", name: "Vietnamese", level: 4.5 },
];

const skillRatings = [
	{ id: "js", name: "Javascript", level: 3 },
	{ id: "php", name: "PHP", level: 3.5 },
	{ id: "java", name: "Java", level: 1 },
	{ id: "html_css", name: "HTML5 & CSS3", level: 4 },
];

const total = 5;

document.addEventListener("DOMContentLoaded", renderHtmlLang);
document.addEventListener("DOMContentLoaded", renderHtmlSkill);
document.addEventListener("DOMContentLoaded", getRatingsLang);
document.addEventListener("DOMContentLoaded", getRatingsSkill);

function renderHtmlLang() {
	for (let rating in langRatings) {
		let html = `<li class="process__item" id="${langRatings[rating].id}">
                                <p class="item__name">${langRatings[rating].name}</p>
                                <div class="process-outer">
                                    <div class="process-inner"></div>
                                </div>
                            </li>`;

		document.getElementById("lang-level").innerHTML += html;
	}
}

function renderHtmlSkill() {
	for (let rating in skillRatings) {
		let html = `<li class="process__item" id="${skillRatings[rating].id}">
                                <p class="item__name">${skillRatings[rating].name}</p>
                                <div class="process-outer">
                                    <div class="process-inner"></div>
                                </div>
                            </li>`;

		document.getElementById("skill-level").innerHTML += html;
	}
}

function getRatingsLang() {
	for (let rating in langRatings) {
		const starPercentage = (langRatings[rating].level / total) * 100;

		// Round to nearest 10
		const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

		// Set width of star-inner to percentage
		document.querySelector(
			`#${langRatings[rating].id} .process-inner`
		).style.width = starPercentageRounded;
	}
}

function getRatingsSkill() {
	for (let rating in skillRatings) {
		const starPercentage = (skillRatings[rating].level / total) * 100;

		// Round to nearest 10
		const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

		// Set width of star-inner to percentage
		document.querySelector(
			`#${skillRatings[rating].id} .process-inner`
		).style.width = starPercentageRounded;
	}
}
