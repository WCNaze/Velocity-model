//Button toggle
	var clicked = 1
	var btn = document.querySelector(".btn");
	function AnimateBtn(){
		if (clicked == 1) {
			btn.classList.add("circle");
			btn.innerHTML = "X";
			clicked= clicked*-1
		} else if (clicked == -1) {
			btn.classList.remove("circle");
			btn.innerHTML = "Start";
			clicked= clicked*-1;
		}
	}






//canvas
var canvas = document.querySelector('canvas');
var ch = window.innerHeight*.80
var cw = window.innerWidth - 20
var img = document.getElementById("Logo")
console.log(canvas);
canvas.width= cw;
canvas.height= ch;

var ctx = canvas.getContext('2d');


//background
ctx.fillStyle = "rgba(110,110,110,0.5)";
ctx.fillRect(0, 0, cw, ch);

//x bars

for (let i =0; i<10; i++) {
ctx.beginPath();
ctx.moveTo(0, (ch/10)*i);
ctx.lineTo(cw, (ch/10)*i);
ctx.strokeStyle = "lightgrey";
ctx.stroke();
};

//y bars

for (let i =0; i<10; i++) {
ctx.beginPath();
ctx.moveTo((cw/10)*i,0);
ctx.lineTo((cw/10)*i,ch);
ctx.strokeStyle = "lightgrey";
ctx.stroke();
};

//x - axis
ctx.beginPath();
ctx.moveTo(0, ch * 0.5);
ctx.lineTo(cw, ch * 0.5);
ctx.lineWidth = "2";
ctx.strokeStyle = "rgba(110,110,110,1)";
ctx.stroke();

//y - axis
ctx.beginPath();
ctx.moveTo(cw * 0.5, 0);
ctx.lineTo(cw * 0.5, ch);
ctx.strokeStyle = "rgba(110,110,110,1)";
ctx.stroke();

//ball
ctx.beginPath();
ctx.arc(cw * 0.5, ch * 0.5, 15, 0, Math.PI * 2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.lineWidth = "2";
ctx.strokeStyle = "darkred";
ctx.stroke();

//logo
ctx.drawImage(img,10,10,cw*.05,cw*.05);