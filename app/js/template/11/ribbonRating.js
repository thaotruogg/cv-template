const ratings = [
	{ id: "jp", name: "Japanese", level: 2.5, color: "#323651" },
	{ id: "en", name: "English", level: 3.7, color: "#f4543a" },
	{ id: "vn", name: "Vietnamese", level: 5, color: "#FFBE29" },
];

const starTotal = 5;

document.addEventListener("DOMContentLoaded", renderHtml);
document.addEventListener("DOMContentLoaded", getPercent);

function renderHtml() {
	for (let rating in ratings) {
		let html = `<div class="language__item" id="id-${ratings[rating].id}">
                            <span class="item__name">${ratings[rating].name}</span>
                            <div class="ribbon-outer">
                                <div class="ribbon-inner">
                                    <span class="percent">65%</span>
                                </div>
                                <div class="triangle-up-outer"></div>
                            </div>
                        </div>`;

		document.getElementById("lang-level").innerHTML += html;
	}
}

function getPercent() {
	for (let rating in ratings) {
		const percentage = (ratings[rating].level / starTotal) * 100;

		// Round to nearest 10
		const percentageRounded = `${Math.round(percentage / 10) * 10}%`;

		// Set heigh of ribbon-outer to percentage
		document.querySelector(
			`#id-${ratings[rating].id} .ribbon-outer`
		).style.height = percentageRounded;

		document.querySelector(
			`#id-${ratings[rating].id} .percent`
		).innerHTML = `${percentage}%`;

		document
			.querySelector(`#id-${ratings[rating].id} .ribbon-outer`)
			.style.setProperty("border-color", `${ratings[rating].color}`);
		document
			.querySelector(`#id-${ratings[rating].id} .ribbon-inner`)
			.style.setProperty("background-color", `${ratings[rating].color}`);
		document
			.querySelector(
				`#id-${ratings[rating].id} .ribbon-outer .triangle-up-outer`
			)
			.style.setProperty("border-bottom-color", `${ratings[rating].color}`);
	}
}
