function handleMouseMove() {
    var button = document.getElementById("No");
    var x = Math.floor(Math.random() * (window.innerWidth-100));
    var y = Math.floor(Math.random() * (window.innerHeight-100));
    button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";
  }
  
  function handleClick() {
    window.location.href = "2nd.html";
  }
  