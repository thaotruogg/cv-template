import { langRatings, skillRatings } from "./value.js";
import { renderHtml, getPercent } from "../../circle-process/circleProcess.js";

import {
	renderHtml as langHTML,
	getPercent as langGetPercent,
} from "../../ribbon-process/ribbonProcess.js";

document.addEventListener(
	"DOMContentLoaded",
	renderHtml(skillRatings, "skill-level")
);
document.addEventListener("DOMContentLoaded", getPercent(skillRatings));

document.addEventListener(
	"DOMContentLoaded",
	langHTML(langRatings, "lang-level")
);
document.addEventListener("DOMContentLoaded", langGetPercent(langRatings));
