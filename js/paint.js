var canvas;
var context;

window.onload = function() {
      canvas = document.getElementById("draw");
      context = canvas.getContext("2d");

      canvas.onmousedown = startDrawing;
      canvas.onmouseup = stopDrawing;
      canvas.onmouseout = stopDrawing;
      canvas.onmousemove = draw;
   }

var previousColorElement;

function changeColor(color, imgElement)
{

	context.strokeStyle = color;
	
	imgElement.className = "Selected";
	

	if (previousColorElement != null)
	   previousColorElement.className = "";
	   
	previousColorElement = imgElement;
}

var previousThicknessElement;

function changeThickness (thickness, imgElement)
{

	context.lineWidth = thickness;
	

	imgElement.className = "Selected";

	if (previousThicknessElement != null)
	   previousThicknessElement.className = "";
	   
	previousThicknessElement = imgElement;
}
function addClick(x, y, dragging)
{
   clickX.push(x);
   clickY.push(y);
   clickDrag.push(dragging);
}
function startDrawing(e) {

	isDrawing = true;
	

	context.beginPath();
	

	context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

canvas.addEventListener('onmouseup',function (e){
   paint = false;
});
canvas.addEventListener('onmouseout',function (e){
   paint = false;
});

function draw(e) {
	if (isDrawing == true)
	{

		var x = e.pageX - canvas.offsetLeft;
		var y = e.pageY - canvas.offsetTop;
		

		context.lineTo(x, y);
		context.stroke();
	}
}
function redraw(){
   context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

   context.strokeStyle = "#df4b26";
   context.lineJoin = "round";
   context.lineWidth = 5;

   for(var i=0; i < clickX.length; i++) {
       context.beginPath();
       if(clickDrag[i] && i){
           context.moveTo(clickX[i-1], clickY[i-1]);
       }else{
           context.moveTo(clickX[i]-1, clickY[i]);
       }
       context.lineTo(clickX[i], clickY[i]);
       context.closePath();
       context.stroke();
   }
}
canvas.addEventListener('onmousedown',function (e){
   mouseX = e.pageX - this.offsetLeft;
   mouseY = e.pageY - this.offsetTop;
   paint = true;
   addClick(mouseX, mouseY);
   redraw();
});

function stopDrawing() {
    isDrawing = false;	
}

canvas.addEventListener('onmousemove',function (e){
   if(paint){
       addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
       redraw();
   }
});

function clearCanvas() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function saveCanvas() {

	var imageCopy = document.getElementById("savedImageCopy");

	imageCopy.src = canvas.toDataURL();
	

	var imageContainer = document.getElementById("savedCopyContainer");
    imageContainer.style.display = "block";
}
































