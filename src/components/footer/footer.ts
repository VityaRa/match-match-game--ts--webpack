import { BaseComponent } from "../base-component";
import './footer.scss'

export class Footer extends BaseComponent {
  constructor() {
    super('footer')
    this.element.innerHTML = 'RSSchool 2021 Q1';
  }
}
