import { DOMSelectors } from "./DOM";

const key = "u8BKHxa00AgeWIPATsMKvkhaqugW80M2";

const sectionFiction = async function () {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/trade-fiction-paperback.json?api-key=${key}`
    );
    const data = await response.json();
    const books = data.results.books;
    console.log(data.results.books);
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
          <h3 class="book-card-header">${book.rank} . ${book.title}</h3>
          <div class="description-box">
            <p class="description">Description</p>
            <p class="description">${book.description}</p>
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
        <h3 class="book-card-header">${book.rank} . ${book.title}</h3>
          <div class="description-box">
            <p class="description">Description</p>
            <p class="description">${book.description}</p>
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
        <h3 class="book-card-header">${book.rank} . ${book.title}</h3>
          <div class="description-box">
            <p class="description">Description</p>
            <p class="description">${book.description}</p>
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
        <h3 class="book-card-header">${book.rank} . ${book.title}</h3>
          <div class="description-box">
            <p class="description">Description</p>
            <p class="description">${book.description}</p>
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
        <h3 class="book-card-header">${book.rank} . ${book.title}</h3>
          <div class="description-box">
            <p class="description">Description</p>
            <p class="description">${book.description}</p>
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
