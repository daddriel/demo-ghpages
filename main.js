//Guess words
const guessWords = [
  {
    word: "apple",
    helpers: ["red" , "fruit", "round", "five letters", "🍎"],
  },
  {
    word: "banana",
    helpers: ["yellow", "fruit", "long", "six letters", "🍌"],
  },
  {
    word: "orange",
    helpers: ["orange", "fruit", "round", "six letters", "🍊"],
  },
  {
    word: "grape",
    helpers: ["purple", "fruit", "rounds", "five letters", "🍇"],
  },
  {
    word: "mango",
    helpers: ["yellow", "fruit", "juice", "five letters", "🥭"],
  },
  {
    word: "pear",
    helpers: ["green", "fruit", "juice", "four letters", "🍐"],
  },
  {
    word: "pineapple",
    helpers: ["yellow", "fruit", "juice", "ten letters", "🍍"],
  },
  {
    word: "strawberry",
    helpers: ["red", "fruit", "juice", "ten letters", "🍓"],
  },
  {
    word: "watermelon",
    helpers: ["green", "fruit", "juice", "ten letters", "🍉"],
  },
  {
    word: "peach",
    helpers: ["orange", "fruit", "juice", "five letters", "🍑"],
  },
  {
    word:"onion",
    helpers: ["white", "vegetable", "round", "five letters", "🧅"],
  },
{
  word:"carrot",
  helpers: ["orange", "vegetable", "long", "six letters", "🥕"],
},
{
  word: "lettuce",
  helpers: ["green", "vegetable", "leaf", "seven letters", "🥬"],
},

{
  word: "broccoli",
  helpers: ["green", "vegetable", "tree", "eight letters", "🥦"],
},
{
  word: "tomato",
  helpers: ["red", "vegetable", "round", "six letters", "🍅"],
},

{
  word: "cucumber",
  helpers: ["green", "vegetable", "long", "eight letters", "🥒"],
},
{
  word: "pepper",
  helpers: ["green", "vegetable", "round", "six letters", "🫑"],
},
];

//
const inputWord = document.getElementById("word-input");
const attemptsUI = document.querySelector(".attempts");

// Attempt
let attempt = 5;
changeColor();
document.querySelector(
  ".attempts"
).innerHTML = `You have ${attempt} left to guess word`;

//inputResponse
function getUserResponse() {
  return inputWord.value.trim().toLowerCase();
}

//extract emojis from guessWords
let textEmoji = "";

guessWords.forEach((word) => {
  textEmoji += word.helpers[4] + " ";
});

document.getElementById("emoji").innerHTML = textEmoji;

//change color of attempts
function changeColor() {
  switch (attempt) {
    case 5:
      removeLevels();
      attemptsUI.classList.add("level1");
      break;
    case 4:
      removeLevels();
      attemptsUI.classList.add("level2");
      break;
    case 3:
      removeLevels();
      attemptsUI.classList.add("level3");
      break;
    case 2:
      removeLevels();
      attemptsUI.classList.add("level4");
      break;
    case 1:
      removeLevels();
      attemptsUI.classList.add("level5");
      break;
    default:
      break;
  }
}

//remove levels for change difficulty easy, middle, hard
function removeLevels() {
  attemptsUI.classList.remove("level1");
  attemptsUI.classList.remove("level2");
  attemptsUI.classList.remove("level3");
  attemptsUI.classList.remove("level4");
  attemptsUI.classList.remove("level5");
}

// Random word
let word = guessWords[Math.floor(Math.random() * guessWords.length)];

// Tips list for word helpers
let list = document.querySelector(".tips_list");
let helpers = word.helpers;
function helpersList() { 
  // remove all child nodes
  let child = list.lastElementChild;
  while (child) {
      list.removeChild(child);
      child = list.lastElementChild;
  }
  // add new child nodes
  for (let i = 0; i < helpers.length - 1; i++) {
    const item = document.createElement("li");
    item.textContent = helpers[i];
    list.appendChild(item);
  }
}

helpersList();
// Difficulty
var easy = document.querySelector(".btn_easy");
var middle = document.querySelector(".btn_middle");
var hard = document.querySelector(".btn_hard");

easy.addEventListener("click", function () {
  removeActive();
  easy.classList.add("active");
  attempt = 5;
  changeColor();
  document.querySelector(
    ".attempts"
  ).innerHTML = `You have ${attempt} left to guess word`;
  console.log(attempt);
});

middle.addEventListener("click", function () {
  removeActive();
  middle.classList.add("active");
  attempt = 3;
  changeColor();
  document.querySelector(
    ".attempts"
  ).innerHTML = `You have ${attempt} left to guess word`;
  console.log(attempt);
});
hard.addEventListener("click", function () {
  removeActive();
  attempt = 1;
  hard.classList.add("active");
  changeColor();
  document.querySelector(
    ".attempts"
  ).innerHTML = `You have ${attempt} left to guess word`;
  console.log(attempt);
});

function removeActive() {
  easy.classList.remove("active");
  middle.classList.remove("active");
  hard.classList.remove("active");
}

// Submit
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", compareResponse);
function compareResponse() {
  if (attempt > 0) {
    const guessWords = getUserResponse();
    if (validate(guessWords) == true) {
      if (guessWords === word.word) {
        removeLevels();
        attemptsUI.innerHTML = `🥰 Congratulations 🥰 you guessed the word : ${word.word} ${word.helpers[4]}`;
        attemptsUI.classList.add("success");
      } else {
        attempt--;
        if (attempt === 0) {
          removeLevels();
          attemptsUI.innerHTML = `😭 You lose 😭 the word is : ${word.word} ${word.helpers[4]}`;
          attemptsUI.classList.add("fail");
        } else {
          document.querySelector(
            ".attempts"
          ).innerHTML = `You have ${attempt} left to guess word`;
          changeColor();
        }
      }
    }
  }
}

// remove error focus
inputWord.addEventListener("keyup", () => {
  inputWord.classList.remove("focus-error");
  inputWord.attributes.placeholder.value = "Enter your guess";
});

// Validate input word
function validate(guessWords) {
  if (guessWords === "") {
    inputWord.focus();
    inputWord.classList.add("focus-error");
    inputWord.attributes.placeholder.value = "Please enter your guess";
    return false;
  }
  return true;
}

//Key enter submit
inputWord.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});

// Reset
const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", resetGame);

function resetGame() {
  attempt = 5;
  document.querySelector(
    ".attempts"
  ).innerHTML = `You have ${attempt} left to guess word`;
  changeColor();
  inputWord.value = "";
  document.getElementById("emoji").innerHTML = textEmoji;
  inputWord.focus();
  attemptsUI.classList.remove("fail");
  attemptsUI.classList.remove("success");
  word = guessWords[Math.floor(Math.random() * guessWords.length)];
  helpers = word.helpers;
  console.log(word.word);
  helpersList();
}
