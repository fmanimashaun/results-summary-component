import './assets/scss/main.scss'
import data from './data.json';

const resultsContainer = document.querySelector('.card__summary-results') as HTMLElement;

data.forEach(({ category, score, icon }) => {
    // Construct the HTML structure using template literals
    const listItemHTML = `
      <li class="card__summary-result ${category.toLowerCase()}">
        <div class="card__summary-result-title">
          <img class="card__summary-result-icon" src="${icon}" aria-hidden="true" alt="icon">
          <h3 class="card__summary-result-name">${category}</h3>
        </div>
        <p class="card__summary-result-value"><span>${score}</span> / 100</p>
      </li>
    `;
  
    // Append the generated HTML to the parent container
    resultsContainer.innerHTML += listItemHTML;
  });