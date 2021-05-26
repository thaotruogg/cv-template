const ratings = [
	{ id: "238472", name: "KẾ TOÁN TỔNG HỢP", level: 3 },
	{ id: "238473", name: "KẾ TOÁN NGÂN HÀNG", level: 4 },
	{ id: "238474", name: "PHẦM MỀM KẾ TOÁN (Bravo, Misa)", level: 4.5 },
	{ id: "238475", name: "OFFICE (Word/Excel/Power Point)", level: 2 },
];

const starTotal = 5;

document.addEventListener("DOMContentLoaded", renderHtml);
document.addEventListener("DOMContentLoaded", getRatings);

function renderHtml() {
	for (let rating in ratings) {
		let html = `<li class="skill__item" id="id-${ratings[rating].id}">
                            <p class="item__name">
                                ${ratings[rating].name}
                            </p>
                            <div class="dot-outer">
                                <div class="dot-inner"></div>
                            </div>
                        </li>`;

		document.getElementById("skill-level").innerHTML += html;
	}
}

function getRatings() {
	for (let rating in ratings) {
		const starPercentage = (ratings[rating].level / starTotal) * 100;

		// Round to nearest 10
		const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

		// Set width of star-inner to percentage
		document.querySelector(`#id-${ratings[rating].id} .dot-inner`).style.width =
			starPercentageRounded;
	}
}
