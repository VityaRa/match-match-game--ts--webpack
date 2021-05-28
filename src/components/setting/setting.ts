import { BaseComponent } from "../base-component";
import { Select } from "../select/select";
import './setting.scss'

export const settings = [
  {
    title: 'Game cards',
    placeHolder: 'select game cards type',
    options: [
      'animals',
      'cars',
    ]
  },
  {
    title: 'Difficulty',
    placeHolder: 'select game type',
    options: [
      '4x4',
      '6x6',
      '8x8',
    ]
  }
]

export class SettingsPage extends BaseComponent{
  constructor() {
    super('div', ['settings']);
    settings.forEach(option => {
      this.element.appendChild(new Select(option.title, option.placeHolder, option.options).element)
    })
  }
}
