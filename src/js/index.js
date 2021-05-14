import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "u8BKHxa00AgeWIPATsMKvkhaqugW80M2";

const query = async function () {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=${key}`
    );
    const data = await response.json();
    data.results.forEach((book) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="book-card">
        <div class="book-card-front">
          <img
            src="https://image.tmdb.org/t/p/w300/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"
            alt=""
            class="poster"
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

          <div class="book-genres">
            <li class="book-genre">Sci-Fi</li>
            <li class="book-genre">Fantasy</li>
            <li class="book-genre">Horror</li>
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
