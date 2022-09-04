const rate1 = document.querySelector("#a");
const rate2 = document.querySelector("#b");
const rate3 = document.querySelector("#c");
const rate4 = document.querySelector("#d");
const rate5 = document.querySelector("#e");
const btn = document.querySelector("#btn");
const rateSection = document.querySelector(".rating-section");
const thankSection = document.querySelector(".thanks-section");
const finalRating = document.querySelector("#selection");
const ratings = [rate1, rate2, rate3, rate4, rate5];

let isSelected = false;


for (let rate of ratings) {
  rate.addEventListener("click", (e) => {
    let target = e.target;
    let ratedValue = target.innerText; // for tracking the value that was clicked by the user.
  
  
    btn.addEventListener("click", () => {
      rateSection.classList.add("invisible");
      thankSection.style.display = "flex";
      finalRating.innerText = `You selected ${ratedValue} out of 5`;
    });
  });
}
