const React = require('react');
const { Link } = require('react-router');

const Nav = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Nav Component</h3>
        <Link to="/">Get Weather</Link>
        <Link to="/about">About</Link>
        <Link to="/examples">Examples</Link>
      </div>
    );
  }
});

module.exports = Nav;
