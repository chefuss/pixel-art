var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
var $paleta = $('#paleta');
var $grillaPixeles = $('#grilla-pixeles');
// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var indicadorColor = document.getElementById('indicador-de-color');
var color = '';
var mouseApretado = false;
var $botonBorrar = $('#borrar');

//iniciar palata y grilla.
crearPaleta();
crearGrilla();


$paleta.click(function(e) {
  color = e.target.style.backgroundColor;
  colorDelIndicador(color);
});
//pintar un pixel.
$grillaPixeles.click(function(e) {
  e.target.style.backgroundColor = color;
});
$botonBorrar.click(borrar);

$('#batman').click(function() {
  cargarSuperheroe(batman);
});
$('#wonder').click(function() {
  cargarSuperheroe(wonder);
});
$('#flash').click(function() {
  cargarSuperheroe(flash);
});
$('#invisible').click(function() {
  cargarSuperheroe(invisible);
});
$('#guardar').click(function() {
  guardarPixelArt();
})
// cambiar el valor de indicadorColor por el valor seleccionado de la rueda de colores.
colorPersonalizado.addEventListener('change',
  (function() {
    // Se guarda el color de la rueda en colorActual
    color = $colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    // indicadorColor.style.backgroundColor = colorActual;
    colorDelIndicador(color);

  })
);
$('#grilla-pixeles div').mousedown(mouseActivo);
$('#grilla-pixeles div').mouseup(mouseInactivo);
$('#grilla-pixeles div').mousemove(pintar);
$grillaPixeles.mouseleave(mouseInactivo);

function mouseActivo() {
  mouseApretado = true;
}
function mouseInactivo () {
  mouseApretado = false;
}

//crear paleta de colores dinámicamente.
function crearPaleta() {
  for (var i = 0; i < nombreColores.length; i++) {
    var contenedor = document.createElement('div');
    contenedor.style.backgroundColor = nombreColores[i];
    contenedor.className = 'color-paleta';
    $paleta.append(contenedor);
  }
}
//crear la grilla de pixeles.
function crearGrilla() {
  for (var i = 0; i <= 1750; i++) {
    var pixel = document.createElement('div');
    $grillaPixeles.append(pixel);
  }
}

function colorDelIndicador(valor) {
  return indicadorColor.style.backgroundColor = valor;
}

function pintar() {
  if (mouseApretado) {
    $(this).css('background-color', color);
  }
}
function borrar() {
  $grillaPixeles.find('div').animate({'background-color': ''}, 1000);
}
