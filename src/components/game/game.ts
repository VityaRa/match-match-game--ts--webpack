import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import { delay } from '../shared/delay';

const FLIP_DELAY = 3;
type ImageURL = string;

export class Game extends BaseComponent {
  private readonly cardsField = new CardsField();

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super();
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
  }

  startGame(images: ImageURL[]): void {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => card.element.addEventListener('click', () => this.cardHandler(card)));

    this.cardsField.addCards(cards);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;
    await card.flipToFront();
    await delay(FLIP_DELAY);

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      // error chosen card logic
      /*

      */
      await delay(FLIP_DELAY * 1000);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    } else {
      // right chosen card logic
      /*

      */
    }
    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
