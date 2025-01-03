(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const a=[{category:"Reaction",score:80,icon:"./assets/images/icon-reaction.svg"},{category:"Memory",score:92,icon:"./assets/images/icon-memory.svg"},{category:"Verbal",score:61,icon:"./assets/images/icon-verbal.svg"},{category:"Visual",score:72,icon:"./assets/images/icon-visual.svg"}],n=document.querySelector(".card__summary-results");a.forEach(({category:o,score:s,icon:c})=>{const t=`
      <li class="card__summary-result ${o.toLowerCase()}">
        <div class="card__summary-result-title">
          <img class="card__summary-result-icon" src="${c}" aria-hidden="true" alt="icon">
          <h3 class="card__summary-result-name">${o}</h3>
        </div>
        <p class="card__summary-result-value"><span>${s}</span> / 100</p>
      </li>
    `;n.innerHTML+=t});
