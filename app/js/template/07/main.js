import { dataSkill, dataLang, dataPersonalSkill } from "./value.js";
import { renderHtml, getRatings } from "../../bar-process/barProcess.js";
import {
	renderHtml as skillRender,
	getPercent as skillGet,
} from "../../circle-process/circleProcess-v2.js";

document.addEventListener(
	"DOMContentLoaded",
	renderHtml(dataLang, "lang-level")
);
document.addEventListener("DOMContentLoaded", getRatings(dataLang));
document.addEventListener(
	"DOMContentLoaded",
	renderHtml(dataSkill, "skill-level")
);
document.addEventListener("DOMContentLoaded", getRatings(dataSkill));
document.addEventListener(
	"DOMContentLoaded",
	skillRender(dataPersonalSkill, "personal-skill")
);
document.addEventListener("DOMContentLoaded", skillGet(dataPersonalSkill));
