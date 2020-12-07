import {
  connect,
  css
} from 'frontity';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import ProductSlider from 'pure-react-carousel/dist/react-carousel.es.css';

const cssReset = css `
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

const documentSetup = (colors) => css `
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
    & p {
    font-size: 16px;
    color: ${colors.text};
  }
  & h1 {
    font-size: 38px;
    font-weight: bold;
    color: ${colors.text};
  }
  & h2 {
    font-size: 32px;
    font-weight: bold;
    color: ${colors.text};
  }
  & h3 {
    font-size: 22px;
    font-weight: bold;
    color: ${colors.text};
  }
  & h4 {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.text};
  }
  & h5 {
    font-size: 12px;
    font-weight: bold;
    color: ${colors.text};
  }
  & h6 {
    font-size: 10px;
    font-weight: bold;
    color: ${colors.text};
  }
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
  /* WP columns CSS Style */
  .wp-block-columns {
  display: flex;
  margin-bottom: 28px;
  flex-wrap: wrap;
  & img {
    width: 100%;
    height: auto;
  }
  & a {
    color: ${colors.primary};
  }
  & p {
    font-size: 16px;
    color: ${colors.text};
  }
  & h1 {
    font-size: 38px;
    font-weight: bold;
    color: ${colors.text};
  }
  & h2 {
    font-size: 32px;
    font-weight: bold;
    color: ${colors.text};
  }
  & h3 {
    font-size: 22px;
    font-weight: bold;
    color: ${colors.text};
  }
  & h4 {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.text};
  }
  & h5 {
    font-size: 12px;
    font-weight: bold;
    color: ${colors.text};
  }
  & h6 {
    font-size: 10px;
    font-weight: bold;
    color: ${colors.text};
  }
  & label {
    font-size: 16px;
    margin-bottom: 5px;
    color: ${colors.text};
  }
  & [type="button"], [type="reset"], [type="submit"], button {
    font-size: 16px;
    font-weight: 600;
    padding: 8px 30px;
    color: #fff;
    background: ${colors.primary};
    border: none;
    text-transform: uppercase;
    transition: all ease-in-out .3s;

    & :hover {
      color: ${colors.text};
    }
  }
  & input[type="text"], input[type="email"], optgroup, select {
    display: block;
    width: 100%;
    height: auto;
    padding: 8px 15px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: ${colors.text};
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid;
    border-color: ${colors.gray.light};
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  & textarea {
    display: block;
    width: 100%;
    height: 150px;
    padding: .375rem .75rem;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    & :focus {
      border: 1px solid #ced4da;
      border-radius: 5px;
    }
  }
  blockquote {
    margin: 10px 0;
    border-left: 3px solid;
    border-color: ${colors.primary};
    padding-left: 10px;
    font-style: italic;
    font-weight: bold;
  }
}
.tab-content > .active {
    width: 100%;
}
.mystyle {
    z-index: 999 !important;
    visibility: visible !important;
    opacity: 1 !important;
    transition: all 0.3s cubic-bezier(0.645,0.045,0.355,1) 0s;
  }
@media (max-width: 800px) {
  .container, .container-md, .container-sm {
    max-width: 90%;
  }
  .wp-block-columns {
    flex-wrap: nowrap;
  }
}
@media (max-width: 400px) {
  /* .container, .container-sm {
    max-width: 85%;
  } */
}
.wp-block-columns.has-background {
  padding: 20px 30px;
  }
  
  .wp-block-column {
flex-grow: 1;
min-width: 0;
word-break: break-word;
overflow-wrap: break-word; }
@media (max-width: 800px){
  .wp-block-columns {
    width: 100%;
    display: block;
  }
  .wp-block-column {
    width: 100%;
    margin-bottom: 35px;
  }
}
@media (min-width: 1282px) {
  .wp-block-column {
    padding: 25px;
    flex-basis: 0;
    flex-grow: 1;
  }
  .wp-block-column[style] {
    flex-grow: 0;
  }
  .wp-block-column:not(:first-child) {
    margin-right: 32px;
  }
}
  
  /**
   * All Columns Alignment
   */
  .wp-block-columns.are-vertically-aligned-top {
align-items: flex-start; }
  
  .wp-block-columns.are-vertically-aligned-center {
align-items: center; }
  
  .wp-block-columns.are-vertically-aligned-bottom {
align-items: flex-end; }
  
  /**
   * Individual Column Alignment
   */
  .wp-block-column.is-vertically-aligned-top {
align-self: flex-start; }
  
  .wp-block-column.is-vertically-aligned-center {
-ms-grid-row-align: center;
    align-self: center; }
  
  .wp-block-column.is-vertically-aligned-bottom {
align-self: flex-end; }
  
  .wp-block-column.is-vertically-aligned-top, .wp-block-column.is-vertically-aligned-center, .wp-block-column.is-vertically-aligned-bottom {
width: 100%; }
  .carousel-control-next svg {
    width: 42px;
    height: auto;
    background: #000;
    right: 0;
    position: absolute;
  }
  .carousel-control-prev svg {
    width: 42px;
    height: auto;
    background: #000;
    left: 0;
    position: absolute;
  }
  .carousel-indicators li {
    opacity: .7;
  }
  .carousel-indicators .active{
    background-color: ${colors.primary};
  }
  .footer-map {
    border: none;
    margin-bottom: 25px;
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