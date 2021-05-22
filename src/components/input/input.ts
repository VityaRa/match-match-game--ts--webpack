import { BaseComponent } from '../base-component';
import './input.scss'
import {MDCTextField} from '@material/textfield';

export class Input extends BaseComponent{
  //public textField;

  constructor() {
    super('div', ['register-player']);
  }
}
