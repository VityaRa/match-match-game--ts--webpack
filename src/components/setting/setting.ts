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
  public settings: Select[]

  constructor() {
    super('div', ['settings']);
    this.settings = []

    settings.forEach(setting => {
      this.settings.push(new Select(setting.title, setting.placeHolder, setting.options))
    })

    this.settings.forEach(elem => {
      this.element.appendChild(elem.element)
    })
  }
}
