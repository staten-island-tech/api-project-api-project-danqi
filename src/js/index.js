import { DOMSelectors } from "./DOM";
//import { genres } from "./genre";

const key = "u8BKHxa00AgeWIPATsMKvkhaqugW80M2";

const categoryFiction = document.getElementById("category-fiction");
const categoryManga = document.getElementById("category-manga");

//categoryFiction.addEventListener("click", fetchFiction);
//categoryManga.addEventListener("click", fetchManga);

const query = async function () {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/combined-print-and-e-book-fiction.json?api-key=${key}`
    );
    const data = await response.json();
    const books = data.results.books;
    books.forEach((book) => {
      DOMSelectors.grid.insertAdjacentHTML(
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
query();

/*const query = async function () {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/manga.json?api-key=${key}`
    );
    const data = await response.json();
    //console.log(data.results.books);
    const books = data.results.books;
    books.forEach((book) => {
      DOMSelectors.grid.insertAdjacentHTML(
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
query();*/
