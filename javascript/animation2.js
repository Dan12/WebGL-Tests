var animation2 = {
  "setupFunc": function(){
    A2cubeBuffer = createCube(1,
    [1.0,0.0,1.0,1.0,
     1.0,0.0,0.0,1.0,
     0.0,1.0,0.0,1.0,
     0.0,0.0,1.0,1.0,
     1.0,1.0,0.0,1.0,
     0.0,1.0,1.0,1.0]);
     
    A2pyrBuffer = createPyramid(1,
    [1.0,0.0,0.0,1.0,
     0.0,1.0,0.0,1.0,
     0.0,0.0,1.0,1.0,
     1.0,1.0,0.0,1.0,
     0.0,1.0,1.0,1.0]);
  },
  
  "drawFunc": function(){
    mvTranslate([0.0, 0.0, -60.0]);
    mvPushMatrix();
    
    mvTranslate([0.0, A2ypos, 0.0]);
    mvRotate(A2rotatey, [0, 1, 0]);
    mvTranslate([A2dim, 0, 0]);
    mvPushMatrix();
    
    mvRotate(A2rotatey, [0, 1, 0]);
    drawArrayBuffer(A2cubeBuffer[0], A2cubeBuffer[1], A2cubeBuffer[2], gl.TRIANGLES);
    mvTranslate([0,1.5,0]);
    mvScale(1,0.5,1);
    drawArrayBuffer(A2pyrBuffer[0], A2pyrBuffer[1], A2pyrBuffer[2], gl.TRIANGLES);
    
    mvPopMatrix();
    mvPopMatrix();
  },
  
  "animateFunc": function(){
    var currentTime = (new Date).getTime();
    if (A2lastUpdateTime) {
      var delta = currentTime - A2lastUpdateTime;
  
      var scaleUpdate = (30 * delta) / 1000.0;
      A2ypos+=A2yposInc*scaleUpdate;
      A2yposInc*=1.02;
      if(A2ypos > -1*A2yposStart){
        A2ypos = A2yposStart;
        A2dim = 0;
        A2yposInc = 0.02;
      }
      A2rotatey+=A2rotateyInc*scaleUpdate;
      A2dim+=A2dimInc*scaleUpdate;
    }

    A2lastUpdateTime = currentTime;
  }
};

//globla variables
var A2cubeBuffer;
var A2pyrBuffer;

var A2lastUpdateTime;

var A2rotatey = 0;
var A2rotateyInc = 8;
var A2yposStart = -23;
var A2ypos = A2yposStart;
var A2yposInc = 0.02;
var A2dim = 0;
var A2dimInc = 0.07;