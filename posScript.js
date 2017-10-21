var health_level = 10; 
var fish; 
var posstimulus; 
var negstimulus;  
setAssets();
spawn();

function setAssets(name, details, image){  
	for(var i = 0; i < health_level; i++){
		var json = '{ "name":"fish", "description":"big fish", "image":"big image"}';  
		var fishData =  "dummy json"; //replace
	    fish = objectbuild(parser(json));
	//----- 
	    var posstimulusData = "dummy json"
		posstimulus = objectbuild(parser(json));
	//-----
	    var negstimulusData = "dummy json"
		negstimulus = objectbuild(parser(json));
	}
} 
function spawn(){   //fix 
	//every 15 sec trash
	setInterval(display(negstimulus),15000);
	addnegStim(negstimulus);	
	//every 30 sec good 
	setInterval(display(posstimulus), 30000);
	addposStim(posstimulus);
	//health and fish 
	for(var i = 0; i < health_level; i++){
		display(fish);
	}
}
function addnegStim(negstimulus){ //edit
    health_level--;
}
function addposStim(posstimulus){ // also removing negative stim 
	health_level++;
}
function parser(json){
 	var obj = JSON.parse(json);
 	var attributes = [obj.name, obj.description, obj.image];
 	return attributes;
 }
 function objectbuild(data){
 	var data = {name: data[0], description: data[1], image: data[2]};
 }
 function display(data){
		// use picture in html, and display method
	}