import { h, } from "preact";

// import * as React from "react";

h.JSX.IntrinsicElements["md-filled-button"] = ;

declare global {
  declare namespace JSX {
    interface IntrinsicElements {
      "md-filled-button": any;
    }
  }
}



declare global {
   declare namespace h.JSX {
     interface IntrinsicElements {
      foo: any;
      "md-filled-button": any;
    }
  }

  declare namespace JSX {
    interface IntrinsicElements {
      foo: any;
      "md-filled-button": any;
    }
  }
}

declare global {
  declare namespace JSX {
    interface IntrinsicElements {
      "md-filled-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      foo: any;
    }
  }
}
