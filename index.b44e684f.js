(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),n=()=>{const t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",n),t.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),window.addEventListener("DOMContentLoaded",(e=>{const o=document.querySelector("#mobile-menu"),t=o.querySelectorAll("a"),n=document.querySelector("body");t.forEach((e=>{e.onclick=e=>{o.classList.contains("is-open")&&o.classList.remove("is-open"),"hidden"==n.style.overflow&&(n.style.overflow="")}}))}));
//# sourceMappingURL=index.b44e684f.js.map
