var fish = setFish(health_level, name, details); 
var fishQueue = Queue(); // different name and details for each fish. query server

function setFish(health_level, name, details){
	for(int i = 0; i < health_level; i++){
		var fish = {name: name, text_details: details};
		console.log(fish);
	}
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
function display_fish(){
	//func to display fish
}








//----------------------- hashtable code -- disregard, could be useful at some point
var key = function(obj){
  // some unique object-dependent key
  return obj.totallyUniqueEmployeeIdKey; // just an example
};

var dict = {};
dict[key(obj1)] = obj1;
dict[key(obj2)] = obj2;
