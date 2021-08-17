import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      // note: this needs to go before any JS is loaded, e.g. probably in the head tags?
      if (typeof window !== 'undefined' && typeof window.Proxy === 'undefined') {
        // do something, e.g.
        window.location.replace('https://browser-update.org/update.html') // this presumes you set up an ie.html fallback, i.e. a vanilla HTML file you create yourself
      }
     `,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />

        {props.postBodyComponents}
        {/* <script dangerouslySetInnerHTML={{__html: `var _userway_config = {account: '4AUrPHhPpd'}`}} />
        <script type='text/javascript' src='https://cdn.userway.org/widget.js' /> */}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
