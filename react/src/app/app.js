var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;

var Home = require('./components/Home');
var Hello = require('./components/Hello');
var Header = require('./components/Header');
var Footer = require('./components/Footer');

require('../css/main.css');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="hello/:name" component={Hello}/>
    </Route>
  </Router>
), document.getElementById('app'));