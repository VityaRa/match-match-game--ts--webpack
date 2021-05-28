import { BaseComponent } from "../base-component";



export class Select extends BaseComponent{
  constructor(title: string, placeHolder: string, options: string[]) {
    super('div', ['settigns__select']);
    this.element.innerHTML = `
      <h3>${title}</h3>
      <select>
      ${options.map((option) => {
        return `<option>` + option +`</option>`;
      })}
      </select>
    `
  }
}
