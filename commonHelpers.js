(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=document.querySelector(".burger-btn"),u=document.querySelector(".btn-close-header-menu"),n=document.querySelector(".header-menu-section"),d=document.querySelectorAll("#about-link, #yachts-link, #reviews-link");l.addEventListener("click",()=>{n.classList.add("is-open")});u.addEventListener("click",()=>{n.classList.remove("is-open")});d.forEach(s=>{s.addEventListener("click",()=>{n.classList.remove("is-open")})});
//# sourceMappingURL=commonHelpers.js.map
