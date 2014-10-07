var myForm = document.getElementById("toDoForm");
var list = document.getElementById("toDoList");


myForm.addEventListener("submit", function (event) {
	event.preventDefault();	
	var title = this.title.value;

	var listItem = document.createElement("ul");
	var text = document.createTextNode(title);
	var btn1 = document.createElement("button");

	var btn2 = document.createElement("button");

	btn1.innerText="Done";
	btn1.className = "check";
	btn2.innerText="Delete";
	btn2.className = "delete";
	listItem.className = "nostrike";

	listItem.appendChild(text);
	listItem.appendChild(btn1);
	listItem.appendChild(btn2);
	list.appendChild(listItem);

	this.title.value = "";
	 dList();
	 chkList();
 


});


var dList = function(){
  var rmbutton = document.querySelectorAll(".delete");
  for (var i = 0; i < rmbutton.length; i++) {
    rmbutton[i].addEventListener("click", rmList); 

  }
};

var rmList = function() {
	console.log(this.parentNode);
	this.parentNode.innerText = "";

};

var chkList = function(){
  var donebutton = document.querySelectorAll(".check");
  for (var i = 0; i < donebutton.length; i++) {
    donebutton[i].addEventListener("click", crssList); 

  }
};

crssList = function() {
	if (this.parentNode.className === "nostrike") {
	this.parentNode.className = "strike";
	console.log(this.parentNode);
	}else  if (this.parentNode.className === "strike") {
		this.parentNode.className = "nostrike";
		console.log("yosudfoa");
	}
	};
	











// var check 

var initaliaze = function(){
   
    
};

window.onload = initaliaze;