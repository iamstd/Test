var li=document.createElement('li');
var ul=document.getElementsByTagName('ul')[0];
for(var i=0;i<301;i++){
	ul.innerHTML+="<li></li>";
}
var li_onmouver=document.getElementsByTagName('li');
var n=li_onmouver.length;
for(var i=0;i<n;i++){
	if(i>40&i<210){
		
		(function(i){ 
			
		li_onmouver[i].onmouseover=function(){ 
			if(i>150&i<152){
			 alert("who is she ？ ")
			} 
			if(i>75&i<77){
			 alert("who is he ？ ")
		}
		li_onmouver[i].style.visibility="hidden";
		}
	})(i);
	}
	
} 
var ul=document.getElementsByTagName('ul')[0];
ul.onmouseleave=function(){
	alert('i love you')
}
