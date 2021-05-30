const total = 5;
export function renderHtml(value, idElement) {
	for (let rating in value) {
		let html = `<div class="skill__item" id="id-${value[rating].id}">
                                <div class="percent">
                                    <svg>
                                        <circle class="circle-outer" cx="40" cy="40" r="40"></circle>
                                        <circle class="circle-inner" cx="40" cy="40" r="40"></circle>
                                    </svg>
                                    <div>
                                        <p class="text__skill">${value[rating].name}</p>
                                        <span class="text__percent">26%</span>
                                    </div>
                                </div>
                            </div>`;

		document.getElementById(`${idElement}`).innerHTML += html;
	}
}

export function getPercent(value) {
	for (let rating in value) {
		const percentage = (value[rating].level / total) * 100;

		// Round to nearest 10
		const percentageRounded = `${Math.round(440 - (248 * percentage) / 100)}`;

		// Set heigh of ribbon-outer to percentage
		document
			.querySelector(`#id-${value[rating].id} .circle-inner`)
			.style.setProperty("stroke-dashoffset", `${percentageRounded}`);

		// Set percent text
		document.querySelector(
			`#id-${value[rating].id} .text__percent`
		).innerHTML = `${percentage}%`;

		if (value[rating].color) {
			// other style
			document
				.querySelector(`#id-${value[rating].id} .circle-inner`)
				.style.setProperty("stroke", `${value[rating].color}`);
		}
	}
}
