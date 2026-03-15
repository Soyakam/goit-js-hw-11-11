import{S as m,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function f(o){const r="https://pixabay.com/api/",i=new URLSearchParams({key:"54125236-595e0c257ca7120b96734fe1b",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:30}),n=`${r}?${i}`;return fetch(n).then(e=>e.json())}function p(o){const{largeImageURL:r,tags:i,webformatURL:n,likes:e,views:t,comments:s,downloads:d}=o;return`
    <div class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img
        loading="lazy"
        src="${n}" alt="${i}" />
      </a>
      <ul class="img-dscr">
        <li><p><b>Likes:</b> ${e}</p></li>
        <li><p><b>Views:</b> ${t}</p></li>
        <li><p><b>Comments:</b> ${s}</p></li>
        <li><p><b>Downloads:</b> ${d}</p></li>
      </ul>
    </div>
  `}const g=document.querySelector(".form"),c=document.querySelector(".fot");document.querySelector(".btn");const u=document.querySelector(".loader"),h=new m(".fot a",{captionsData:"alt",captionDelay:250});a();g.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();y(),c.innerHTML="",f(r).then(i=>{if(i.hits.length===0){a(),l.error({position:"topRight",title:"Error",message:"Illegal Sorry, there are no images matching your search query. Please try again!"});return}const n=i.hits.map(p).join("");c.insertAdjacentHTML("beforeend",n),h.refresh(),a()}).catch(()=>{a(),l.error({position:"topRight",title:"Error",message:"Something went wrong. Please try again later!"})}),o.target.reset()});function a(){u.classList.add("loaderHidden")}function y(){u.classList.remove("loaderHidden")}
//# sourceMappingURL=index.js.map
