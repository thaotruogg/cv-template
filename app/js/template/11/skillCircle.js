const skillRatings = [
	{ id: "css", name: "CSS", level: 5, color: "#f4543a" },
	{ id: "html", name: "HTML", level: 4.7, color: "#ffbe29" },
	{ id: "ps", name: "Ps", level: 2.5, color: "#f4543a" },
	{ id: "ai", name: "Ai", level: 3, color: "#ffbe29" },
	{ id: "xd", name: "AdobeXD", level: 4, color: "#ffbe29" },
];

const total = 5;

document.addEventListener("DOMContentLoaded", renderHtml);
document.addEventListener("DOMContentLoaded", getPercent);

function renderHtml() {
	for (let rating in skillRatings) {
		let html = `<div class="skill__item" id="id-${skillRatings[rating].id}">
                            <div class="percent">
                                <svg>
                                    <circle cx="24" cy="24" r="24"></circle>
                                    <circle class="inside-circle" cx="18" cy="18" r="18"></circle>
                                </svg>
                                <span class="text__percent">26%</span>
                            </div>
                            <p class="text__skill">${skillRatings[rating].name}</p>
                        </div>`;

		document.getElementById("skill-level").innerHTML += html;
	}
}

function getPercent() {
	for (let rating in skillRatings) {
		const percentage = (skillRatings[rating].level / total) * 100;

		// Round to nearest 10
		const percentageRounded = `${Math.round(440 - (150 * percentage) / 100)}`;

		// Set heigh of ribbon-outer to percentage
		document
			.querySelector(`#id-${skillRatings[rating].id} circle`)
			.style.setProperty("stroke-dashoffset", `${percentageRounded}`);

		// Set percent text
		document.querySelector(
			`#id-${skillRatings[rating].id} .text__percent`
		).innerHTML = `${percentage}%`;

		// other style
		document
			.querySelector(`#id-${skillRatings[rating].id} .inside-circle`)
			.style.setProperty("fill", `${skillRatings[rating].color}`);
	}
}
