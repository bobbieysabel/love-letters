/* calculates vertical distance between two elements using respective distances from top of viewport*/
function getVerticalDistance(elem1, elem2) {
    let x = window.scrollY + elem1.getBoundingClientRect().top;
    let y = window.scrollY + elem2.getBoundingClientRect().top;
    let distance = Math.abs(x-y);
    return distance;
  }
  
  /* converts vh to pixels */
  function vhTOpx(vh) {
    let root = document.getElementsByTagName("html")[0];
    let viewportHeight = root.clientHeight;
    px = (viewportHeight * vh)/100;
    return px;
  }
  
  /*just choosing this number for now, should probably make these global at some point*/
  let someNumber = vhTOpx(7.5);
  
  
  /*all this stuff adds the windows*/
    var i = 0;
  var vDist;
  var elem;
  var win;

   do {
    i++;
      elem = document.getElementById("yellow-building--1");
  win = document.createElement("div");
  win.classList.add("black-window");
      win.id = "bwin" + i;
  elem.appendChild(win);
  vDist = getVerticalDistance(document.getElementById("bwin" + i), document.getElementById("red-building"));
      console.log(document.getElementById("bwin" + i));
      console.log(vDist);
      console.log(someNumber);
      console.log(i);
      
    } while (vDist > someNumber);

    elem = document.getElementById("bwin" + i);
    elem.parentNode.removeChild(elem);

   