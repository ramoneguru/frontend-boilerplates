var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
	    <header className="header">
      		<img className="logo" src="assets/ch_logo.jpg" alt="Collective Health" />
    	</header>
    );
  }
});

module.exports = Header;
