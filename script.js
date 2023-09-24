const initialCard = document.querySelector(".card-initial");
const submittedCard = document.querySelector(".submitted-card");
const submitButton = document.getElementById("submit-btn");
const rateAgainButton = document.getElementById("rate-again-btn");
const rating = document.getElementById("selected-rating");
const rates = document.querySelectorAll(".rating-buttons");

submitButton.addEventListener("click", () => {
  submittedCard.classList.remove("hidden");
  initialCard.classList.add("hidden");
});
rateAgainButton.addEventListener("click", () => {
  submittedCard.classList.add("hidden");
  initialCard.classList.remove("hidden");
  rating.innerText = "0";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerText = rate.innerHTML;
  });
});
