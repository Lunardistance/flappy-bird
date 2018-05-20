window.onload = function(){
    
const canvas = document.getElementById('canvas');
canvas.width=window.innerWidth;
canvas.height = 700;

const ctx = canvas.getContext('2d');

const environment = new Environment(canvas, ctx);
const bird = new Bird(250, 250, ctx)
gameLoop();

ctx.fillStyle = "#ffffff";

//main game loop
function gameLoop(){
    ctx.fillRect(0,0,canvas.width,canvas.height);
    environment.update();
    environment.render();
    bird.update();
    bird.render();
    window.requestAnimationFrame(gameLoop);
    }

};




// ctx.fillRect(100, 200, 400, 150)
// //^^draw the shape (x coo., y coo., width, height)

// ctx.fillStyle = "#00ff00";
//^^ style the shape
// ctx.fillRect(200,300,400,150)

// ctx.fillStyle = "#0000ff";
// ctx.fillRect(300,400,400,150)

// ctx.strokeStyle = '#ff0000'
// ctx.strokeRect(400,500, 400, 150)



// const bird1 = new Image();
// bird1.src = '../images/bird1.png'
// bird1.onload = function(){
//     ctx.drawImage(bird1, 500, 20);   
// }

//^^Whenever we need to draw an actual image on the canvas from a file
//^^We need to place the image file within a callback function as written
//^^In the code above.  
//OR we can simply wrap the entire thing in 
//a function so then the images are drawn because they are already within the function
//by using ctx.drawImage(document.getElementByID('bird1'), 500, 700)
//We need to create a server with the reload node module
//^^ (npm init>npm install --save-dev reload)  