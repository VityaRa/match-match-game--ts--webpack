import { ScoreModel } from '../../models/score-model';
import { BaseComponent } from '../base-component';
import { ScoreItem } from './score';

export class ScoreList extends BaseComponent {

  protected scores: ScoreItem[] = []

  constructor() {
    super('ul', ['best-score-list']);
  }

  clear() {
    this.scores = []
  }

}
