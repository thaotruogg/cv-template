const starTotal = 5;

export function renderHtml(value, idElement) {
	for (let rating in value) {
		let html = `<li class="skill__item" id="id-${value[rating].id}">
                            <p class="item__name">
                                ${value[rating].name}
                            </p>
                            <div class="dot-outer">
                                <div class="dot-inner"></div>
                            </div>
                        </li>`;

		document.getElementById(`${idElement}`).innerHTML += html;
	}
}

export function getRatingsDot(value) {
	for (let rating in value) {
		const starPercentage = (value[rating].level / starTotal) * 100;

		// Round to nearest 10
		const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

		// Set width of star-inner to percentage
		document.querySelector(`#id-${value[rating].id} .dot-inner`).style.width =
			starPercentageRounded;
	}
}
