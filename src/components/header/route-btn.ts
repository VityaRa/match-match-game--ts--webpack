import { BaseComponent } from '../base-component';
import './header.scss'

export class RouteButton extends BaseComponent {
  private textField: BaseComponent;
  private icon: BaseComponent;
  private content: BaseComponent;

  constructor(text: string, svg: string, classes: string[], dataAttr: string) {
    super('li');
    this.textField = new BaseComponent('p')
    this.textField.element.innerHTML = text;

    this.icon = new BaseComponent('div', ['icon'])

    this.icon.element.innerHTML = svg;
    this.content = new BaseComponent('div', [...classes])
    this.element.setAttribute('data-ref', dataAttr)
    this.content.element.appendChild(this.icon.element);
    this.content.element.appendChild(this.textField.element)
    this.element.appendChild(this.content.element)


    // this.element.onclick = (e) => {
    //   console.log(this.element.getAttribute('data-ref'));
    // }



  }
}
