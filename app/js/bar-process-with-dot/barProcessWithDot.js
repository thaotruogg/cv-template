const levelTotal = 5;

export function renderSkillHtml(value, idElement) {
	for (let skillLv in value) {
		let html = `<div class="skill__item" id="id-${value[skillLv].id}">
							<span class="item__title">${value[skillLv].name}</span>
							<div class="skill-bar__outer">
								<div class="skill-bar__inner"></div>
							</div>
						</div>`;

		document.getElementById(`${idElement}`).innerHTML += html;
	}
}

export function getLevelSkills(value) {
	for (let skillLv in value) {
		const skillPercentage = (value[skillLv].level / levelTotal) * 100;

		// Round to nearest 10
		const skillPercentageRounded = `${Math.round(skillPercentage / 10) * 10}%`;

		// Set width of star-inner to percentage
		document.querySelector(
			`#id-${value[skillLv].id} .skill-bar__inner`
		).style.width = skillPercentageRounded;
	}
}
