import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "u8BKHxa00AgeWIPATsMKvkhaqugW80M2";

const query = async function () {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`
    );
    const data = await response.json();
    data.results.forEach((book) => {
      DOMSelectors.grid.insertAdjacentHTML("beforeend");
    });
  } catch (error) {
    console.log(error);
    alert("There's something wrong.");
  }
};
query();
