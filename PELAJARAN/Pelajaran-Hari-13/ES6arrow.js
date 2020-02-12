// ES6 : Function ( Arrow Function )
// function di ES6
// () => {}
// (parameter) => {badan program}
var sum = (x, y) => {
    return x + y
}

var sum2 = (x, y) => x + y
var result = sum2(3, 4)
console.log(result);

// name disini adalah parameter
var hello = name => console.log('Hello ' + name)
// cara memanggil function nya
hello('Andrew')