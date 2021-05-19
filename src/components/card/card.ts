import { BaseComponent } from '../base-component';
import './card.scss';

const FLIP_CLASS = 'flipped';
type imageURL = string;

export class Card extends BaseComponent {
  isFlipped:boolean = false

  constructor(readonly image: imageURL) {
    super('div', ['card-container']);

    this.element.innerHTML = `
      <div class="card">
        <div class="card__front" style="background-image: url('./images/${image}');"></div>
        <div class="card__back"></div>
      </div>
    `;
  }

  flipToBack(): Promise<void> {
    this.isFlipped = true
    return this.flip(true)
  }

  flipToFront(): Promise<void> {
    this.isFlipped = false
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
