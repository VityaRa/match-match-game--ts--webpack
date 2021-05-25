import { ScoreModel } from '../../models/score-model';
import { BaseComponent } from '../base-component';
import { ScoreItem } from './score';
import { ScoreList } from './score-list';

export class ScorePage extends BaseComponent {

  private readonly title: BaseComponent;
  private readonly list: ScoreList;

  constructor() {
    super('div', ['best-score']);
    this.title = new BaseComponent('h3');
    this.title.element.innerHTML = 'Best players'
    this.element.appendChild(this.title.element)
    this.list = new ScoreList();
    this.element.appendChild(this.list.element)
    this.fill()
  }

  async fill() {
    const res = await fetch('./test-score.json');
    const data: ScoreModel[] = await res.json();
    data.forEach((info) => {
      this.list.element.appendChild(new ScoreItem(info).element)
    })
  }


}
