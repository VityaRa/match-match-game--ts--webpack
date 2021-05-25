import { BaseComponent } from '../base-component';
import { Button } from '../button/button';
import { Frame } from './frame';

export const settingsForInputs = {
  firstName: {
    maxSymbols: 20,
  },
  lastName: {
    maxSymbols: 20,
  },
  email: {
    maxSymbols: 20,
    include: '@',
  }
}

export const frameTitles = [
  {
    title: 'First Name',
    settings: settingsForInputs.firstName,
  },
  {
    title: 'Last Name',
    settings: settingsForInputs.lastName,
  },
  {
    title: 'E-mail',
    settings: settingsForInputs.email,
  },
]

export class Input extends BaseComponent {


  constructor() {
    super('div', ['frame']);
    for(let elem of frameTitles) {
      this.element.appendChild(new Frame(`${elem.title}`, elem.settings).element)
    }
    this.element.appendChild(new Button('add user').element)
    this.element.appendChild(new Button('cancel').element)
  }
}
