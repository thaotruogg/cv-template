const skillLevels = [
	{ id: "js", name: "Javascript", level: 3 },
	{ id: "php", name: "PHP", level: 3.5 },
	{ id: "java", name: "Java", level: 1 },
	{ id: "html_css", name: "HTML5 & CSS3", level: 4 },
];

const levelTotal = 5;

document.addEventListener("DOMContentLoaded", renderSkillHtml);
document.addEventListener("DOMContentLoaded", getLevelSkills);

function renderSkillHtml() {
	for (let skillLv in skillLevels) {
		let html = `<div class="skill__item" id="${skillLevels[skillLv].id}">
							<span class="item__title">${skillLevels[skillLv].name}</span>
							<div class="skill-bar__outer">
								<div class="skill-bar__inner"></div>
							</div>
						</div>`;

		document.getElementById("skill-bar").innerHTML += html;
	}
}

function getLevelSkills() {
	for (let skillLv in skillLevels) {
		const skillPercentage = (skillLevels[skillLv].level / levelTotal) * 100;

		// Round to nearest 10
		const skillPercentageRounded = `${Math.round(skillPercentage / 10) * 10}%`;

		// Set width of star-inner to percentage
		document.querySelector(
			`#${skillLevels[skillLv].id} .skill-bar__inner`
		).style.width = skillPercentageRounded;
	}
}
