`use strict`;
// import { parseChordPro } from "./utils/chordProParse.ts";
// Variables

const display = document.querySelector(`[chordPro="display"]`);
const songData = display.getAttribute("songData");
const transposeUp = document.querySelector(`[chordPro="transposeUp"]`);
const transposeDown = document.querySelector(`[chordPro="transposeDown"]`);

// const transpose = $(".transpose .transpose-level").data("transpose");
console.log(songData);
// START
// updateDisplay(songData, display, transpose);

// Functions
function updateDisplay(chordProData, display, transpose = 1) {
  if (!display) return;
  if (!songData) return;
  const html = parseChordPro(chordProData, transpose);
  display.innerHTML = html;
}
