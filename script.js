const price = document.querySelector(".dollar");
const slider = document.querySelector(".range");
const toggle = document.querySelector("#switch");
const month_year = document.querySelector(".m");
const views = document.querySelector(".views");
const complete_style = window.getComputedStyle(slider);
const color_cyan = complete_style.getPropertyValue("--full-slider-bar");
const color_gray = complete_style.getPropertyValue("--empty-slider-bar");
const value = {
  0: "8",
  1: "12",
  2: "16",
  3: "24",
  4: "36",
};
const view_m = {
  8: "10K",
  12: "50K",
  16: "100K",
  24: "500K",
  36: "1M",
};
let output = function () {
  let val = value[`${slider.value}`];
  if (toggle.checked) {
    price.innerHTML = `$${val - [Number(val) * 0.25]}.00`;
    month_year.innerHTML = `/year`;
    views.innerHTML = view_m[`${Number(val)}`];
  } else {
    price.innerHTML = ` $${Number(val)}.00`;
    month_year.innerHTML = `/month`;
    views.innerHTML = view_m[`${Number(val)}`];
  }
};
slider.addEventListener("input", output);
toggle.addEventListener("click", output);
slider.addEventListener("input", function () {
  const grValue =
    ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.backgroundImage = `linear-gradient(to right, ${color_cyan} ${grValue}%, ${color_gray} ${grValue}%)`;
});
