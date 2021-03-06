import { dataSkill, dataLang } from "./value.js";
import {
	renderHtml as skillHTML,
	getRatingsDot as skillGetRatings,
} from "../../dot-process/dotProcess.js";

import {
	renderHtml as langHTML,
	getRatings as langGetRatings,
} from "../../bar-process/barProcess.js";

document.addEventListener(
	"DOMContentLoaded",
	skillHTML(dataSkill, "skill-level")
);
document.addEventListener("DOMContentLoaded", skillGetRatings(dataSkill));
document.addEventListener("DOMContentLoaded", langHTML(dataLang, "lang-level"));
document.addEventListener("DOMContentLoaded", langGetRatings(dataLang));
