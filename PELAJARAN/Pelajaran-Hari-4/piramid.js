var inputanUser = 5
var star = ''
var i = 0
for (i = 0; i <= inputanUser; i++) {
    // bintang banyak - ke dikit
    for (var k = 1; k <= inputanUser - i; k++) {
        star += ' '
    }
    for (var j = 0; j < i; j++) {
        star += '='
    }
    for (var l = 0; l <= i; l++) {
        star += '*'
    }
    star += '\n'
}

console.log(`${star}`)