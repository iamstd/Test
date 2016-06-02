var React=require('react');
var Box=require('./Box');
var Reactaddons=require('react-addons');
var cx=Reactaddons.classSet;
var Wox=React.createClass({
handleClick(){
	Box.box()
},
render(){
	var classes=cx({
		"btn":true,
		"btn-success":true
	})
		return <div>
			<p className={classes} onClick={this.handleClick}>this is a p Tagnam</p>
		</div>
    } 
})
module.exports=Wox;
