function ChuNhat(chieuDai, chieuRong) {
  this.chieuDai = chieuDai;
  this.chieuRong = chieuRong;

  this.dienTich = function() {
    return this.chieuDai*this.chieuRong;
  }

  this.chuVi = function() {
    return 2*(this.chieuDai+this.chieuRong);
  }
}

function getRandomColor() {
   var red = Math.floor(Math.random()*255);
   var green = Math.floor(Math.random()*255);
   var blue = Math.floor(Math.random()*255);
   return "rgb("+ red + "," + blue + "," + green + ")";
}

function create(hcn) {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.beginPath();
  ctx.rect(100, 100, hcn.chieuDai, hcn.chieuRong);
  ctx.stroke();
}

function createRandom() {
  var x = Math.floor(Math.random()*(1368-250));
  var y = Math.floor(Math.random()*(768-150));
  var ctx = document.getElementById("canvas").getContext("2d");
  var hcn = new ChuNhat(250,150);
  ctx.beginPath();
  ctx.rect(x, y, hcn.chieuDai, hcn.chieuRong);
  ctx.fillStyle = getRandomColor();
  ctx.strokeStyle = getRandomColor();
  ctx.stroke();
  ctx.fill();
}

var hcn = new ChuNhat(300,200);
create(hcn);
createRandom();
