const buttonFiction = document.getElementById("btn-fiction");
const buttonNonFiction = document.getElementById("btn-nonfiction");
const buttonYoungAdult = document.getElementById("btn-ya");
const buttonChildren = document.getElementById("btn-children");
const buttonManga = document.getElementById("btn-manga");

const rankingsFiction = document.getElementById("section-fiction");
const rankingsNonfiction = document.getElementById("section-nonfiction");
const rankingsYoungAdult = document.getElementById("section-ya");
const rankingsChildren = document.getElementById("section-children");
const rankingsManga = document.getElementById("section-manga");

buttonFiction.addEventListener("click", showFiction);
buttonNonFiction.addEventListener("click", showNonfiction);
buttonYoungAdult.addEventListener("click", showYoungAdult);
buttonChildren.addEventListener("click", showChildren);
buttonManga.addEventListener("click", showManga);

function showFiction() {
  rankingsFiction.classList.remove("hide");
  rankingsNonfiction.classList.add("hide");
  rankingsYoungAdult.classList.add("hide");
  rankingsChildren.classList.add("hide");
  rankingsManga.classList.add("hide");
}
function showNonfiction() {
  rankingsNonfiction.classList.remove("hide");
  rankingsFiction.classList.add("hide");
  rankingsYoungAdult.classList.add("hide");
  rankingsChildren.classList.add("hide");
  rankingsManga.classList.add("hide");
}
function showYoungAdult() {
  rankingsYoungAdult.classList.remove("hide");
  rankingsFiction.classList.add("hide");
  rankingsNonfiction.classList.add("hide");
  rankingsChildren.classList.add("hide");
  rankingsManga.classList.add("hide");
}
function showChildren() {
  rankingsChildren.classList.remove("hide");
  rankingsFiction.classList.add("hide");
  rankingsNonfiction.classList.add("hide");
  rankingsYoungAdult.classList.add("hide");
  rankingsManga.classList.add("hide");
}
function showManga() {
  rankingsManga.classList.remove("hide");
  rankingsFiction.classList.add("hide");
  rankingsNonfiction.classList.add("hide");
  rankingsYoungAdult.classList.add("hide");
  rankingsChildren.classList.add("hide");
}
