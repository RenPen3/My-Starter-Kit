import { cards } from "/js/cards.js";
// const { image, alt, heading, body, cta } = cards;

const displayCard = cards
  .map(function (card) {
    return `
        <div class="cards-content__box cards-content__box--1">
          <img src="${card.image}" alt="${card.alt}" />
          <div class="cards-title">${card.heading}</div>
          <div class="cards-text">${card.body}</div>
          <a class="cards-btn" href="#">${card.cta}</a>
        </div>`;
  })
  .join("");

document.querySelector(".cards-content").innerHTML = displayCard;
