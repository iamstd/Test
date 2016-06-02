//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var  ReactCSSTransitionGroup=React.addons.CSSTransitionGroup;
var event=new evnetemitter.EventEmitter();
alert(event)
var TodoList = React.createClass({
  getInitialState: function() {
    return {items: ['hello', 'world', 'click', 'me']};
  },
  handleAdd: function() {
    var newItems =
      this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  },
  handleRemove: function(i) {
    var newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  },
  click(k,event){
  	console.log(event.target.innerHTML);
  },
  render: function() {
    var items = this.state.items.map(function(item, i) {
      return (
      	<div>
        <div className="ADDON" key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
        <p onClick={this.click.bind(this,2)}>liu</p>
        <p onClick={this.click.bind(this,5)}>zch</p>
        </div>
        
      );
    }.bind(this));
    return (
      <div  className="container" >
        <button className="btn btn-success" onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={1500} transitionLeaveTimeout={500}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});
ReactDOM.render(
	<TodoList />,
	document.getElementById('csstransform')
)
