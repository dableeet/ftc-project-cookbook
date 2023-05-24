const React = require("react");
const NavBar = require("./NavBar");

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/output.css" rel="stylesheet" />

        {/* <script defer src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
        <script defer src="/js/auth.js" />
        <title>{ }</title>
      </head>
      <body className="body h-full">
        <NavBar user={user} />

        {children}

      </body>
    </html>
  );
};

