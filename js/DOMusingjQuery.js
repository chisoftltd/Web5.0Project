$(document).ready(function () {
    manipulateDOM();
});

function manipulateDOM(){
    var h1Header = $('h1');
    var h3Headers = $('h3');
    var lastH3Header = $('h3:last');
    h1Header.text('Hello World!');
    h3Headers.first().text('Hello Africa!');
    h3Headers.css('color','#37887D');
    h3Headers.first().css('text-decoration', 'line-through');
    lastH3Header.css('background-color', '#53226A')
;}