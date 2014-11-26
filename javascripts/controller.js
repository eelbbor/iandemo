function IanGameController(canvasID, centerX, centerY) {
    this.canvas = document.getElementById(canvasID);
    this.canvas.width=self.innerWidth - 20;
    this.canvas.height=self.innerHeight - 20;
    this.canvas.style.border="1px solid #000000";
    this.centerX = centerX || this.canvas.width / 2;
    this.centerY = centerY || this.canvas.height / 2;
    this.context = this.canvas.getContext('2d');
}

IanGameController.prototype.drawScull = function() {
    this.imageObj = new Image();
    this.imageObj.src = 'reference_scull.png';

    this.imageObj.onload = (function() {
        this.context.drawImage(this.imageObj, this.centerX - 65, this.centerY - 65, 130, 130);
    }).bind(this);
}

IanGameController.prototype.drawScull_OLD = function() {
    var context = this.canvas.getContext("2d");
    
    var width = 130;
    var height = 240;

    var leftBoundry = this.centerX - width/2;
    var rightBoundry = leftBoundry + width;
    var topBoundry = this.centerY - height/2;
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
    context.arc(this.centerX - eyeXOffset, originY, eyeDiameter, 0, 2 * Math.PI);
    context.fillStyle = 'black';
    context.fill();
    context.stroke();

    // right eye
    context.beginPath();
    context.arc(this.centerX + eyeXOffset, originY, eyeDiameter, 0, 2 * Math.PI);
    context.fillStyle = 'black';
    context.fill();
    context.stroke();

    //nose
    context.beginPath();
    var noseTop = this.centerY - 15;
    var noseDim = 20;
    var noseBottom = noseTop + noseDim;
    context.moveTo(this.centerX, noseTop);
    context.lineTo(this.centerX + noseDim/2, noseBottom);
    context.lineTo(this.centerX - noseDim/2, noseBottom);
    context.fillStyle = 'black';
    context.fill();
    context.closePath();
    context.stroke();

    //mouth
    context.beginPath();
    var mouthCenterY = this.centerY + 40;
    var mouthWidth = 40;
    var mouthHeight = 20;
    var mouthLeft = this.centerX - mouthWidth/2;
    var mouthRight = mouthLeft + mouthWidth;
    var mouthTop = mouthCenterY - mouthHeight/2;
    var mouthBottom = mouthTop + mouthHeight;
    context.rect(mouthLeft, mouthTop, mouthWidth, mouthHeight);

    context.moveTo(mouthLeft, mouthCenterY);
    context.lineTo(mouthRight, mouthCenterY);


    context.moveTo(this.centerX, mouthTop);
    context.lineTo(this.centerX, mouthBottom);

    for(var i = mouthLeft + 5; i < this.centerX; i = i + 5) {
        context.moveTo(i, mouthTop);
        context.lineTo(i, mouthBottom);
    }

    for(var i = mouthRight - 5; i > this.centerX; i = i - 5) {
        context.moveTo(i, mouthTop);
        context.lineTo(i, mouthBottom);
    }

    context.lineWidth = 2;
    context.stroke();
}

IanGameController.prototype.drawBones = function(centerX, centerY) {
    var context = this.canvas.getContext("2d");
}