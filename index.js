var gl;

function start() {
  var glElem = document.getElementById('gl');
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  ctx.font = '50px Arial';
  ctx.fillStyle = "red";
  ctx.fillText('Hello World', 100, 100);
  gl = initWebGL(glElem);
  if (gl) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.TEXTURING);
    gl.enable(gl.TEXTURE_2D);
    gl.enable(gl.DEPTH_TEST);

    var texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
    gl.generateMipmap(gl.TEXTURE_2D);

    gl.viewport(0, 0, glElem.width, glElem.height);
  }
}

function initWebGL(elem) {
  gl = null;

  try {
    gl = elem.getContext('webgl') || elem.getContext('experimental-webgl');
  } catch(e) {
  }

  if (!gl) {
    alert('Unable to initialize WebGL. Your browser may not support it.');
    gl = null;
  }

  return gl;
}
