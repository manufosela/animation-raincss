import { css } from 'lit';

export const AnimationRaincssStyles = css`
  :host {
    display: block;
    width: 100vw;
    height: 100vh;
    background: var(--animation-raincss-background-color, #0d343a);
    background: var(
      --animation-raincss-background-color,
      -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(13, 52, 58, 1)), to(#000000))
    );
    background: var(
      --animation-raincss-background-color,
      -moz-linear-gradient(top, rgba(13, 52, 58, 1) 0%, rgba(0, 0, 0, 1) 100%)
    );
    overflow: hidden;
    filter: drop-shadow(0 0 10px white);
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
  }

  .drop {
    background: -webkit-gradient(
      linear,
      0% 0%,
      0% 100%,
      from(rgba(13, 52, 58, 1)),
      to(rgba(255, 255, 255, 0.6))
    );
    background: -moz-linear-gradient(
      top,
      rgba(13, 52, 58, 1) 0%,
      rgba(255, 255, 255, 0.6) 100%
    );
    width: 1px;
    height: 89px;
    position: absolute;
    bottom: 200px;
    animation: fall 0.4s linear infinite;
  }

  /* animate the drops*/
  @keyframes fall {
    to {
      margin-top: 900px;
    }
  }
`;
