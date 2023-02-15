let btn = document.querySelector("#select");
let container = document.querySelector(".seats-container ");
let seats = document.querySelector(".row .seat:not(.sold)");
let count = document.querySelector("#count");
let total = document.querySelector("#total");
let movieSelect = document.querySelector("#movies");

// populatedUI();
let ticketprice = +movieSelect.nodeValue;

let setMovieData = (movieIndex, moviePrice) => {
  localStorage.set("selectdMovieIndex", movieIndex);
  localStorage.set("selectdMoviePrice", moviePrice);
};

let updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll(".row .seat .selected");
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  console.log(seatsIndex);
};
