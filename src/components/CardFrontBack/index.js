import './style.css'
import CardGame from '../CardGame/index';

function CardFrontBack() {
  return /*html*/`
    <article class="card-front-back">
      <div class="card -front">
        ${CardGame()}
      </div>
      <div class="card -back">
        ${CardGame("logo-javascript", "Logo do Javascript")}
      </div>
    </article>  
  `;
}

export default CardFrontBack;