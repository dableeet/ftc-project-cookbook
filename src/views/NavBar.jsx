const React = require("react");

module.exports = function NavBar({ user }) {
  return (
    <nav className="navBar">
      <a href="/">
        <img src="" alt="Logo" />
      </a>
      {user ? (
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Favourite</a></li>
            <li><a class="dropdown-item" href="/login/logout">Logout</a></li>
          </ul>
        </div>
      ) : (
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/login">Login</a></li>
            <li><a class="dropdown-item" href="/login/registration">Registration</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

