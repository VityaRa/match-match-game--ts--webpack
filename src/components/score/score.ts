import { BaseComponent } from '../base-component';
import {ScoreModel} from '../../models/score-model'


export class ScoreItem extends BaseComponent {
  constructor(info: ScoreModel) {
    super('li');

    this.element.innerHTML = `
    <div class="best-score-item">
      <div class="info">
        <div class="image">

        </div>
        <div class="description">
          <p class="name">${info.firstname} ${info.lastname}</p>
          <p class="email">${info.email}</p>
        </div>
      </div>
      <div class="score">
        <span>Score: <span class="points">${info.points}</span></span>
      </div>
    </div>
    <hr class="line">`
  }
}
