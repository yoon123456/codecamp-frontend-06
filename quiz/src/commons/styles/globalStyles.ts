import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 30px;
    font-family: "myfont", "Courier New", Courier, monospace;
  }

  @font-face {
    font-family: "myfont";
    src: url("/fonts/sHahmlet-VariableFont_wght.ttf");
  }
`;

//
