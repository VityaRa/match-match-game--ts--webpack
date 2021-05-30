import { BaseComponent } from '../base-component';
import { RouteButton } from './route-btn';
import './header.scss'

type actionState = 'Register User' | 'Start Game' | 'End Game'
interface IStage {
  isLogin: boolean,
  isGame: boolean,
}

export class ActionButton extends BaseComponent {
  public state: actionState = 'Register User';

  constructor() {
    super('button');
    this.element.textContent = this.state;
  }

  makeAction(stage: IStage): void {
    if (!stage.isLogin) return;

  }
}
