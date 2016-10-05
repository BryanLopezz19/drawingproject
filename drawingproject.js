var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');


canvas.fillStyle = "black";
canvas.fillRect(80,150,100,100);
var c=document.getElementById("drawingArea");
var ctx=c.getContext("2d");
ctx.strokeStyle="#FF0000";
ctx.strokeRect(20,20,150,100);
