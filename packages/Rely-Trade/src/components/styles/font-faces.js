import React from "react";
import { Global, css, connect } from "frontity";
import OpenSansBold from '../../fonts/opensans-bold.woff2';
import OpenSansRegular from '../../fonts/opensans-regular.woff2';

const fonts = {
  all: [OpenSansRegular, OpenSansBold],
};

const FontFace = ({ state }) => {
  const font = fonts[state.theme.fontSets] || fonts["all"];

  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-display: "swap";
          src: url(${font[0]}) format("woff2");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-display: "swap";
          src: url(${font[1]}) format("woff2");
        }
      `}
    />
  );
};

export default connect(FontFace);