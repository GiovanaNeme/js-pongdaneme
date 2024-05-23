function setup() {
    createCanvas(300, 300);
    background("pink");
    }
    
    function draw() {
    
      stroke("blue")
    fill("rgb(247,98,190)");
  
   //console.log(mouseisPressed);
  
    if (mouseIsPressed) {
     rect(mouseX, mouseY, 20, 35); 
    }
    }
      