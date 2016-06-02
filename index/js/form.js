"use strict"
var  Father=React.createClass({
	getInitialState(){
		return {
			username:'',
			checked:true,
			gender:"male"

	},
	handleChange:function(event){
		console.log(event)
		
	},
	handleChange(name,event){
		var stat={};
		stat[name]= name=="checkbox" ? event.target.checked:event.target.value;
		this.setState(stat);
	},
	submithandler:function(event){
		event.preventDefault();
		console.log(this.state);
	},
	render(){
		return <form onSubmit={this.submithandler}>
		       		<label htmlFor="username">请输入用户名</label>
		       		<input id="username" type="text" value={this.sate.username} onChange={this.handleChange.bind(this,"username")}  />
		       		<br\>
		       		<select value={this.state.gender} onChange={this.handleChange.bind(this,'gender')}>
		       		<option value="man">男</option>
		       		<option value="man">男</option>
		       		</select>
		       		<br/>
		       		<input type="checkbox" value="同意用户协议" checked={this.state.checked} onChange={this.handleChange.bind(this,'checked')} />
		       		<button type="submit">注册</button>
		       		
		       </form>
	}
})
ReactDOM.render(
	<Father />,
	document.getElementsByClassName('son')[0]
)
