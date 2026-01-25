import{i as a}from"./assets/vendor-I1I71QQ2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function l(t){const o="https://pixabay.com/api/",s=new URLSearchParams({key:"54125236-595e0c257ca7120b96734fe1b",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${o}?${s}`;return fetch(i).then(e=>e.json())}function c(t){return`

    <div class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <ul class="img-dscr">
        <li><p><b>Likes:</b> ${t.likes}</p></li>
        <li><p><b>Views:</b> ${t.views}</p></li>
        <li><p><b>Comments:</b> ${t.comments}</p></li>
        <li><p><b>Downloads:</b> ${t.downloads}</p></li>
      </ul>
    </div>
  `}const u=document.querySelector(".form"),m=document.querySelector(".fot");u.addEventListener("submit",t=>{t.preventDefault();const o=t.target.elements["search-text"].value.trim();l(o).then(s=>{if(s.hits.length===0){a.error({position:"topRight",title:"Error",message:"Illegal Sorry, there are no images matching your search query. Please try again!"});return}const i=s.hits.map(c).join("");m.insertAdjacentHTML("beforeend",i)}).catch(()=>{a.error({position:"topRight",title:"Error",message:"Something went wrong. Please try again later!"})}),t.target.reset()});
//# sourceMappingURL=index.js.map
