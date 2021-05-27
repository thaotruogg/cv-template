import { langData, skillData } from "./value.js";
import { renderHtml, getRatings } from "/app/js/star-rating/starRating.js";
import {
	renderSkillHtml,
	getLevelSkills,
} from "/app/js/bar-process-with-dot/barProcessWithDot.js";

document.addEventListener(
	"DOMContentLoaded",
	renderHtml(langData, "lang-level")
);
document.addEventListener("DOMContentLoaded", getRatings(langData));

document.addEventListener(
	"DOMContentLoaded",
	renderSkillHtml(skillData, "skill-bar")
);
document.addEventListener("DOMContentLoaded", getLevelSkills(skillData));
