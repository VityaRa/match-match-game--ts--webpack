import { BaseComponent } from '../base-component';
import { RouteButton } from './route-btn';

export class ActionButton extends BaseComponent {
  private text: string;

  constructor(text: string = 'Register') {
    super('button');
    this.text = text;
    this.element.textContent = this.text;
  }

  makeAction(): void {

  }
}
