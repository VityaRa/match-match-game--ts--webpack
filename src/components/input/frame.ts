import { BaseComponent } from '../base-component';
import './frame.scss';

export class Frame extends BaseComponent {
  public isCorrect: boolean;
  public id: number;
  private label: BaseComponent;
  public text: string

  constructor(hint: string, type: string, id: number) {
    super('div', ['frame-field']);
    this.isCorrect = false;
    this.id = id;
    this.text = ''
    this.label = new BaseComponent('label', [
      'mdc-text-field',
      'mdc-text-field--filled',
    ]);
    this.label.element.innerHTML = `
    <span class="mdc-text-field__ripple"></span>
    <span class="mdc-floating-label" id="my-label-id">${hint}</span>
    <input class="mdc-text-field__input" type="${type}" data-id="${this.id.toString()}" aria-labelledby="my-label-id">
    <span class="mdc-line-ripple"></span>
    `;

    this.element.appendChild(this.label.element);

    this.element.onkeyup = () => {
      this.addWrongStyles();
    };
  }

  checkText(text: string) {
    if (text.length >= 4 && text.length <= 10) {
      this.isCorrect = true;
    }
  }

  addWrongStyles() {
    let text = (<HTMLInputElement>(
      document.querySelector(`[data-id="${this.id}"]`)
    ))?.value;
    this.text = text
    this.checkText(this.text);
    if (!this.isCorrect) {
      this.label.element.classList.add('wrong-frame');
    } else {
      this.label.element.classList.remove('wrong-frame');
    }
  }
}
