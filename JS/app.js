
const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let countWin = 0;
let countFlip = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  countFlip = countFlip + 1;
  console.log(countFlip);

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  if (isMatch) {
    //Compteur, si countWin = 6 alors "you win"
    countWin = countWin + 1;
    console.log(countWin);
    youWin();
    disableCards();
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function youWin() {
  const youWinParty = document.querySelector(".youWin");
  const shotsNumber = document.querySelector(".countFlip");
  document.getElementById("shots").innerText = countFlip;
  if (countWin == 6) {
    youWinParty.hidden = false;
    shotsNumber.hidden = false;
  }
}


(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    location.reload();
  }
});




