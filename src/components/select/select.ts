import { BaseComponent } from "../base-component";
import './select.scss'


export class Select extends BaseComponent{
  public currentSetting: string = ''
  private header: BaseComponent
  public select: BaseComponent
  constructor(title: string, placeHolder: string, options: string[]) {
    super('div', ['settings__select']);

    this.header = new BaseComponent('h3')
    this.header.element.innerHTML = `${title}`

    this.select = new BaseComponent('select')
    options.forEach(elem => {
      let option = new BaseComponent('option')
      option.element.innerHTML = elem
      this.select.element.appendChild(option.element)
    })
    this.element.appendChild(this.header.element)
    this.element.appendChild(this.select.element)

    this.currentSetting = (<HTMLSelectElement>(this.select.element)).value

    this.select.element.addEventListener('change', () => {
      this.currentSetting = (<HTMLSelectElement>(this.select.element)).value
    })

  }

}
