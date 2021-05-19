import { BaseComponent } from '../base-component';
import './card.scss';

const FLIP_CLASS = 'flipped';
type imageURL = string;

export class Card extends BaseComponent {
  constructor(readonly image: imageURL) {
    super('div', ['card-container']);

    this.element.innerHTML = `
      <div class="card">
        <div class="card__front" style="background-image: url('./images/${image}');"></div>
        <div class="card__back"></div>
      </div>
    `;
  }

  flipOut(): void {
    this.element.classList.remove(FLIP_CLASS);
  }

  flipTo(): void {
    this.element.classList.add(FLIP_CLASS);
  }
}
