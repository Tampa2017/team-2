var plastic = plastic(health_level, name, details);
var plasticQueue =  Queue();
function plastic(health_level, name, details){	
		var plastic = {name: name, text_details: details};		
}

function createplastic(health_level, name, details){
	for(int i = health_level; i >0; i--){
		setInterval(plastic,15000);	
	}
}


function removeplastic(health_level, name, details){
	
}


// queue to hold fish
function Queue(){
	var a=[],b=0;
	this.getLength=function(){
		return a.length-b
	};
	this.isEmpty=function(){
		return 0==a.length
	};
	this.enqueue=function(b){
		a.push(b)
	};
	this.dequeue=function(){
		if(0!=a.length){
			var c = a[b]; 2*++b>=a.length && (a=a.slice(b),b=0);
			return c
		}
	};
	this.peek=function(){
		return 0<a.length?a[b]:void 0
	}
};
