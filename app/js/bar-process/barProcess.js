const total = 5;

export function renderHtml(value, idElement) {
	for (let rating in value) {
		let html = `<li class="process__item" id="id-${value[rating].id}">
                                <p class="item__name">${value[rating].name}</p>
                                <div class="process-outer">
                                    <div class="process-inner"></div>
                                </div>
                            </li>`;

		document.getElementById(`${idElement}`).innerHTML += html;
	}
}

export function getRatings(value) {
	for (let rating in value) {
		const starPercentage = (value[rating].level / total) * 100;

		// Round to nearest 10
		const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

		// Set width of process-inner to percentage
		document.querySelector(
			`#id-${value[rating].id} .process-inner`
		).style.width = starPercentageRounded;
	}
}
