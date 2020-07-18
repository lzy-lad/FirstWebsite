let img; 

function preload() { 
img = loadImage ('https://i.imgur.com/USVvvW2.png'); 
} 

function setup() { 
createCanvas(1920, 6300); 

text("The image would be loaded below:", 20, 20); 
image(img, 0, 0,1920, 6204); 
} 
