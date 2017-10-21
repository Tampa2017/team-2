// all includes in html file, must call jquery before calling scripts 

//incremented by good stimulus, decremented by bad 

var health_level = 10;    
var json = '{ "name":"fish", "description":"big fish", "image":"big image"}'; 
var fishQueue = Queue(); // different name and details for each fish. query server
var negstimulusQueue = Queue(); 
var posstimulusQueue = Queue();
setAssets();

//------------funcs
function setAssets(name, details, image){  
	for(int i = 0; i < health_level; i++){

	var fishData = serverCall("fish"); //read json, should pass tag
	parser(fishData);
	var fish = {name: name, text_details: details, image: image};
	fishQueue.enqueue(fish);
//----- 
	var posstimulusData = serverCall("positive"); //read json send pos tag
	parser(posstimulusData);
	var posstimulus = {name: name; text_details: details, image: image};
	posstimulusQueue.enqueue(posstimulus); 
//-----
    var negstimulusData = serverCall("negative"); //read json send neg tag
	parser(negstimulusData);
	var negstimulus = {name: name; text_details: details, image: image};
	negstimulusQueue.enqueue(negstimulus);

	}
} 
function spawn(){   //fix 
	//every 15 sec trash
	setInterval(display(negstimulusQueue.peek()),15000);
	executeStimulus(negstimulusQueue.peek());	
	//every 30 sec good 
	setInterval(display(posstimulusQueue.peek()), 30000);
	executeStimulus(posstimulusQueue.peek());
	//health and fish 
	for(int i = 0; i < health_level; i++){
		display(fish);
	}
}
function executeStimulus(){
    
}

//edits the value of the health levels

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
function serverCall(tag){
     $.get("172.31.50.92", tag, callback(data){ //revise
      });
}
function callback(data){
	return data;
}
 function parser(json){
 	var obj = JSON.parse(json);
 	var attributes = [obj.name, obj.description, obj.image];
 	return attributes;
 }
function display(data){
		// use picture in html, and display method
		fishQueue.peek();
		fishQueue.dequeue();

		negstimulusQueue.peek();
		negstimulusQueue.dequeue();

		posstimulusQueue.peek(); 
		posstimulusQueue.dequeue();
	}