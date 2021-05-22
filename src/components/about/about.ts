import { BaseComponent } from '../base-component';
import { Input } from '../input/input';

export class AboutPage extends BaseComponent {
  input: Input;
  constructor() {
    super('div', ['about']);
    this.input = new Input();
    this.element.appendChild(this.input.element)
  }
}
