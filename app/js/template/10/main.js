import { renderHtml, getRatings } from "/app/js/bar-process/barProcess.js";
import { langRatings, skillRatings } from "./value.js";

document.addEventListener(
	"DOMContentLoaded",
	renderHtml(skillRatings, "skill-level")
);
document.addEventListener("DOMContentLoaded", getRatings(skillRatings));
document.addEventListener(
	"DOMContentLoaded",
	renderHtml(langRatings, "lang-level")
);
document.addEventListener("DOMContentLoaded", getRatings(langRatings));
