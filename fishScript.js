// all includes in html file, must call jquery before calling scripts 

//handle health_level locally 
for(int i = 0; i < health_level; i++){
	var data = serverCall();
	var fish = {name: name, text_details: details, image: image};
}
var fishQueue = Queue(); // different name and details for each fish. query server

function setFish(health_level, name, details, image){  // health_level, name, and details come from server
	for(int i = 0; i < health_level; i++){
		var fish = {name: name, text_details: details, image: image};
		fishQueue.enqueue(fish); //enqueue
	}
} 
function Queue(){   // queue to hold fish
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
			var c = a[b]; 
			2*++b>=a.length && (a=a.slice(b),b=0);
			return c;
		}
	};
	this.peek=function(){
		return 0<a.length?a[b]:void 0
	};
};
function serverCall(){
     $.get("172.31.50.92", function(data, status){
     alert("Data: " + data + "\nStatus: " + status);
      });
}
function callback(data, status){
	return data, status;
}
function display_fish(){
	for(x in fishQueue){
		// use picture in html, and display
		fishQueue.peek();
	}
}