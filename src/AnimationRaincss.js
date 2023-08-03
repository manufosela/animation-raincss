import { html, LitElement } from 'lit';
import { AnimationRaincssStyles } from './AnimationRaincss-styles.js';

export class AnimationRaincss extends LitElement {
  static get styles() {
    return [AnimationRaincssStyles];
  }

  static get properties() {
    return {
      nbDrop: { type: Number, attribute: 'nb-drop' },
      arrain: { type: Array, attribute: '_Arrain' },
    };
  }

  constructor() {
    super();
    this.nbDrop = 858;
    this.arrain = new Array(this.nbDrop);
    this.arrain = this.arrain.fill('');
  }

  randRange(minNum, maxNum) {
    this._null = null;
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  }

  firstUpdated() {
    this.createRain();
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'nbDrop') {
        this.arrain = new Array(this.nbDrop);
        this.arrain = this.arrain.fill('');
        this.createRain();
      }
    });
  }

  createRain() {
    const rain = this.shadowRoot.querySelector('.rain');
    rain.innerHTML = '';
    for (let i = 0; i < this.nbDrop; i += 1) {
      const dropLeft = this.randRange(0, 100);
      const dropTop = this.randRange(-100, 100);
      const drop = document.createElement('div');
      drop.classList.add('drop');
      drop.style.top = `${dropTop}vh`;
      drop.style.left = `${dropLeft}vw`;
      rain.appendChild(drop);
    }
  }

  render() {
    return html` <section class="rain"></section> `;
  }
}
