var x = 5;
var y = 10;

function or() {
    return x > 10 || y<10;
}
function and() {
    return x < 10 && y>10;
}
function not() {
    return ! x == 10;
}
console.log("função retornada  OR: " ,or());
console.log("funçao retornada AND" , and());
console.log("funçao retornada NOT" , not());