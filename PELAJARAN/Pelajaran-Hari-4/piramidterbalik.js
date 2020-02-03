// var inputanUser = 5
// var star = ''
// // var i = 0
// // var k = 0
// // var j = 0
// for (var i = 0; i <= inputanUser; i++) {

//     // bintang dikit ke banyak
//     for (var j = 0; j < i; j++) {
//         star += ' '
//     }

//     // bintang banyak - ke dikit
//     for (var k = 0; k <= inputanUser; k++) {
//         star += ' * '
//     }
//     star += '\n'
// }

// console.log(`${star}`)

var inputanUser = 5
var star = ''

for (var i = 1; i <= inputanUser; i++) {

    // bintang dikit ke banyak
    for (var j = 0; j <= i; j++) {
        star += ' '
    }

    // bintang banyak - ke dikit
    for (var k = i; k <= inputanUser; k++) {
        star += '*'
    }
    for (var m = i + 1; m <= inputanUser; m++) {
        star += '*'
    }
    star += '\n'
}

console.log(`${star}`)