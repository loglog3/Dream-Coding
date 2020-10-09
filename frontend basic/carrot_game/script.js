const gamePlace = document.querySelector(".gamePlace");
const replay = document.querySelectorAll(".replay");
const object = document.querySelector(".object");
const seconds = document.querySelector(".seconds");
const resultModal = document.querySelector(".resultModal");
const resultMessage = document.querySelector(".resultMessage");

let timer = undefined;
let carrotCount = 0;
let gamePlaceRect = gamePlace.getBoundingClientRect();
let numberOfItems = 1;

const randomPosition = () => {
  let top = Math.random() * gamePlaceRect.height;
  let left = Math.random() * gamePlaceRect.width;
  return { top, left };
};

const makeBugs = () => {
  let random = randomPosition();
  let bug = document.createElement("img");
  bug.setAttribute("src", "./carrot/img/bug.png");
  bug.setAttribute("class", "bug object");
  bug.style.top = `${random.top - 80}px`;
  bug.style.left = `${random.left - 80}px`;
  // bug.style.top = `1px`;
  // bug.style.left = `1px`;
  gamePlace.appendChild(bug);
};

const makeCarrot = () => {
  console.log("당근");
  let random = randomPosition();
  let carrot = document.createElement("img");
  carrot.setAttribute("src", "./carrot/img/carrot.png");
  carrot.setAttribute("class", "carrot object");
  // carrot.style.top = `1px`;
  // carrot.style.left = `1px`;
  carrot.style.top = `${random.top - 80}px`;
  carrot.style.left = `${random.left - 80}px`;
  gamePlace.appendChild(carrot);
};

const fail = () => {
  clearInterval(timer);
  resetGame();
  resultMessage.textContent = " ㅏㅣ이고난!!";
  resultModal.style.display = "block";
};

const eraseBug = (e) => {
  fail();
  clearInterval(timer);
};

const success = () => {
  clearInterval(timer);
  resetGame();
  resultModal.style.display = "block";
};

const eraseCarrot = (e) => {
  carrotCount++;
  if (carrotCount === numberOfItems) {
    success();
  }
  e.target.remove();
  console.log("지움");
};

const resetGame = () => {
  carrotCount = 0;
  resultModal.style.display = "none";
  gamePlace.innerHTML = "";
  // 안에 있는 내용을 다 지우는 방법입니다.
};

const makeGame = () => {
  console.log("게임시작");
  resetGame();
  clearInterval(timer);
  seconds.innerHTML = `10초`;
  let second = 9;
  interval = () => {
    seconds.innerHTML = `${second}초`;
    if (!second) {
      alert("게임이 끝났습니다.");
      clearInterval(timer);
    }
    second--;
  };

  timer = setInterval(interval, 1000);

  let i = 0;
  while (i < numberOfItems) {
    makeBugs();
    makeCarrot();
    i++;
  }
};
replay[0].addEventListener("click", makeGame);
replay[1].addEventListener("click", makeGame);

gamePlace.addEventListener("click", (e) => {
  console.log(e.target.className);
  if (e.target.className === "bug object") {
    eraseBug();
    console.log("실패");
  } else if (e.target.className === "carrot object") eraseCarrot(e);
});

makeGame();
