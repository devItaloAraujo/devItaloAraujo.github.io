import cards from '../../assets/cards';
import Card from '../Card';
import './BoxOfCards.css';

const ArrayOfCards = cards;

function BoxOfCards() {
  return (
    <article>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

      { ArrayOfCards.map((card) => <Card key={ card.id } dataOfCard={ card } />) }
    </article>
  );
}

export default BoxOfCards;
