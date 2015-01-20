var titleText = "Jasmine project. Cognits!";
var listOfItems = Array();


function helloWorld() {
  return "hello world";
}


function title() {
  document.write("<h1>" + titleText + "</h1>");
}
title();

function writeFooterOfPage() {
    document.write("<p> This is: " + titleText + "</p>");
}


function suma(x, y) {

  x = parseFloat(x);
  y = parseFloat(y);

  if( isNaN(x)  || isNaN(y) ) {
    return null;
  }
  return x + y;
}
suma("this should now work",5);
