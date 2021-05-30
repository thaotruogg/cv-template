const starTotal = 5;

export function renderHtml(value, idElement) {
	for (let rating in value) {
		let html = `<div class="language__item" id="id-${value[rating].id}">
                            <span class="item__name">${value[rating].name}</span>
                            <div class="ribbon-outer">
                                <div class="ribbon-inner">
                                    <span class="percent">65%</span>
								</div>
								<div class="triangle-up-outer"></div>
                            </div>
                        </div>`;

		document.getElementById(`${idElement}`).innerHTML += html;
	}
}

export function getPercent(value) {
	for (let rating in value) {
		const percentage = (value[rating].level / starTotal) * 100;

		// Set heigh of ribbon-outer to percentage
		document.querySelector(
			`#id-${value[rating].id} .ribbon-outer`
		).style.height = `${percentage}px`;
		document.querySelector(
			`#id-${value[rating].id} .ribbon-inner`
		).style.height = `${percentage - 8}px`;

		document.querySelector(
			`#id-${value[rating].id} .percent`
		).innerHTML = `${percentage}%`;

		// other style
		document
			.querySelector(`#id-${value[rating].id} .ribbon-outer`)
			.style.setProperty("border-color", `${value[rating].color}`);
		document
			.querySelector(`#id-${value[rating].id} .ribbon-inner`)
			.style.setProperty("background-color", `${value[rating].color}`);
		document
			.querySelector(`#id-${value[rating].id} .ribbon-outer .triangle-up-outer`)
			.style.setProperty("border-bottom-color", `${value[rating].color}`);
	}
}
