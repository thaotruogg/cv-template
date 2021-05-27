const total = 5;
export function renderHtml(value, idElement) {
	for (let rating in value) {
		let html = `<div class="skill__item" id="id-${value[rating].id}">
                            <div class="percent">
                                <svg>
                                    <circle cx="24" cy="24" r="24"></circle>
                                    <circle class="inside-circle" cx="18" cy="18" r="18"></circle>
                                </svg>
                                <span class="text__percent">26%</span>
                            </div>
                            <p class="text__skill">${value[rating].name}</p>
                        </div>`;

		document.getElementById(`${idElement}`).innerHTML += html;
	}
}

export function getPercent(value) {
	for (let rating in value) {
		const percentage = (value[rating].level / total) * 100;

		// Round to nearest 10
		const percentageRounded = `${Math.round(440 - (150 * percentage) / 100)}`;

		// Set heigh of ribbon-outer to percentage
		document
			.querySelector(`#id-${value[rating].id} circle`)
			.style.setProperty("stroke-dashoffset", `${percentageRounded}`);

		// Set percent text
		document.querySelector(
			`#id-${value[rating].id} .text__percent`
		).innerHTML = `${percentage}%`;

		// other style
		document
			.querySelector(`#id-${value[rating].id} .inside-circle`)
			.style.setProperty("fill", `${value[rating].color}`);
	}
}
