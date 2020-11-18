import { connect, css } from 'frontity';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import ProductSlider from 'react-multi-carousel/lib/styles.css';
import Revicons from '../../fonts/revicons.ttf';

const cssReset = css`
  @font-face {
    font-family: "revicons";
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    src: url("${Revicons}") format("truetype");
  }
  html,
  body {
    border: none;
    margin: 0;
    padding: 0;
  }
  .container, .container-lg, .container-md, .container-sm, .container-xl {
    max-width: 1200px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  address,
  big,
  cite,
  code,
  em,
  font,
  img,
  small,
  strike,
  sub,
  sup,
  li,
  ol,
  ul,
  fieldset,
  form,
  label,
  legend,
  button,
  table,
  caption,
  tr,
  th,
  td {
    border: none;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
    text-align: inherit;
  }

  blockquote::before,
  blockquote::after {
    content: "";
  }

  a,
  path {
    transition: all 0.15s linear;
  }
`;

const documentSetup = (colors) => css`
  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    background: ${colors.bodyBg};
    box-sizing: border-box;
    color: #000;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Helvetica Neue",
      Helvetica, sans-serif;
    font-size: 1.8rem;
    letter-spacing: -0.015em;
    text-align: left;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    word-break: break-word;
    word-wrap: break-word;
  }

  #site-content {
    overflow: hidden;
  }
  .react-multiple-carousel__arrow {
    border-radius: 0px !important;
    /* min-width: 40px !important;
    min-height: 40px !important;
    background: #fff !important;
    border: 1px solid !important; */
    /* border-color: ${colors.gray.light} !important; */
    & :hover, :focus {
      border-color: ${colors.primary} !important;
      background: ${colors.primary} !important;
    }
  }
  .react-multiple-carousel__arrow::before {
    color: ${colors.gray.light} !important;
    & :hover, :focus {
      color: ${colors.gray.lighttext} !important;
    }
  }
  .react-multiple-carousel__arrow--left {
    left: 0;
  }
  .react-multiple-carousel__arrow--right {
    right: 0;
}
.react-multi-carousel-dot--active button{
  background: ${colors.primary} !important;
}
`;

const globalStyles = (colors) => 
    css([
        bootstrap,
        cssReset,
        ProductSlider,
        documentSetup(colors),
    ])

export default globalStyles;