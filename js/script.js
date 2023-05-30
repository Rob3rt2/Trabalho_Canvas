const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.beginPath();
ctx.arc(0,400,260,0, Math.PI * 2, true);
ctx.moveTo(400,400);
ctx.fillStyle = "	#FF4500";
ctx.fill();

ctx.beginPath();
ctx.arc(0, 400,220, 0, Math.PI * 2, true);
ctx.moveTo(200,200);
ctx.fillStyle = "		#FF8C00";
ctx.fill();

ctx.beginPath();
ctx.arc(0,400,180,0, Math.PI *2, true);
ctx.moveTo(200,200);
ctx.fillStyle = "#FFA500";
ctx.fill();

ctx.beginPath();
ctx.arc(350, 400, 33,0, Math.PI * 2, true);
ctx.fillStyle = "	#1C1C1C";
ctx.fill();


ctx.beginPath();
ctx.arc(440, 401.5, 39,0, Math.PI * 2, true);
ctx.fillStyle = "	#1C1C1C";
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
ctx.moveTo(440,400);
ctx.quadraticCurveTo(430,390,410,380);
ctx.quadraticCurveTo(440,390,470,380);
ctx.quadraticCurveTo(440,390,444,400);
ctx.fillStyle = "	#800000";
ctx.fill();

ctx.beginPath();
ctx.moveTo(440, 403);
ctx.quadraticCurveTo(430,404, 407, 415);
ctx.quadraticCurveTo(440,403,450, 415);
ctx.quadraticCurveTo(440,420, 460,423);
ctx.quadraticCurveTo(450,410, 460,408);
ctx.quadraticCurveTo(460, 407, 445,403);
ctx.fillStyle = "#800000";
ctx.fill();


ctx.beginPath();
ctx.arc(700, 403, 75,0, Math.PI * 2, true);
ctx.fillStyle = "	#1C1C1C";
ctx.fill();

ctx.beginPath();
ctx.arc(700,403, 70,0, Math.PI *2, true);
ctx.fillStyle = "#228B22";
ctx.fill();

ctx.beginPath();
ctx.moveTo(689, 333);
ctx.quadraticCurveTo(700,390,768,383);
ctx.quadraticCurveTo(700,428,700,473);
ctx.quadraticCurveTo(659,478,700,435);
ctx.quadraticCurveTo(700,370, 679,336); 
ctx.fillStyle = "#4169E1";
ctx.fill();

ctx.beginPath();
ctx.moveTo(697,335);
ctx.quadraticCurveTo(685,336, 675,340);
ctx.quadraticCurveTo(680, 331,682, 332);
ctx.quadraticCurveTo(686, 331, 687,331);
ctx.quadraticCurveTo(688,333, 697,335);
ctx.fillStyle = "#708090";
ctx.fill();

ctx.beginPath();
ctx.arc(1000, 400, 85,0, Math.PI * 2, true);
ctx.fillStyle = "	#1C1C1C";
ctx.fill();

ctx.beginPath();
ctx.arc(1000,400,80,0,Math.PI*2,true);
ctx.fillStyle = "#6959CD";
ctx.fill();


ctx.beginPath();
ctx.moveTo(970, 350);
ctx.quadraticCurveTo(1000,380, 1050, 350);
ctx.quadraticCurveTo(1020,416, 1070,370);
ctx.quadraticCurveTo(1020,440, 1000, 460);
ctx.quadraticCurveTo(1000,440, 930,410);
ctx.quadraticCurveTo(975,405, 970,350);
ctx.fillStyle = "#C71585";
ctx.fill(); 


ctx.moveTo(970, 350);
ctx.lineTo(1000,460);
ctx.lineTo(1020,380);
ctx.lineTo(1010,380);
ctx.lineTo(1040,390);
ctx.lineTo(930,410);
ctx.strokeStyle = "#000";
ctx.stroke();

ctx.beginPath();
ctx.arc(1000,400, 30,0, Math.PI * 2);
ctx.fillStyle ="	#4B0082";
ctx.fill();

ctx.beginPath();
ctx.arc(1000,400, 26,0, Math.PI * 2);
ctx.fillStyle ="#000";
ctx.fill();

ctx.beginPath();
ctx.moveTo(970, 325);
ctx.quadraticCurveTo(1000,335, 1030,325);
ctx.quadraticCurveTo(1000,315, 970, 325);
ctx.fillStyle ="#ADD8E6";
ctx.fill();

ctx.beginPath();
ctx.moveTo(980, 325);
ctx.quadraticCurveTo(1000, 330, 1020, 325);
ctx.quadraticCurveTo(1000, 305, 980, 325);
ctx.fillStyle ="	#B8860B";
ctx.fill();



ctx.beginPath();
ctx.arc(1400, 400, 163, 0, Math.PI * 2, true);
ctx.fillStyle ="	#FFFFF0";
ctx.fill();

ctx.beginPath();
ctx.arc(1400, 400, 160, 0, Math.PI * 2, true);
ctx.fillStyle ="#3CB371";
ctx.fill();

ctx.beginPath();
ctx.moveTo(1340,250);
ctx.bezierCurveTo(1370, 260, 1380, 260, 1410, 260);
ctx.bezierCurveTo(1380, 255, 1370, 255, 1345, 247);
ctx.bezierCurveTo(1400, 255, 1410, 255, 1440, 255);
ctx.bezierCurveTo(1410, 250, 1400, 250, 1360, 243);
ctx.fillStyle ="#FFFFF0";
ctx.fill();

ctx.beginPath();
ctx.moveTo(1305, 270);
ctx.bezierCurveTo(1320, 280, 1340, 280, 1370, 280);
ctx.bezierCurveTo(1400, 300, 1430, 270, 1531, 310);
ctx.bezierCurveTo(1535, 320, 1545,335, 1550, 355);
ctx.bezierCurveTo(1500, 345, 1460, 360, 1400, 345);
ctx.strokeStyle = "#2E8B57";
ctx.stroke(); 

