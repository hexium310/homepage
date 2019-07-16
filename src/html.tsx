import React from 'react';

interface HTMLProps {
  htmlAttributes: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
  headComponents: React.ReactNode[];
  bodyAttributes: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
  preBodyComponents: React.ReactNode[];
  body: string;
  postBodyComponents: React.ReactNode[];
}

const HTML: React.FunctionComponent<HTMLProps> = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body: __html,
  postBodyComponents,
}) => {
  return (
    <html { ...htmlAttributes }>
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        { headComponents }
      </head>
      <body { ...bodyAttributes }>
        { preBodyComponents }
        <div
          key={ `body` }
          id="___gatsby"
          dangerouslySetInnerHTML={ { __html } }
        />
        { postBodyComponents }
      </body>
    </html>
  );
};

export default HTML;
