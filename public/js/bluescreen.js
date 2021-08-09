var title = document.getElementById("home");
var otherTitle =  document.getElementById("little");


$('#bsod').ready(function() {
    $("#header").hide();
    $("#home").hide();
    $("#little").hide();

    var f = document.getElementById('blink');
    setInterval(function() {
        f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 500);
  });

document.addEventListener('keydown', function (event) {
    if (event.key === 'd') {
      document.body.style = " background-color: #111111";
    }
  });