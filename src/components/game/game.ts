import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';

type imageURL = string;

export class Game extends BaseComponent {
  private readonly cardsField = new CardsField();

  constructor() {
    super()
    this.cardsField = new CardsField()
    this.element.appendChild(this.cardsField.element)
  }

  startGame(images: imageURL[]): void {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach(card => card.element.addEventListener('click', () => this.cardHandler(card)))

    this.cardsField.addCards(cards);
  }

  private cardHandler(card: Card): void {

  }
}
