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
  
  let someNumber = vhTOpx(7.5);
  
  
    let i = 0;
  var vDist;
  var elem;
  var win;
  for (let a = 0; a < 35; a++) {
    /* do {*/
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
    
    i++;
      
  /*  } while (vDist > someNumber);*/
  }
   
  
  
  
  