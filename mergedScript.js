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

	var fishData = serverCall(); //read json, should pass tag
	parser(fishData);
	var fish = {name: name, text_details: details, image: image};
	fishQueue.enqueue(fish);
//----- 
	var posstimulusData = serverCall(); //read json send pos tag
	parser(posstimulusData);
	var posstimulus = {name: name; text_details: details, image: image};
	posstimulusQueue.enqueue(posstimulus); 
//-----
    var negstimulusData = serverCall(); //read json send neg tag
	parser(negstimulusData);
	var negstimulus = {name: name; text_details: details, image: image};
	negstimulusQueue.enqueue(negstimulus);

	}
} 
function spawn(){   //fix 
	//every 15 sec trash
	setInterval(display(negstimulus),15000);	
	//every 30 sec good 
	setInterval(display(posstimulus), 30000);
	//health and fish 
	for(int i = 0; i < health_level; i++){
		display(fish);
	}
}
function executeStimulus(json){
var object = parser(json);
var name = object[0];
while(health_level>0 && health_level<=10){

	if(name == )
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
function serverCall(){
     $.get("172.31.50.92", callback(data){ //revise
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
function display(queue){
		// use picture in html, and display method
		fishQueue.peek();
		negstimulusQueue.peek(); //judge 
		posstimulusQueue.peek(); 
	}