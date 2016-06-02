var rep=new RegExp("box","ig");
var box=new RegExp('box','ig');
var str="192.1.12.3"
var pox=/^[1-9][0-9]{0,2}.[1-2][0-9]{0,2}.[0-9]{1,3}/ig;
console.log(pox.test(str))
/*console.log(pox.exec(str))
console.log(pox.exec(str))
console.log(pox.exec(str))
console.log(pox.exec(str))
console.log(pox.exec(str))*/
//console.log(str.match(pox))
/*var wox=/box/;
var pox=/box/ig;
var str="this is a box,and you are a Box too"
alert(rep.exec(str))如果有global全局匹配，下次匹配在此次匹配后接着找，知道全部查找完
console.log(rep.exec(str))
alert(rep.exec(str))*/

//console.log(str.match(pox))返回一个数组，没有开启全局，只返回第一个值
//console.log(str.match(pox).length)
//console.log(str.replace(pox,"lee"))
//console.log(str.search(pox))只能返回str中的第一个匹配处的位置，没找到就返回-1
//console.log(str.split(pox)[1])返回一个数组











/*(function(){
   var user='njupt';
   Box=function(value){
   	this.name=value;
   	this.getUser=function(){
   		return user
   	};
   	this.setUser=function(value){
   		user=value;
   		return user
   	}
   }
})()
var box=new Box();
console.log(box.getUser())
console.log(box.setUser('iamstd'))*/

/*var box={
	user:100,
	getUser:function(value){
		 return this.user
		},
	setUser:function(value){
		this.user=value;
		return this.user
	}
}
console.log(box.getUser())
console.log(box.setUser('IAMSTD'))
alert(box.user)
*/





