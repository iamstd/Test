var Son=React.createClass({
	handleClick(event){
		var value=event.target.value;
		this.props.click(value);
	},
	render(){
		return <div>
				<input onChange={this.handleClick}/>
			</div>
	}
})
const Father=React.createClass({
	getInitialState(){
		return {
			inputValue:'dd',
			display:true,
			count:0,
			messages:[
				'我是郑春华',
				'我现在在南邮',
				'目前是光学工程专业'
			]
		}
	},
	handleclick(v){
		this.setState({
			inputValue:v,
			count:v.length
		})
		
	},
	click(){
		alert(3)
		this.setState({
			inputValue:'dd2'
		})
	},
	ctr(){
		this.setState({
			display:!this.state.display,
			count:this.state.count+1
		})
		
	},
	
	render(){
		var displayObj={
			display:this.state.display ?'block':'none'
		};
		var msg=[];
		
		this.state.messages.forEach(function (ms,index){
			msg.push(<div  className="list-group">{ms}</div>)
		});
		return <div>
			<p onClick={this.click} style={displayObj}>this is a father tagNmae</p>
			<button onClick={this.ctr}  className="btn btn-sm btn-info">Ctrl</button>
			<p>{this.state.inputValue}</p>
			<input defaultValue={this.state.inputValue} />
			<Son click={this.handleclick} />
			<p className="container">{msg}</p>
		</div>
	}
})
ReactDOM.render(
	<Father />,
	document.getElementsByClassName('son')[0]
)
