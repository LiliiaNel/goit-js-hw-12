import{a as w,S as x,i as p}from"./assets/vendor-DtRopbQG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const q="49358880-33c4acc352e7c36c64dc2caaa",P="https://pixabay.com/api/",u={params:{key:q,q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:1}};async function f(t,r,s){try{u.params.q=t,u.params.page=r;const a=await w.get(P,u);s(a.data.hits,a.data.totalHits)}catch{s([],1,0)}}function $(){console.log("show error"),p.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",close:!0,position:"topRight",timeout:3e3})}function H(){p.info({title:"",message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",messageLineHeight:"1.5",layout:1,close:!0,position:"topRight",timeout:3e3})}const h=document.querySelector("ul.gallery");function E(t){return t.map(({comments:r,downloads:s,largeImageURL:a,likes:e,webformatURL:o,views:i,tags:b})=>`<li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img class="gallery-image" src="${o}" alt="${b}" />
        </a>
        <ul class="image-text-list">
          <li><span class="img-text">Likes</span> ${e}</a></li>
          <li><span class="img-text">Views</span> ${i}</a></li>
          <li><span class="img-text">Comments</span> ${r}</a></li>
          <li><span class="img-text">Downloads</span> ${s}</a></li>
        </ul>
        </li>`).join("")}let I={captionsData:"alt",captionDelay:250};const O=new x(".gallery a",I);function y(t){h.insertAdjacentHTML("beforeend",E(t)),O.refresh()}function g(){h.innerHTML=""}const L=document.querySelector(".loader");function S(){L.classList.remove("hidden")}function d(){L.classList.add("hidden")}function v(){const t=document.querySelector(".gallery-item");if(!t)return;const s=t.getBoundingClientRect().height*2;window.scrollBy({top:s,behavior:"smooth"}),console.log("scroll")}const C=document.querySelector(".form"),m=document.querySelector("input"),c=document.querySelector(".load-btn");let n,l;const D=t=>{t.preventDefault(),n=m.value.trim(),n!==""&&(g(),S(),f(n,1,(r,s)=>{l=1,d(),r.length===0?($(),c.classList.add("hidden")):(g(),y(r),c.classList.remove("hidden"),v()),m.value=""}))};C.addEventListener("submit",D);const M=t=>{t.preventDefault(),l+=1,S(),f(n,l,(r,s)=>{const a=Math.ceil(s/15);l>a?(c.classList.add("hidden"),d(),H()):(d(),y(r),v())})};c.addEventListener("click",M);
//# sourceMappingURL=index.js.map
