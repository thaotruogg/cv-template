const starTotal = 5;

export function renderHtml(value, idElement) {
	for (let rating in value) {
		let html = `<div class="language__item break-all" id="id-${value[rating].id}">
						<span class="language__title"> ${value[rating].name} </span>
						<div class="star-outer">
							<div class="star-inner"></div>
						</div>
					</div>`;

		document.getElementById(`${idElement}`).innerHTML += html;
	}
}

export function getRatings(value) {
	for (let rating in value) {
		const starPercentage = (value[rating].level / starTotal) * 100;

		// Round to nearest 10
		const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

		// Set width of star-inner to percentage
		document.querySelector(`#id-${value[rating].id} .star-inner`).style.width =
			starPercentageRounded;
	}
}
