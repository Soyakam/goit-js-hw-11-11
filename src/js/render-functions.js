export function renderEl(picture) {
  return `

    <div class="gallery-item">
      <a class="gallery-link" href="${picture.largeImageURL}">
        <img src="${picture.webformatURL}" alt="${picture.tags}" />
      </a>
      <ul class="img-dscr">
        <li><p><b>Likes:</b> ${picture.likes}</p></li>
        <li><p><b>Views:</b> ${picture.views}</p></li>
        <li><p><b>Comments:</b> ${picture.comments}</p></li>
        <li><p><b>Downloads:</b> ${picture.downloads}</p></li>
      </ul>
    </div>
  `;
}