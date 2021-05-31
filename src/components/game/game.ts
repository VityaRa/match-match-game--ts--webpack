import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import { delay } from '../shared/delay';
import { Timer } from '../timer/timer';
import { SHOW_TIME, FLIP_DELAY } from '../shared/constants'
import { Popup } from '../popup/popup';


type ImageURL = string;

export class Game extends BaseComponent {
  private readonly cardsField = new CardsField();

  private activeCard?: Card;

  private timer: Timer;

  private isAnimation = false;

  private counter: number = 4

  constructor() {
    super('div', ['game-content']);
    this.cardsField = new CardsField();
    this.timer = new Timer();

    this.element.appendChild(this.timer.element);
    this.element.appendChild(this.cardsField.element);
  }

  getSize(cardCount: number): string {
    if (cardCount === 8) return 'card-size-4'
    else return 'card-size-6'
  }

  startGame(images: ImageURL[], cardCount: number): void {
    this.counter = cardCount * 2
    setTimeout(() => {
      this.timer.start()
    }, SHOW_TIME * 1000)

    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url, this.getSize(cardCount)))
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
      this.activeCard.element.classList.toggle('red')
      card.element.classList.toggle('red')
      await delay(FLIP_DELAY * 1000);
      this.activeCard.element.classList.toggle('red')
      card.element.classList.toggle('red')
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    } else {
      this.counter -= 2
      if (!this.counter) {
        this.finishGame()
      }
    }
    this.activeCard = undefined;
    this.isAnimation = false;
  }

  finishGame() {
    let popup = new Popup('Congratz')
    this.element.parentElement?.parentElement?.parentElement?.appendChild(popup.element);

    let event = new Event('GameFinished', {bubbles: true});
    popup.element.dispatchEvent(event)
  }
}
