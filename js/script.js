const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.beginPath();
ctx.arc(0,400,230,0, Math.PI * 2, true);
ctx.moveTo(400,400);
ctx.fillStyle = "	#FF4500";
ctx.fill();

ctx.beginPath();
ctx.arc(0, 400,200, 0, Math.PI * 2, true);
ctx.moveTo(200,200);
ctx.fillStyle = "		#FF8C00";
ctx.fill();

ctx.beginPath();
ctx.arc(0,400,150,0, Math.PI *2, true);
ctx.moveTo(200,200);
ctx.fillStyle = "#FFA500";
ctx.fill();


ctx.beginPath();
ctx.arc(350,400,30,0, Math.PI *2,true);
ctx.moveTo(200,200);
ctx.fillStyle = "	#FFDEAD";
ctx.fill();

ctx.beginPath();
ctx.fillRect(350, 396,90,10);
ctx.fillStyle = "#FFDEAD";
ctx.fill();

ctx.beginPath();
ctx.arc(440,400, 10, 0,Math.PI * 2, true);
ctx.moveTo (200,200);
ctx.fillStyle = "#FFDEAD";
ctx.fill();

ctx.beginPath();
ctx.arc(440,400, 10, 0,Math.PI * 2, true);
ctx.moveTo (200,200);
ctx.stroke();


ctx.beginPath();
ctx.arc(440,400,35, 0, Math.PI, true);
ctx.moveTo(200,150);
ctx.fillStyle = "#B22222";
ctx.fill();


ctx.beginPath();
ctx.arc(440,403,35,0,Math.PI,false);
ctx.fillStyle = "B22222";
ctx.fill();


ctx.beginPath();
ctx.arc(700,403, 70,0, Math.PI *2, true);
ctx.fillStyle = "#228B22";
ctx.fill();

ctx.beginPath();
ctx.moveTo(689, 333);
ctx.quadraticCurveTo(700,390,768,383);
ctx.quadraticCurveTo(669,537,720,425);
ctx.quadraticCurveTo(620,300, 700,370); 
ctx.fillStyle = "#4169E1";
ctx.fill();

ctx.beginPath();
ctx.arc(1000,400,80,0,Math.PI*2,true);
ctx.fillStyle = "#6959CD";
ctx.fill();

ctx.beginPath();
ctx.moveTo(960, 400);
ctx.quadraticCurveTo(1000,380, 1050, 400);
ctx.

ctx.stroke(); 