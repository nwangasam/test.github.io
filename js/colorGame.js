var numsqs = 6;
var colors = generateRandomColors(numsqs);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
colorDisplay.textContent = pickedColor;
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");

for (var i = 0; i < squares.length; i++){
	//Add initial colors to the squares
	squares[i].style.backgroundColor = colors[i];
	//Add event listeners to the squares
	squares[i].addEventListener("click", function(){
		//Grab clicked color
		var clickedColor = this.style.backgroundColor;
		//Compare clicked color with the picked color
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColor();
			resetBtn.textContent = "Play again?"
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});
}

easyBtn.addEventListener('click', function(){
	numsqs = 3;
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	colors = generateRandomColors(numsqs);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
})

hardBtn.addEventListener('click', function(){
	numsqs = 6;
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colors = generateRandomColors(numsqs);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
	h1.style.backgroundColor = "steelblue";
})


resetBtn.addEventListener("click", function(){
	colors = generateRandomColors(numsqs);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	resetBtn.textContent = "New colors"
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = ""
	
})

function changeColor(){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = pickedColor;
	}
	h1.style.backgroundColor = pickedColor;
}

function pickColor(){
	var ran = Math.floor(Math.random() * colors.length);
	return colors[ran];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}