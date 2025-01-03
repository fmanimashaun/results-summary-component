(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const a=[{category:"Reaction",score:80,icon:"./assets/images/icon-reaction.svg"},{category:"Memory",score:92,icon:"./assets/images/icon-memory.svg"},{category:"Verbal",score:61,icon:"./assets/images/icon-verbal.svg"},{category:"Visual",score:72,icon:"./assets/images/icon-visual.svg"}],l=document.querySelector(".card__summary-results"),u=document.querySelector(".card__result-score-value");let n="";a.forEach(({category:t,score:s,icon:o})=>{n+=`
    <li class="card__summary-result ${t.toLowerCase()}">
      <div class="card__summary-result-title">
        <img class="card__summary-result-icon" src="${o}" aria-hidden="true" alt="icon">
        <h3 class="card__summary-result-name">${t}</h3>
      </div>
      <p class="card__summary-result-value"><span>${s}</span> / 100</p>
    </li>
  `});l.innerHTML=n;const d=a.reduce((t,{score:s})=>t+s,0),m=Math.round(d/a.length);u.innerText=`${m}`;
