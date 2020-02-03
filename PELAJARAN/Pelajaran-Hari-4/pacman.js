// tangga pacman
var inputanUser = 5
var star = ''
var starstar = ''
var i = 0
for (i = 0; i <= inputanUser; i++) {
    // bintang banyak - ke dikit
    for (var k = 0; k <= inputanUser - i; k++) {
        star += ' * '
    }
    star += '\n'
    // bintang dikit ke banyak
    for (var j = 0; j < 1 + (1 + i); j++) {
        starstar += ' * '
    }
    starstar += '\n'
}

console.log(`${star}`)
console.log(`${starstar}`)