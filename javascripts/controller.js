function IanGameControllerStart() {
    var c = document.getElementById("game_canvas");
    c.width=self.innerWidth - 50;
    c.height=self.innerHeight - 50;
    c.style.border="1px solid #000000";

    var context = c.getContext("2d");
//    context.moveTo(235, 0);
//    context.lineTo(235, 250);
//    context.lineWidth=1;
//    context.strokeStyle='black';
//    context.stroke();
//
//    context.moveTo(70, 100);
//    context.lineTo(400, 100);
//    context.stroke();
//
//    //mouth center
//    context.moveTo(70, 180);
//    context.lineTo(400, 180);
//    context.stroke();
//
//    //nose bottom
//    context.moveTo(70, 150);
//    context.lineTo(400, 150);
//    context.stroke();
//
//    context.moveTo(70, 150);
//    context.lineTo(400, 150);
//    context.stroke();
//
//    context.moveTo(210, 0);
//    context.lineTo(210, 250);
//    context.stroke();
//
//    context.moveTo(260, 0);
//    context.lineTo(260, 250);
//    context.stroke();


    var scullCenterX = 235;
    // begin custom shape
    context.beginPath();
    context.moveTo(170, 100);
    //top of head
    context.bezierCurveTo(170, 20, 300, 20, 300, 100);

    //right cheekbone
    context.bezierCurveTo(300, 100, 300, 125, 280, 150);
    //right jaw
    context.bezierCurveTo(270, 160, 260, 150, 260, 200);

    //left cheekbone
    context.moveTo(170, 100);
    context.bezierCurveTo(170, 100, 170, 125, 190, 150);
    //left jaw
    context.bezierCurveTo(200, 160, 210, 150, 210, 200);

    //chin
    context.moveTo(210, 200);
    context.bezierCurveTo(210, 220, 260, 220, 260, 200);

    // complete custom shape
    context.lineWidth = 5;
    context.stroke();

    // left eye
    context.beginPath();
    context.arc(210, 100, 10, 0, 2 * Math.PI);
    context.fillStyle = 'black';
    context.fill();
    context.stroke();

    // left eye
    context.beginPath();
    context.arc(260, 100, 10, 0, 2 * Math.PI);
    context.fillStyle = 'black';
    context.fill();
    context.stroke();

    //nose
    context.beginPath();
    context.moveTo(235, 125);
    context.lineTo(245, 145);
    context.lineTo(225, 145);
    context.fillStyle = 'black';
    context.fill();
    context.closePath();
    context.stroke();

    //mouth
    context.beginPath();
    var mouthCenterY = 180;
    var mouthWidth = 40;
    var mouthHeight = 20;
    var mouthLeft = scullCenterX - mouthWidth/2;
    var mouthRight = mouthLeft + mouthWidth;
    var mouthTop = mouthCenterY - mouthHeight/2;
    var mouthBottom = mouthTop + mouthHeight;
    context.rect(mouthLeft, mouthTop, mouthWidth, mouthHeight);

    context.moveTo(mouthLeft, mouthCenterY);
    context.lineTo(mouthRight, mouthCenterY);


    context.moveTo(scullCenterX, mouthTop);
    context.lineTo(scullCenterX, mouthBottom);

    for(var i = mouthLeft + 5; i < scullCenterX; i = i + 5) {
        context.moveTo(i, mouthTop);
        context.lineTo(i, mouthBottom);
    }

    for(var i = mouthRight - 5; i > scullCenterX; i = i - 5) {
        context.moveTo(i, mouthTop);
        context.lineTo(i, mouthBottom);
    }

    context.lineWidth = 2;
    context.stroke();

}