import { BaseComponent } from '../base-component';
import './card.scss';

const FLIP_CLASS = 'flipped';
type ImageURL = string;

export class Card extends BaseComponent {
  isFlipped = false;

  constructor(readonly image: ImageURL, extraClass: string) {
    super('div', ['card-container', extraClass]);

    this.element.innerHTML = `
      <div class="game-card ${extraClass}">
        <div class="game-card__front" style="background-image: url('./images/${image}');"></div>
        <div class="game-card__back"></div>
      </div>
    `;
  }


  flipToBack(): Promise<void> {
    this.isFlipped = true;
    return this.flip(true);
  }

  flipToFront(): Promise<void> {
    this.isFlipped = false;
    return this.flip(false);
  }

  private flip(isFront: boolean): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }
}
