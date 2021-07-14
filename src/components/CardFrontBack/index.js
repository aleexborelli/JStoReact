import './style.css'
import CardGame from '../CardGame/index';

function CardFrontBack() {
  return /*html*/`
    <article class="card-front-back">
      ${CardGame()}
      ${CardGame("logo-javascript", "Logo do Javascript")}
    </article>  
  `;
}

export default CardFrontBack;