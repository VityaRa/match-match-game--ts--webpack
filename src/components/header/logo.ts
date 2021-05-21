import { BaseComponent } from '../base-component';

export class Logo extends BaseComponent {
  private readonly logo: HTMLElement;

  constructor() {
    super('div', ['logo-container']);
    this.logo = document.createElement('div');
    this.logo.innerHTML = `
    <div class="logo">
      <p>MATCH</p>
      <p class="highlight">MATCH</p>
    </div>
    `;
    this.element.appendChild(this.logo);
  }
}
