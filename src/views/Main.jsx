const React = require('react');
const Layout = require('./Layout');

const Card = require('./MiniCard');

module.exports = function Main({ cardInfo, title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap justify-center -mx-1 lg:-mx-4 lg:w-full">
          {cardInfo && cardInfo.map((el) => <Card {...el} user={user} />)}
        </div>
      </div>
    </Layout>
  );
};
