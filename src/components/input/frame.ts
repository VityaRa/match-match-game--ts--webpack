import { BaseComponent } from '../base-component';
import './frame.scss';
import { MDCTextField } from '@material/textfield';

export class Frame extends BaseComponent {
  public textFieldTitle: string;

  constructor(textFieldTitle: string, settings: Object) {
    super('div', ['mdc-text-field', 'mdc-text-field--filled']);
    this.textFieldTitle = textFieldTitle;
    this.element.innerHTML = `
      <label class="mdc-text-field mdc-text-field--filled">
        <span class="mdc-text-field__ripple"></span>
        <span class="mdc-floating-label" id="my-label-id">${this.textFieldTitle}</span>
        <input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id">
        <span class="mdc-line-ripple"></span>
      </label>`;
  }


}
