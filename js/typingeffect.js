var i = 0;
  var txt = 'My name is Jacob Cullum';
  var speed = 50;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  window.onload = function() {
    typeWriter();
  };