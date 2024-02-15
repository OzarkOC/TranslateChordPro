`use strict`;
import { parseChordPro } from "./utils/chordProParse";
// Variables
let songData;
const display = document.querySelector(`[chordPro="display"]`);
const transposeUp = document.querySelector(`chordPro="transposeUp`);
const transposeDown = document.querySelector(`chordPro="transposeDown`);
const transpose = $(".transpose .transpose-level").data("transpose");

// START

updateDisplay(songData, display, transpose);

// Functions
function updateDisplay(chordProData, display, transpose = 1) {
  if (!display) return;
  if (!songData) return;
  const html = parseChordPro(chordProData, transpose);
  display.innerHTML = html;
}
