var python = require('lezer-python');
var input = "x=10\nprint(10)";
var tree = python.parser.parse(input);
var cursor = tree.cursor();
cursor.firstChild();
cursor.nextSibling();
console.log(cursor.type.name);
console.log(input.substring(cursor.from, cursor.to));
