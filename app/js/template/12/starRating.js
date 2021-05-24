const ratings = [
	{ id: "jp", name: "Japanese", level: 3 },
	{ id: "en", name: "English", level: 3.5 },
	{ id: "vn", name: "Vietnamese", level: 4.5 },
];

const starTotal = 5;

document.addEventListener("DOMContentLoaded", renderHtml);
document.addEventListener("DOMContentLoaded", getRatings);

function renderHtml() {
	for (let rating in ratings) {
		let html = `<div class="language__item break-all" id="${ratings[rating].id}">
						<span class="language__title"> ${ratings[rating].name} </span>
						<div class="star-outer">
							<div class="star-inner"></div>
						</div>
					</div>`;

		document.getElementById("lang-level").innerHTML += html;
	}
}

function getRatings() {
	for (let rating in ratings) {
		const starPercentage = (ratings[rating].level / starTotal) * 100;

		// Round to nearest 10
		const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

		// Set width of star-inner to percentage
		document.querySelector(`#${ratings[rating].id} .star-inner`).style.width =
			starPercentageRounded;
	}
}
