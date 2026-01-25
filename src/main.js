import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

import { getPhoto } from "./js/pixabay-api.js"
import { renderEl } from "./js/render-functions.js"

const btn = document.querySelector(".form")
const gallery = document.querySelector(".fot");

btn.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = e.target.elements["search-text"].value.trim();
  getPhoto(query).then(data => {
    if (data.hits.length === 0) {
      iziToast.error({
  position: 'topRight',
    title: 'Error',
    message: 'Illegal Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
    const markup = data.hits.map(renderEl).join("");
    gallery.insertAdjacentHTML('beforeend', markup);
  }).catch(() => {
      iziToast.error({
        position: "topRight",
        title: "Error",
        message: "Something went wrong. Please try again later!",
      });
    });

  e.target.reset();//очищає форму

})
