const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.beginPath();
ctx.arc(0,270,230,0, Math.PI * 2, true);
ctx.moveTo(400,400);
ctx.fillStyle = "	#FF4500";
ctx.fill();

ctx.beginPath();
ctx.arc(0, 270,200, 0, Math.PI * 2, true);
ctx.moveTo(200,200);
ctx.fillStyle = "		#FF8C00";
ctx.fill();

ctx.beginPath();
ctx.arc(0,270,150,0, Math.PI *2, true);
ctx.moveTo(200,200);
ctx.fillStyle = "#FFA500";
ctx.fill();


ctx.beginPath();
ctx.arc(350,270,30,0, Math.PI *2,true);
ctx.moveTo(200,200);
ctx.fillStyle = "	#FFDEAD";
ctx.fill();

ctx.beginPath();
ctx.fillRect(350, 264,90,10);
ctx.fillStyle = "#FFDEAD";
ctx.fill();

ctx.beginPath();
ctx.arc(440,270, 10, 0,Math.PI * 2, true);
ctx.moveTo (200,200);
ctx.fillStyle = "#FFDEAD";
ctx.fill();

ctx.beginPath();
ctx.arc(440,270, 10, 0,Math.PI * 2, true);
ctx.moveTo (200,200);
ctx.stroke();


ctx.beginPath();
ctx.arc(440,265,30, 0, Math.PI, true);
ctx.moveTo(200,150);
ctx.fillStyle = "#B22222";
ctx.fill();


ctx.beginPath();
ctx.arc(440,273,30,0,Math.PI,false);
ctx.fillStyle = "B22222";
ctx.fill();


ctx.beginPath();
ctx.arc(700,273, 70,0, Math.PI *2, true);
ctx.fillStyle = "#228B22";
ctx.fill();

ctx.beginPath();
ctx.moveTo(650, 223);
ctx.quadraticCurveTo(700,273,762,245);
ctx.quadraticCurveTo(700,300,700,344);
ctx.quadraticCurveTo(670,270, 640,235); 
ctx.fillStyle = "#4169E1";
ctx.fill();


