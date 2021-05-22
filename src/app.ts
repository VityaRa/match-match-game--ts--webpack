import { BaseComponent } from './components/base-component';
import { Game } from './components/game/game';
import { Header } from './components/header/header';
import { ImageCategory } from './models/image-category';

export class App {
  private readonly game: Game;

  private readonly header: Header;

  private readonly pageContent: BaseComponent;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.rootElement.appendChild(this.header.element);
    this.pageContent = new BaseComponent('div', ['content']);
    this.rootElement.appendChild(this.pageContent.element);

    this.game = new Game()
  }

  async start(): Promise<void> {
    const res = await fetch('./images.json');
    const data: ImageCategory[] = await res.json();
    const categories = data[0];
    const images = categories.images.map(
      (name) => `${categories.category}/${name}`,
    );
    this.game.startGame(images);
  }

  render(): void {
    console.log(this.game);
  }
}
