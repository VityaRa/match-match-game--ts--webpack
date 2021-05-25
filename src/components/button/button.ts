import { BaseComponent } from '../base-component';

export class Button extends BaseComponent {

  constructor(text: string, extraClasses: string[] = []) {
    super('button', ['btn']);
    this.element.innerHTML = text

    this.element.classList.add(...extraClasses)
  }
}
