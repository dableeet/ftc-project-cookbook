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
        <link href="/css/output.css" rel="stylesheet" />
        <link href="/css/hand.styles.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
          rel="stylesheet"
        />
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
