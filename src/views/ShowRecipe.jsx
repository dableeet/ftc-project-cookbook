const React = require("react");
const Layout = require("./Layout");

module.exports = function ShowRecipe({ user }) {
  return (
    <Layout user={user}>
      <div>
        <h2 className="text-red-600">Hello</h2>
      </div>
    </Layout>
  );
};

