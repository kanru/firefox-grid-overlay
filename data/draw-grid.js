"use strict";

function draw_grid_overlay() {
  let overlay_div = document.createElement("div");
  overlay_div.style.transition = "height ease 2s";
  overlay_div.style.position = "fixed";
  overlay_div.style.width = "960px";
  overlay_div.style.height = "0px";
  window.setTimeout(function () {
    overlay_div.style.height = "100%";    
  });
  overlay_div.style.left = "calc(100% / 2 - 960px / 2)";
  overlay_div.style.top = "0px";
  overlay_div.style.pointerEvents = "none";
  let grid_width = 960;
  let columnNumber = 12;
  let gap_width = 20;
  let strip_width = (grid_width / columnNumber) - gap_width;
  let strip_div = document.createElement("div");
  strip_div.style.cssFloat = "left";
  strip_div.style.width = strip_width + "px";
  strip_div.style.height = "100%";
  strip_div.style.marginLeft = gap_width/2 + "px";
  strip_div.style.marginRight = gap_width/2 + "px";
  strip_div.style.backgroundColor = "red";
  strip_div.style.pointerEvents = "none";
  strip_div.style.opacity = "0.3";
  for (let i = 0; i < columnNumber; ++i) {
    overlay_div.appendChild(strip_div.cloneNode(false));
  }
  document.body.appendChild(overlay_div);
}

// "self" is a global object in content scripts
self.port.on("draw-grid", draw_grid_overlay);
