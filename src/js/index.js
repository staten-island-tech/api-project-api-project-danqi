import { DOMSelectors } from "./DOM";
//import { genres } from "./genre";

const key = "u8BKHxa00AgeWIPATsMKvkhaqugW80M2";

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

const sectionFiction = async function () {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/combined-print-and-e-book-fiction.json?api-key=${key}`
    );
    const data = await response.json();
    const books = data.results.books;
    books.forEach((book) => {
      DOMSelectors.sectionFiction.insertAdjacentHTML(
        "beforeend",
        `<div class="book-card">
        <div class="book-card-front">
          <img
            src= ${book.book_image}
            alt=""
            class="cover"
          />
        </div>
        <div class="book-card-back">
          <h3 class="book-card-header">${book.title}</h3>
          <div class="rank-box">
            <p class="user-rank">Ranking</p>
            <p class="user-rank">${book.rank}</p>
          </div>
          <div class="author-box">
            <p class="author-book">Author</p>
            <p class="author-book">${book.author}</p>
          </div>
        </div>
      </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("There's something wrong with the fiction section.");
  }
};
sectionFiction();

const sectionNonfiction = async function () {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/combined-print-and-e-book-nonfiction.json?api-key=${key}`
    );
    const data = await response.json();
    const books = data.results.books;
    books.forEach((book) => {
      DOMSelectors.sectionNonfiction.insertAdjacentHTML(
        "beforeend",
        `<div class="book-card">
        <div class="book-card-front">
          <img
            src= ${book.book_image}
            alt=""
            class="cover"
          />
        </div>
        <div class="book-card-back">
          <h3 class="book-card-header">${book.title}</h3>
          <div class="rank-box">
            <p class="user-rank">Ranking</p>
            <p class="user-rank">${book.rank}</p>
          </div>
          <div class="author-box">
            <p class="author-book">Author</p>
            <p class="author-book">${book.author}</p>
          </div>
        </div>
      </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("There's something wrong with the nonfiction section.");
  }
};
sectionNonfiction();

const sectionYoungAdult = async function () {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/young-adult.json?api-key=${key}`
    );
    const data = await response.json();
    const books = data.results.books;
    books.forEach((book) => {
      DOMSelectors.sectionYoungAdult.insertAdjacentHTML(
        "beforeend",
        `<div class="book-card">
        <div class="book-card-front">
          <img
            src= ${book.book_image}
            alt=""
            class="cover"
          />
        </div>
        <div class="book-card-back">
          <h3 class="book-card-header">${book.title}</h3>
          <div class="rank-box">
            <p class="user-rank">Ranking</p>
            <p class="user-rank">${book.rank}</p>
          </div>
          <div class="author-box">
            <p class="author-book">Author</p>
            <p class="author-book">${book.author}</p>
          </div>
        </div>
      </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("There's something wrong with the young adult section.");
  }
};
sectionYoungAdult();

const sectionChildren = async function () {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/picture-books.json?api-key=${key}`
    );
    const data = await response.json();
    const books = data.results.books;
    books.forEach((book) => {
      DOMSelectors.sectionChildren.insertAdjacentHTML(
        "beforeend",
        `<div class="book-card">
        <div class="book-card-front">
          <img
            src= ${book.book_image}
            alt=""
            class="cover"
          />
        </div>
        <div class="book-card-back">
          <h3 class="book-card-header">${book.title}</h3>
          <div class="rank-box">
            <p class="user-rank">Ranking</p>
            <p class="user-rank">${book.rank}</p>
          </div>
          <div class="author-box">
            <p class="author-book">Author</p>
            <p class="author-book">${book.author}</p>
          </div>
        </div>
      </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("There's something wrong with the children section.");
  }
};
sectionChildren();

const sectionManga = async function () {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/manga.json?api-key=${key}`
    );
    const data = await response.json();
    const books = data.results.books;
    books.forEach((book) => {
      DOMSelectors.sectionManga.insertAdjacentHTML(
        "beforeend",
        `<div class="book-card">
        <div class="book-card-front">
          <img
            src= ${book.book_image}
            alt=""
            class="cover"
          />
        </div>
        <div class="book-card-back">
          <h3 class="book-card-header">${book.title}</h3>
          <div class="rank-box">
            <p class="user-rank">Ranking</p>
            <p class="user-rank">${book.rank}</p>
          </div>
          <div class="author-box">
            <p class="author-book">Author</p>
            <p class="author-book">${book.author}</p>
          </div>
        </div>
      </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("There's something wrong with the manga section.");
  }
};
sectionManga();
