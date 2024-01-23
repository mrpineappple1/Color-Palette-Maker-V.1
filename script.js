document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('backcolor').addEventListener('input', backCol);
  document.getElementById('text').addEventListener('input', textCol);
  document.getElementById('prim').addEventListener('input', primCol);
  document.getElementById('second').addEventListener('input', secondCol);
  document.getElementById('accent').addEventListener('input', accentCol);
});

function backCol() {
  var color = document.getElementById('backcolor').value;
  document.getElementById("example").style.background = color;
  document.getElementById('background').innerHTML = color;
  document.querySelector(".dback").style.background = color;
}

function textCol() {
  var color2 = document.getElementById('text').value;
  document.getElementById("example").style.color = color2;
  document.getElementById('textcol').innerHTML = color2;
  document.querySelector(".dtext").style.background = color2;
}

function primCol() {
  var color3 = document.getElementById('prim').value;
  document.querySelector(".btn1").style.background = color3;
  document.getElementById('primcol').innerHTML = color3;
  document.querySelector(".dprim").style.background = color3;
}

function secondCol() {
  var color4 = document.getElementById('second').value;
  document.querySelector(".btn2").style.background = color4;
  document.getElementById('secondcol').innerHTML = color4;
  document.querySelector(".dsecond").style.background = color4;
}

function accentCol() {
  var color5 = document.getElementById('accent').value;
  document.getElementById('accentcol').innerHTML = color5;
  document.getElementById('below').style.background = color5;
  document.querySelector(".daccent").style.background = color5;
}
