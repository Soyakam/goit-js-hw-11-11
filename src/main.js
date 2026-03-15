import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getPhoto } from "./js/pixabay-api.js"
import { renderEl } from "./js/render-functions.js"



const btn = document.querySelector(".form")
const gallery = document.querySelector(".fot");
const loadMoreBtn = document.querySelector(".btn");
const loader = document.querySelector(".loader");


const lightbox = new SimpleLightbox(".fot a", {
  captionsData: "alt",
  captionDelay: 250,
});
hideLoader();
btn.addEventListener("submit", (e) => {
  e.preventDefault();



  const query = e.target.elements["search-text"].value.trim();
  showLoader();
  gallery.innerHTML = "";

  getPhoto(query).then(data => {

    if (data.hits.length === 0) {
      hideLoader();
      iziToast.error({
  position: 'topRight',
    title: 'Error',
    message: 'Illegal Sorry, there are no images matching your search query. Please try again!',
      });
      return;

    }


    const markup = data.hits.map(renderEl).join("");




    gallery.insertAdjacentHTML('beforeend', markup);

 lightbox.refresh();
hideLoader();
  }).catch(() => {
hideLoader();
      iziToast.error({
        position: "topRight",
        title: "Error",
        message: "Something went wrong. Please try again later!",
      });

  });

// showLoadMore();
  e.target.reset();//очищає форму

})

// function clearGallery() {

// };
// function showLoadMore() {
//   loadMoreBtn.classList.remove("hidden")

// };

// function hideLoadMore(){
// loadMoreBtn.classList.add("hidden")
// };



function hideLoader(){
  loader.classList.add("loaderHidden");
};


function showLoader() {
  loader.classList.remove("loaderHidden");

};

