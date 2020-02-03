// WHILE LOOP
// Mengulang kode selama kondisi tertentu terpenuhi
// var number = 0

// // kondisi while harus true untuk running block kode
// while (number < 5) {
//     // block kode yang akan di running jika condition bernilai true
//     console.log(`Putaran ke ${number} `)
//     number++
// }

// ctrl + c --> untuk memberhentikan ketika infite loop 

// ----------------------------------------------------

// DO WHILE
// number = 0
// do {
//     console.log(`Do while ke - ${number}`)
//     number++
// } while (number < 5)


// -------------------------------------------
// TUGAS
// var number = 0
// while (number <= 10) {
//     console.log(`ke - ${number}`)
//     number += 2
// }

// // var number = 1
// // do {
// //     console.log(`ke - ${number}`)
// //     number += 2
// // } while (number <= 10) 

// ----------------------------------------------------------
// FOR LOOP

// for (number = 0; number < 5; number++) {
//     console.log(`for ke - ${number}`)
// }

/*
    1. Pertama kali running akan membaca kode yang 'kiri'
    2. Akan running kode 'tengah' untuk mendapatkan nilai boolean (T/F)
        2.1. -- jika T (true), maka running kode pada block kurung kurawal
        2.2. --jika F (false), maka akan berhenti / keluar dari fo loop
    3. Jika sudah selesai running kode pada kurung kurawal / step 2.1
        Maka akan running kode 'kanan'
        kemudian running kode 'tengah' / step 2
        Dan akan terus mengulang hingga step 2 menghasilkan False (stop)
*/


//------------------------------------------------------------------------
// DRAWING

// Horizontal Stars
// * * * * *

// var stars = ''

// for (var i = 0; i < 5; i++) {
//     stars += " * "
// }
// console.log(stars)


// For pertama untuk banyak baris
// For kedua untuk banyak kolom perbaris

// var row = 10
// var stars = ''
// for (var i = 0; i <= row; i++) {
//     for (var j = 0; j < row: j++) {
//         stars += ' * '
//     }
//     stars += '\n'
// }

// console.log(stars)


// --- Tangga Normal
// var row = 5
// var stars = ''
// for (var i = 0; i <= row; i++) {
//     for (var j = 0; j < i + 1; j++) {
//         stars += ' * '
//     }
//     stars += '\n'
// }

// console.log(stars)



// --- Tangga kebalik
// var row = 0
// var stars = ''
// for (var i = 5; i >= row; i--) {
//     for (var j = 0; j <= i; j++) {
//         stars += ' * '
//     }
//     stars += '\n'
// }

// console.log(stars)

// tangga pacman
var inputanUser = 5
var star = ''
var i = 0
for (i = 0; i <= inputanUser; i++) {
    // bintang banyak - ke dikit
    for (var k = 0; k <= inputanUser - i; k++) {
        star += ' * '
    }
    star += '\n'
}
for (i = 1; i <= inputanUser; i++) {
    // bintang dikit ke banyak
    for (var j = 0; j < 1 + i; j++) {
        star += ' * '
    }
    star += '\n'
}
console.log(`${star}`)