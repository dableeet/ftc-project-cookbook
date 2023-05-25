const React = require('react');
const Layout = require('./Layout');

const Card = require('./MiniCard');

module.exports = function Main({ cardInfo, title, user }) {
  return (
    <Layout title={title} user={user}>
      <script src="/js/mainPage.client.js" />
      <div className="container my-12 mx-auto px-4 md:px-12 grid">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="mx-6 justify-self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Sort by
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li className="ct-li w-full py-2 flex justify-center items-center">
              <button
                type="button"
                className="sort-time-btn more border border-secondary-400 rounded-full py-2 px-2"
              >
                Cooking time
              </button>
              <span
                className="less material-icons cursor-default"
                style={{ display: 'none' }}
              >
                expand_less
              </span>
              <span
                className="more material-icons cursor-default"
                style={{ display: 'none' }}
              >
                expand_more
              </span>
            </li>
            <li className="ing-li w-full py-2 flex justify-center items-center">
              <button
                type="button"
                className="sort-ingr-btn more border border-secondary-400 rounded-full py-2 px-2"
              >
                Ingredients
              </button>
              <span
                className="less material-icons cursor-default"
                style={{ display: 'none' }}
              >
                expand_less
              </span>
              <span
                className="more material-icons cursor-default"
                style={{ display: 'none' }}
              >
                expand_more
              </span>
            </li>
          </ul>
        </div>
        <div className="card-box flex flex-wrap justify-between -mx-1 lg:-mx-4 lg:w-auto">
          {cardInfo &&
            cardInfo.map((el) => <Card {...el} user={user} key={el.id} />)}
        </div>
      </div>
    </Layout>
  );
};
