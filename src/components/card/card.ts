import { BaseComponent } from '../base-component';
import './card.scss';

type imageURL = string;

export class Card extends BaseComponent {
  constructor(image: imageURL) {
    super('div', ['card-container']);

    this.element.innerHTML = `
    <div class="card">
      <div class="card__front" style="background-image: url('./images/${image}');"></div>
      <div class="card__back"></div>
    </div>
    `;
  }
}
