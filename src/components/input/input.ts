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
    settings: 'text',
    id: 1,
  },
  {
    title: 'Last Name',
    settings: 'text',
    id: 2,
  },
  {
    title: 'E-mail',
    settings: 'email',
    id: 3,
  },
]

export class Input extends BaseComponent {
  public frames: Frame[]

  constructor() {
    super('div', ['user-input']);

    this.frames = []

    for(let elem of frameTitles) {
      this.frames.push(new Frame(elem.title, elem.settings, elem.id))
    }
    for(let elem of this.frames) {
      this.element.appendChild(elem.element)
    }
  }
}
