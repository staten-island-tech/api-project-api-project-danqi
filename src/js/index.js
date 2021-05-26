import { DOMSelectors } from "./DOM";
//import { genres } from "./genre";

const key = "u8BKHxa00AgeWIPATsMKvkhaqugW80M2";

const buttonFiction = document.getElementById("btn-fiction");
const buttonManga = document.getElementById("btn-manga");

const rankingsFiction = document.getElementById("section-fiction");
const rankingsManga = document.getElementById("section-manga");

buttonFiction.addEventListener("click", showFiction);
buttonManga.addEventListener("click", showManga);

function showFiction() {
  rankingsFiction.classList.remove("hide");
  rankingsManga.classList.add("hide");
}
function showManga() {
  rankingsManga.classList.remove("hide");
  rankingsFiction.classList.add("hide");
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
    alert("There's something wrong.");
  }
};
sectionFiction();

const sectionManga = async function () {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/manga.json?api-key=${key}`
    );
    const data = await response.json();
    //console.log(data.results.books);
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
    alert("There's something wrong.");
  }
};
sectionManga();

/*function showFiction() {
      visibility.classList.remove("hide");
    }*/
