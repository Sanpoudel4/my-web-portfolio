(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const a=document.getElementById("theme-toggle"),d=document.getElementById("theme-toggle-mobile"),o=document.documentElement;localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?o.classList.add("dark"):o.classList.remove("dark");i();a.addEventListener("click",()=>{o.classList.toggle("dark"),localStorage.theme=o.classList.contains("dark")?"dark":"light",i()});d.addEventListener("click",()=>{o.classList.toggle("dark"),localStorage.theme=o.classList.contains("dark")?"dark":"light",i()});function i(){const s=o.classList.contains("dark")?`
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 inline-block text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 3v1m0 16v1m8.66-9h1M3.34 12h1m15.364-6.364l.707.707M4.929 19.071l.707.707M19.071 19.071l.707-.707M4.929 4.929l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
      <span class="ml-2">Light Mode</span>
    `:`
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 inline-block text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
      <span class="ml-2">Dark Mode</span>
    `;a.innerHTML=s,d.innerHTML=s}const n=document.getElementById("backToTop");window.addEventListener("scroll",()=>{window.scrollY>200?(n.classList.remove("hidden"),n.classList.add("flex")):(n.classList.add("hidden"),n.classList.remove("flex"))});n.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});document.getElementById("year").textContent=new Date().getFullYear();
