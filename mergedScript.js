// all includes in html file, must call jquery before calling scripts 

var health_level = 10; 
var fishQueue = Queue(); // different name and details for each fish. query server
var stimulusQueue = Queue();

function setAssets(health_level, name, details, image){  // health_level, name, and details come from server
	for(int i = 0; i < health_level; i++){

	var fishData = serverCall(); //read json 
	var fish = {name: name, text_details: details, image: image};
	fishQueue.enqueue(fish);
	var stimulusData = serverCall(); //read json
	var stimulus = {name: name; text_details: details, image: image};
	stimulusQueue.enqueue(fish); 

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
     $.get("172.31.50.92", function(data){
     alert("Data: " + data + "\nStatus: " + status);
      });
}
function callback(data){
	return data;
}
function display(queue){
	for(x in fishQueue){
		// use picture in html, and display
		fishQueue.peek();
		stimulusQueue.peek();
	}
}