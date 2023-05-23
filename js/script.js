const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.beginPath();
ctx.arc(0, 200,200, 0, Math.PI * 2, true);
ctx.moveTo(200,200);
ctx.fillStyle = "		#FFA500";
ctx.fill();

ctx.beginPath();
ctx.arc(0,200,150,0, Math.PI *2, true);
ctx.moveTo(200,200);
ctx.fillStyle = "#FF8C00";
ctx.fill();


ctx.beginPath();
ctx.arc(350,200,30,0, Math.PI *2,true);
ctx.moveTo(200,200);
ctx.fillStyle = "	#FFDEAD";
ctx.fill();

ctx.beginPath();
ctx.fillRect(350, 195,90,10);
ctx.fillStyle = "#FFDEAD";
ctx.fill();

ctx.beginPath();
ctx.arc(440,194,30, 0, Math.PI, true);
ctx.moveTo(200,150);
ctx.fillStyle = "#B22222";
ctx.fill();

ctx.beginPath();
ctx.arc(440,207,30,0,Math.PI,false);
ctx.fillStyle = "B22222";
ctx.fill();
