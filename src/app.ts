import { AboutPage } from './components/about/about';
import { BaseComponent } from './components/base-component';
import { Game } from './components/game/game';
import { Header } from './components/header/header';
import { Content } from './components/content/content';
import { ImageCategory } from './models/image-category';
import { ScorePage } from './components/score/score-page';
import { ScoreModel } from './models/score-model';
import { Router } from './components/router/router';
import { SettingsPage } from './components/setting/setting';

export interface IState {
  currentPath: string,
  isLogin: boolean,
}

export class App {

  public appState: IState = {
    currentPath: 'about',
    isLogin: false
  };


  private readonly header: Header;

  private readonly pageContent: Content;

  private readonly pageAbout: AboutPage;

  private readonly pageScore: ScorePage;

  private readonly pageSettings: SettingsPage;

  private readonly pageGame: Game;

  private readonly btns: NodeListOf<Element>;


  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.rootElement.appendChild(this.header.element);



    this.pageContent = new Content();
    this.rootElement.appendChild(this.pageContent.element);

    this.pageAbout = new AboutPage();
    this.pageScore = new ScorePage();
    this.pageSettings = new SettingsPage();
    this.pageGame = new Game();
    this.pageContent.contentField.element.appendChild(this.pageGame.element);
    this.start()


    this.btns = document.querySelectorAll('.buttons-list li');
    this.btns.forEach(btn => btn.addEventListener('click', () => {
      let value = btn.getAttribute('data-ref');
      if (!value) value = ''
      if (this.appState.currentPath !== value) this.render(value);
    }))
  }


  async start(): Promise<void> {
    const res = await fetch('./images.json');
    const data: ImageCategory[] = await res.json();
    const categories = data[0];
    const images = categories.images.map(
      (name) => `${categories.category}/${name}`
    );
    this.pageGame.startGame(images);
  }

  render(path: string): void {
    let nodeToDelete = this.pageContent.contentField.element.lastChild
    if (nodeToDelete) {
      this.pageContent.contentField.element.removeChild(nodeToDelete);
    }
    this.pageContent.contentField.element.appendChild(this.getPage(path)?.element);
    this.appState.currentPath = path


  }

  getPage(path: string): AboutPage | ScorePage | SettingsPage{
    if (path === 'about') return new AboutPage();
    if (path === 'best') return new ScorePage();
    return new SettingsPage();
  }

  clearPage():void {

  }
}
