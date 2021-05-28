import { BaseComponent } from "../base-component";
import './timer.scss'
const SECOND_DELAY = 1000;


export class Timer extends BaseComponent {
  public time: number

  private timerID: NodeJS.Timeout

  constructor() {
    super('div', ['timer-container']);
    this.time = 0;
    this.element.innerHTML = this.getTime(this.time);
    this.timerID = setInterval(() => {}, 0)
  }


  start() {
    this.clear()
    this.timerID = setInterval(() => {
      this.time++;
      this.element.innerHTML = this.getTime(this.time);
    }, SECOND_DELAY)

  }


  clear() {
    clearInterval(this.timerID)
    this.time = 0;
  }



  getTime(time: number): string {
    let minutes = 0;
    let seconds = 0;
    if (time <= 59) return `00:${this.renderFormat(time)}`
    else {
      minutes = Math.floor(time / 60);
      return `${this.renderFormat(minutes)}:${this.renderFormat(time - minutes * 60)}`
    }
  }

  renderFormat(seconds: number): string {
    return seconds < 10 ? `0${seconds}` : `${seconds}`
  }

}
