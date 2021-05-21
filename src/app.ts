import { CardsField } from './components/cards-field/cards-field';
import { Game } from './components/game/game';
import { ImageCategory } from './models/image-category';

export class App {
  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.rootElement.appendChild(this.game.element);
  }

  async start() {
    const res = await fetch('./images.json');
    const data: ImageCategory[] = await res.json();
    const categories = data[0];
    const images = categories.images.map((name) => `${categories.category}/${name}`);
    this.game.startGame(images);
  }
}
