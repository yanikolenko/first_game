let getY = -40;
let xRand = Math.floor(Math.random()*500);
let goDown = 0;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 300;

let img = new Image();
img.src = ('бомба.png');

let motionOfBomb = function(){
	if(getY === 260){
		getY = -40;
		xRand = Math.floor(Math.random()*500);
		if(xRand<40){
			xRand = 40;
		}else if(xRand > 460){
			xRand = 460 ;
		}

	}
	ctx.clearRect(0,0,600,600);
	ctx.drawImage(img,xRand,getY,40,40);
	getY++;
}
img.onload = function(){
	goDown = setInterval(motionOfBomb, 10);

	

};
img.click = function(){
	$('body').css('background',"red");
};

// img.click(function(){
// 	$('body').css('background',"red");
// });
// $(img).on('click',function() {
// 	$('body').css('background',"red");
// });