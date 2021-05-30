import { BaseComponent } from '../base-component';
import { Input } from '../input/input';
import './popup.scss';

export class Popup extends BaseComponent {
  public innerPopup: BaseComponent;
  private btnConfirm: BaseComponent = new BaseComponent('button');
  public inputFields: Input = new Input();

  constructor(title: string, fields?: Input) {
    super('div', ['popup-container']);
    this.innerPopup = new BaseComponent('div', ['popup-inner']);

    let titleElem = new BaseComponent('h3', ['popup-title']);
    titleElem.element.innerHTML = title;

    this.innerPopup.element.appendChild(titleElem.element);

    if (fields) {
      this.inputFields = fields;
      this.innerPopup.element.appendChild(fields.element);
      this.element.appendChild(this.innerPopup.element);
      this.btnConfirm = new BaseComponent('button', [
        'popup-btn',
        'popup-btn-confirm',
      ]);

      this.btnConfirm.element.innerHTML = 'Add user';
      this.btnConfirm.element.setAttribute('data-register', 'done');
      let btnDisline = new BaseComponent('button', [
        'popup-btn',
        'popup-btn-disline',
      ]);
      btnDisline.element.innerHTML = 'cancel';

      let btnContainer = new BaseComponent('div', ['popup-btns']);
      btnContainer.element.appendChild(this.btnConfirm.element);
      btnContainer.element.appendChild(btnDisline.element);
      this.innerPopup.element.appendChild(btnContainer.element);

      btnDisline.element.onclick = () => {
        this.removeBase();
      };

      this.btnConfirm.element.onclick = () => {
        alert('Success!');
        this.removeBase();
      };
    } else {
      let btn = new BaseComponent('button', ['popup-btn-confirm'])
      btn.element.innerHTML = 'OK'
      btn.element.onclick = () => this.removeBase()
      this.innerPopup.element.appendChild(btn.element);
      this.element.appendChild(this.innerPopup.element);

    }





  }

  checkInputs() {
    if (this.inputFields.frames.every((element) => element.isCorrect))
      this.btnConfirm.element.removeAttribute('disabled');
    else this.btnConfirm.element.setAttribute('disabled', '');
  }
}
