import { html, css, LitElement } from 'lit';

export class AnimationRaincss extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 100vw;
        height: 100vh;
        background:#0D343A;
        background:-webkit-gradient(linear,0% 0%,0% 100%, from(rgba(13,52,58,1) ), to(#000000)  );
        background: -moz-linear-gradient(top, rgba(13,52,58,1) 0%, rgba(0,0,0,1) 100%);
        overflow: hidden;
        filter: drop-shadow(0 0 10px white);
        z-index:-1;
        position:fixed;
        top: 0;
        left:0;
      }

      .drop {
        background:-webkit-gradient(linear,0% 0%,0% 100%, from(rgba(13,52,58,1) ), to(rgba(255,255,255,0.6))  );
        background:-moz-linear-gradient(top, rgba(13,52,58,1) 0%, rgba(255,255,255,.6) 100%);
        width:1px;
        height:89px;
        position: absolute;
        bottom:200px;
        animation: fall .63s linear infinite;
      }

      /* animate the drops*/
      @keyframes fall {
        to {margin-top:900px;}
      }
    `;
  }

  static get properties() {
    return {
      nbDrop: { type: Number, attribute: 'nb-drop' },
      arrain: { type: Array, attribute: '_Arrain' }
    };
  }

  constructor() {
    super();
    this.nbDrop = 858;
    this.arrain = new Array(this.nbDrop);
    this.arrain = this.arrain.fill('');
  }

  randRange( minNum, maxNum) {
    this._null = null;
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  }

  firstUpdated() {
    this.createRain();
  }

  createRain() {
    const rain = this.shadowRoot.querySelector('.rain');
    for (let i = 0; i < this.nbDrop; i+=1) {
      const dropLeft = this.randRange(0,100);
      const dropTop = this.randRange(-100,100);
      const drop = document.createElement('div');
      drop.classList.add('drop');
      drop.style.top = `${dropTop}vh`;
      drop.style.left = `${dropLeft}vw`;
      rain.appendChild(drop);
    }
  }

  render() {
    return html`
      <section class="rain"></section>
    `;
  }
}
