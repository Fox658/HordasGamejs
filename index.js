// console.log("hello World");

function AddElementeHtml(tagItem = 'h1', text = 'Hola mundo') {
    var tag = document.createElement(tagItem);
    var texts = document.createTextNode(text);
    tag.appendChild(texts);
    var element = document.getElementById('test');
    element.appendChild(tag);
} 
var element = "h2";
var text = "this is not what you want";
AddElementeHtml(element, text);
AddElementeHtml();