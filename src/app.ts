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
import { Footer } from './components/footer/footer';
import { Popup } from './components/popup/popup';
import { Input } from './components/input/input';

const activeRouteBtnClass = 'active-btn';

export interface IState {
  currentPath: string;
  stage: {
    isLogin: boolean;
    isGame: boolean;
  };
  gameSettings: {
    cardsCount: string;
    category: string;
  };
}

export class App {
  public appState: IState = {
    currentPath: 'about',
    stage: {
      isLogin: false,
      isGame: false,
    },
    gameSettings: {
      cardsCount: '4',
      category: 'animal',
    },
  };

  private readonly header: Header;

  private readonly pageContent: Content;

  private readonly pageAbout: AboutPage;

  private readonly pageScore: ScorePage;

  private readonly pageSettings: SettingsPage;

  private pageGame: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.pageContent = new Content();
    this.pageAbout = new AboutPage();
    this.pageScore = new ScorePage();
    this.pageSettings = new SettingsPage();
    this.pageGame = new Game();

    this.initApp();
  }

  initApp() {
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.pageContent.element);

    this.render(this.appState.currentPath);
    this.addRouteListeners();
    this.highlightActiveRoute();
    this.getSettingsFromSelect();
    this.addWindowListener();
    this.addActionHandler();
    document.addEventListener('GameFinished', () => {
      this.render('best')
    })
  }

  getSettingsFromSelect() {
    this.appState.gameSettings.cardsCount =
      this.pageSettings.settings[1].currentSetting;
    this.appState.gameSettings.category =
      this.pageSettings.settings[0].currentSetting;
  }

  addWindowListener() {
    window.addEventListener('change', (e) => {
      this.getSettingsFromSelect();
    });

    window.addEventListener('click', (e) => {
      let elem = <HTMLElement>e.target
      if (elem.getAttribute('data-register') === 'done') {
        this.appState.stage.isLogin = true

        this.header.actionBtnContainer.element.children[0].innerHTML = 'Start Game'

      }
    });
  }

  addRouteListeners() {
    let btns = document.querySelectorAll('.buttons-list li');

    btns.forEach((btn) =>
      btn.addEventListener('click', () => {
        if (!btn.classList.contains(activeRouteBtnClass)) {
          this.removePrevHighlighted();
          btn.classList.add(activeRouteBtnClass);
        }
        let value = btn.getAttribute('data-ref');
        if (!value) value = '';

        if (this.appState.currentPath !== value) this.render(value);
      })
    );
  }

  highlightActiveRoute() {
    document
      .querySelector(`[data-ref=${this.appState.currentPath}]`)
      ?.classList.add(activeRouteBtnClass);
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

  removePrevHighlighted(): void {
    document
      .querySelectorAll(`[data-ref=${this.appState.currentPath}]`)
      .forEach((btn) => btn.classList.remove(activeRouteBtnClass));
  }

  render(path: string): void {
    let nodeToDelete = this.pageContent.contentField.element.lastChild;
    if (nodeToDelete) {
      this.pageContent.contentField.element.removeChild(nodeToDelete);
    }
    this.changeBackForSettingsPage(path === 'settings');
    this.pageContent.contentField.element.appendChild(
      this.getPage(path)?.element
    );
    this.appState.currentPath = path;
  }

  changeBackForSettingsPage(isSettings: boolean) {
    if (isSettings)
      document.querySelector('.inner')?.classList.add('remove-back');
    else document.querySelector('.inner')?.classList.remove('remove-back');
  }

  getPage(path: string): AboutPage | ScorePage | SettingsPage | Game {
    if (path === 'about') return this.pageAbout;
    if (path === 'best') {
      this.pageScore.fill()
      return this.pageScore;
    }
    if (path === 'game') return this.pageGame
    return this.pageSettings;
  }

  addActionHandler() {
    document
      .querySelector('.register-btn button')
      ?.addEventListener('click', () => {
        this.actionButtonEvent();
      });
  }

  //showPopup()

  actionButtonEvent() {
    if (!this.appState.stage.isLogin) {
      const pop = new Popup('Register', new Input());
      this.rootElement.appendChild(pop.element);
    } else if (!this.appState.stage.isGame) {
      this.pageGame = new Game()
      this.start()
      this.render('game')
      this.appState.stage.isGame = true;
    } else alert('hey');
  }
}
