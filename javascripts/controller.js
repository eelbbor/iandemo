function IanGameControllerStart(centerX, centerY) {
    var canvas = document.getElementById("game_canvas");
    canvas.width=self.innerWidth - 50;
    canvas.height=self.innerHeight - 50;
    canvas.style.border="1px solid #000000";
    DrawScull(canvas, centerX, centerY);
}

function DrawScull(canvas, centerX, centerY) {
    var context = canvas.getContext("2d");

    centerX = centerX || canvas.width / 2;
    centerY = centerY || canvas.height / 2;
    
    var width = 130;
    var height = 240;

    var leftBoundry = centerX - width/2;
    var rightBoundry = leftBoundry + width;
    var topBoundry = centerY - height/2;
    var bottomBoundry = topBoundry + height;
    
    // begin custom shape
    context.beginPath();

    //top of head
    var originY = topBoundry + 80;
    context.moveTo(leftBoundry, originY);
    context.bezierCurveTo(leftBoundry, topBoundry, rightBoundry, topBoundry, rightBoundry, originY);

    //right cheekbone
    var cheekboneTop = originY + 25;
    var cheekboneBottom = originY + 50;
    var cheekboneWidth = 20;
    context.bezierCurveTo(rightBoundry, originY, rightBoundry, cheekboneTop, rightBoundry - cheekboneWidth, cheekboneBottom);
    
    //right jaw
    var jawXUpperOffset = 30;
    var jawXLowerOffset = 40;

    var jawTop = cheekboneBottom + 10;
    var jawMid = cheekboneBottom;
    var jawBottom = bottomBoundry - 60;
    context.bezierCurveTo(rightBoundry - jawXUpperOffset, jawTop, rightBoundry - jawXLowerOffset, jawMid, rightBoundry - jawXLowerOffset, jawBottom);

    //left cheekbone
    context.moveTo(leftBoundry, originY);
    context.bezierCurveTo(leftBoundry, originY, leftBoundry, cheekboneTop, leftBoundry + cheekboneWidth, cheekboneBottom);
    //left jaw
    context.bezierCurveTo(leftBoundry + jawXUpperOffset, jawTop, leftBoundry + jawXLowerOffset, jawMid, leftBoundry + jawXLowerOffset, jawBottom);

    //chin
    var chinXOffset = 40;
    var chinBottom = bottomBoundry - 40;
    context.bezierCurveTo(leftBoundry + chinXOffset, chinBottom, rightBoundry - chinXOffset, chinBottom, rightBoundry - chinXOffset, jawBottom);

    // complete custom shape
    context.lineWidth = 4;
    context.stroke();

    // left eye
    var eyeDiameter = 10;
    var eyeXOffset = 25;
    context.beginPath();
    context.arc(centerX - eyeXOffset, originY, eyeDiameter, 0, 2 * Math.PI);
    context.fillStyle = 'black';
    context.fill();
    context.stroke();

    // right eye
    context.beginPath();
    context.arc(centerX + eyeXOffset, originY, eyeDiameter, 0, 2 * Math.PI);
    context.fillStyle = 'black';
    context.fill();
    context.stroke();

    //nose
    context.beginPath();
    var noseTop = centerY - 15;
    var noseDim = 20;
    var noseBottom = noseTop + noseDim;
    context.moveTo(centerX, noseTop);
    context.lineTo(centerX + noseDim/2, noseBottom);
    context.lineTo(centerX - noseDim/2, noseBottom);
    context.fillStyle = 'black';
    context.fill();
    context.closePath();
    context.stroke();

    //mouth
    context.beginPath();
    var mouthCenterY = centerY + 40;
    var mouthWidth = 40;
    var mouthHeight = 20;
    var mouthLeft = centerX - mouthWidth/2;
    var mouthRight = mouthLeft + mouthWidth;
    var mouthTop = mouthCenterY - mouthHeight/2;
    var mouthBottom = mouthTop + mouthHeight;
    context.rect(mouthLeft, mouthTop, mouthWidth, mouthHeight);

    context.moveTo(mouthLeft, mouthCenterY);
    context.lineTo(mouthRight, mouthCenterY);


    context.moveTo(centerX, mouthTop);
    context.lineTo(centerX, mouthBottom);

    for(var i = mouthLeft + 5; i < centerX; i = i + 5) {
        context.moveTo(i, mouthTop);
        context.lineTo(i, mouthBottom);
    }

    for(var i = mouthRight - 5; i > centerX; i = i - 5) {
        context.moveTo(i, mouthTop);
        context.lineTo(i, mouthBottom);
    }

    context.lineWidth = 2;
    context.stroke();
}
