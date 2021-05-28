import { BaseComponent } from '../base-component';
import { RouteButton } from '../header/route-btn';
import { Frame } from '../input/frame';
import './about.scss';
import { buttons } from '../header/button-list';
import { Input } from '../input/input';


export class AboutPage extends BaseComponent {
  private readonly leftContainer: BaseComponent;
  private readonly rightContainer: BaseComponent;
  constructor() {
    super('div', ['about']);
    this.leftContainer = new BaseComponent('div', ['left-side-container']);
    this.leftContainer.element.innerHTML = `
    <h2>How to play?</h2>
    <ul>
      <li>
        <div class="card-content">
          <p class="card-number">1</p>
          <p class="card-text">Register new player in game</p>
        </div>
      </li>
      <li>
        <div class="card-content">
          <p class="card-number">2</p>
          <p class="card-text">Configure your game settings</p>
        </div>
      </li>
      <li>
        <div class="card-content">
          <p class="card-number">3</p>
          <p class="card-text">Start you new game! Remember card positions and match it before times up.</p>
        </div>
      </li>
    </ul>
    `;
    this.rightContainer = new BaseComponent('div', ['right-side-container']);
    this.rightContainer.element.innerHTML = `
    <div class="user-container">
    </div>
    <div class="btn-container">
    </div>
    <div class="cards-preview-container">
    </div>
    `
    this.element.appendChild(this.leftContainer.element);
    this.element.appendChild(this.rightContainer.element);

  }
}
