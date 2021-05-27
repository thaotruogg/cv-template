import { data } from "./value.js";
import {
	renderHtml as skillHTML,
	getRatingsDot as skillGetRatings,
} from "/app/js/dot-process/dotProcess.js";

document.addEventListener("DOMContentLoaded", skillHTML(data, "skill-level"));
document.addEventListener("DOMContentLoaded", skillGetRatings(data));
