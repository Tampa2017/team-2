// all includes in html file, must call jquery before calling scripts 

<<<<<<< HEAD
var health_level = 10;  //incremented by good stimulus, decremented by bad 

=======
var health_level = 10;     
>>>>>>> 72b470dd79f026ac05f504b4beb2b566af97bda8
var fishQueue = Queue(); // different name and details for each fish. query server
var negstimulusQueue = Queue(); 
var posstimulusQueue = Queue();
var json = '{ "name":"fish", "description":"big fish", "image":"big image"}';
 function parser(json){
 	var obj = JSON.parse(json);
 	var attributes = [obj.name, obj.description, obj.image];
 	return attributes;
 }

function setAssets(name, details, image){  
	for(int i = 0; i < health_level; i++){

	var fishData = serverCall(); //read json, should pass tag
	//parse json  
	var fish = {name: name, text_details: details, image: image};
	fishQueue.enqueue(fish);
//-----
	var posstimulusData = serverCall(); //read json send pos tag
	//parse json
	var posstimulus = {name: name; text_details: details, image: image};
	posstimulusQueue.enqueue(posstimulus); 
//-----
    var negstimulusData = serverCall(); //read json send neg tag
	//parse json
	var negstimulus = {name: name; text_details: details, image: image};
	negstimulusQueue.enqueue(negstimulus);

	}
} 
function executeStimulus(){
	//test if stimulus is good or bad to dequeue
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
     $.get("172.31.50.92", callback(data){
      });
}
function callback(data){
	return data;
}
function display(queue){
		// use picture in html, and display
		fishQueue.peek();
		negstimulusQueue.peek(); //may not be right
		posstimulusQueue.peek(); 
	}