import * as React from "react";

declare global {
  declare namespace JSX {
    interface IntrinsicElements {
      "md-filled-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
