import { ScoreModel } from '../../models/score-model';
import { BaseComponent } from '../base-component';
import { ScoreItem } from './score';
import { ScoreList } from './score-list';
import './score-page.scss'


export class ScorePage extends BaseComponent {

  private readonly title: BaseComponent;
  private readonly containerList: BaseComponent;

  constructor() {
    super('div', ['best-score']);
    this.title = new BaseComponent('h3');
    this.containerList = new BaseComponent('ul', ['best-score-list'])

    this.title.element.innerHTML = 'Best players'
    this.element.appendChild(this.title.element)

    this.element.appendChild(this.containerList.element)
    this.fill()
  }

  async fill() {
    this.clearList()
    const res = await fetch('./test-score.json');
    const data: ScoreModel[] = await res.json();
    data.forEach((info) => {
      this.containerList.element.appendChild(new ScoreItem(info).element)
    })
  }

  clearList() {
    this.containerList.element.innerHTML = ''
  }
}
