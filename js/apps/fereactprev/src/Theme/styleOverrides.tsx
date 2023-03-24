export interface StyleOverridesInterface {
  htmlFontSize: number;
}

// @see
export const styleOverrides = ({ htmlFontSize }: StyleOverridesInterface) => `
  html {
    font-size: ${htmlFontSize}px;
    body {
      text-align: center;
      background-color: #dddddd;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
          monospace;
      }
    }
  }
`;
