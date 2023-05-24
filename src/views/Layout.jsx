const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ children, user, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/hand.styles.css" rel="stylesheet" />

        <script defer src="/js/auth.js" />

        <script defer src="/js/application.js" />
        <title>{title}</title>
      </head>
      <body className="body">
        <NavBar user={user} />
        <div className="container my-12 mx-auto px-4 md:px-12">{children}</div>
      </body>
    </html>
  );
};
