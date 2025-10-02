
let pantalla = 0; 
let imagenes = []; // arreglo de imágenes
let textos = [];   // arreglo de textos 

function preload() {
  // Cargamos las imágenes en el arreglo
  imagenes[0] = loadImage("data/imagen_01.jpeg");   // portada
  imagenes[1] = loadImage("data/imagen_02.jpg"); // primera imagen - aladin y la princesa
  imagenes[2] = loadImage("data/imagen_03.jpg"); // segunda imagen - el hechizero
  imagenes[3] = loadImage("data/imagen_04.jpg"); // tercera imagen - ingresando a la cueva
  imagenes[4] = loadImage("data/imagen_05.jpeg"); // cuarta imagen - aladin y la lampara
 
  // Cargamos los textos en el arreglo
  textos[0] = "Aladino un joven pobre y soñador,\n recorre las calles de la \n ciudad buscando una oportunidad para \n cambiar su destino.";
  textos[1] = "Un misterioso hechicero se le acerca y le dice: \n ‘Si me ayudas, te daré riquezas inimaginables'.";
  textos[2] = "Guiado por el extraño, Aladino llega a una cueva llena de tesoros brillantes.";
  textos[3] = "En el centro de la cueva, Aladino encuentra una lámpara vieja. El hechicero le grita ‘¡Dámela!’ ¿Que elije hacer Aladin?"; // 1er conflicto 
  textos[4] = "Entregar la lampara al hechicero,  que este huya sin cumplir su promesa, y terminar encerrado en la cueva"; //opcion A - 1er conflicto
  textos[5] = "Negarse a entregarla, terminar encerrado en la cueva, pero esta vez conservando la lampara"; //opcion B - 1er conflicto
  
//COSAS QUE FALTAN POR HACER  
//definir los espacios en los textos
//crear pantallas faltantes
//sonido de fondo
//funciones con parametros

//CORRECCION!!!!
//ELIMINAR EL GRAN IF - MUCHAS PANTALLAS IGUALES RESOLVERLAS CON FUNCIONES
//ejemplo
// FUNCION DibujarP(numpantallaPARAMETROS) FUNCION CON PARAMETROS PARA DIBUJAR CADA PANTALLA
//texto(numpantalla)
//imagen(numpantalla)
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0);

  if (pantalla === 0) {
    // -------- PORTADA --------
    image(imagenes[0], 0, 0, width, height);

    // Título centrado
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("La lámpara de Aladino", width/2, height/5);

    // Botón Comenzar (izquierda)
    fill(50, 100, 200);
    rect(50, height - 100, 180, 50, 10);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Comenzar", 50 + 90, height - 100 + 25);

    // Botón Créditos (derecha)
    fill(200, 80, 80);
    rect(width - 230, height - 100, 180, 50, 10);
    fill(255);
    text("Créditos", width - 230 + 90, height - 100 + 25);

  } else if (pantalla === 1) {
    // -------- PANTALLA DE AVENTURA GRAFICA 1 --------
    image(imagenes[1], 0, 0, width, height);

    // Texto narrativo en medio 
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(22);
    text(textos[0], width/2, height/2 -90,300,200);


    // Botón continuar
    fill(50, 200, 100);
    rect(width/2 - 90, height - 50, 180, 40, 10);
    fill(255);
    textSize(18);
    text("Siguiente", width/2, height - 30);

  } else if (pantalla === 2) {
    // -------- CRÉDITOS --------
    image(imagenes[2], 0, 0, width, height);

    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Créditos:\n Godoy Lourdes y Sofia Gramajo PMIW \n ©2025", width/2, height/2);
  } else if (pantalla === 3) {     
     // -------- PANTALLA DE AVENTURA GRAFICA 2 --------
    image(imagenes[2], 0, 0, width, height);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(22);
    text(textos[1], width/2, height/2 -90,300,200);


    // Botón continuar
    fill(50, 200, 100);
    rect(width/2 - 90, height - 50, 180, 40, 10);
    fill(255);
    textSize(18);
    text("Siguiente", width/2, height - 30);
  }
  else if (pantalla === 3) {     
     // -------- PANTALLA DE AVENTURA GRAFICA 3 --------
    image(imagenes[3], 0, 0, width, height);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(22);
    text(textos[1], width/2, height/2 -90,300,200);


    // Botón continuar
    fill(50, 200, 100);
    rect(width/2 - 90, height - 50, 180, 40, 10);
    fill(255);
    textSize(18);
    text("Siguiente", width/2, height - 30);

  }
}

// -------------------------
// Interacción con clics
// -------------------------
function mousePressed() {
  if (pantalla === 0) {
    // Botón comenzar
    if (mouseX > 50 && mouseX < 230 && mouseY > height - 100 && mouseY < height - 50) {
      pantalla = 1;
    }
    // Botón créditos
    if (mouseX > width - 230 && mouseX < width - 50 && mouseY > height - 100 && mouseY < height - 50) {
      pantalla = 2;
    }

  } else if (pantalla === 1) {
    // Botón continuar a pantalla 3
    if (mouseX > width/2 - 90 && mouseX < width/2 + 90 && mouseY > height - 50 && mouseY < height - 10) {
      pantalla = 3; 
    }

  } else if (pantalla === 2) {
    // De la pantalla créditos, vuelve a la primer pantalla
    pantalla = 0;
  }
}

  
