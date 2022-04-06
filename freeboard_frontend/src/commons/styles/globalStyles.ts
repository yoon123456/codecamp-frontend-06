import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 20px;
    font-family: "myfont", "Courier New", Courier, monospace;
  }

  @font-face {
    font-family: "myfont";
    src: url("/fonts/Hahmlet-VariableFont_wght.ttf");
  }
`;

//
