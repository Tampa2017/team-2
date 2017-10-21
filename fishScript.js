
//handle health_level locally 
for(int i = 0; i < health_level; i++){
	serverCall();
	var fish = {name: name, text_details: details, image: image};
}
var fishQueue = Queue(); // different name and details for each fish. query server

function setFish(health_level, name, details, image){  // health_level, name, and details come from server
	for(int i = 0; i < health_level; i++){
		var fish = {name: name, text_details: details, image: image};
		fishQueue.enqueue(fish); //enqueue
	}
} 
// queue to hold fish
function Queue(){
	var a=[], b=0;
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
function serverCall(){
	var info = 
}
function display_fish(){
	for(x in fishQueue){
		// use picture in html, and display
		fishQueue.peek();
	}
}








//----------------------- hashtable code -- disregard, could be useful at some point
var key = function(obj){
  // some unique object-dependent key
  return obj.totallyUniqueEmployeeIdKey; // just an example
};

var dict = {};
dict[key(obj1)] = obj1;
dict[key(obj2)] = obj2;
