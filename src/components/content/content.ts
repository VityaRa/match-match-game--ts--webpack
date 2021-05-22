import { BaseComponent } from '../base-component';
import './content.scss';

export class Content extends BaseComponent {
  public contentField: BaseComponent;
  constructor() {
    super('div', ['content']);
    this.contentField = new BaseComponent('div', ['inner']);
    this.element.appendChild(this.contentField.element)
  }
}
