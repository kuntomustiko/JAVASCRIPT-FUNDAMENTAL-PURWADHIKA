// Senin-03-02-2020


var bulan2 = 'march'

// index dimulai dari nol

var month = ['January', 'February', 'March']
var days = [
    'Sunday',
    'Monday',
    'Thuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

console.log((month[2]))
console.log((days[1]))

/////////////
// METHODS //
////////////

// Mengubah menjadi satu string dan dipisahkan dengan koma
var monthString = month.toString()
console.log(monthString);

// menjadi satu string dengan karakter tertentu sebagai penghubung
console.log(
    month.join(', ')
)

// Mengurutkan data pada array
console.log(
    days.sort()
)

// Membalik urutan data di array, dari data sebenarnya
console.log(
    days.reverse()
)

// Mencari index data
console.log(
    days.indexOf('Saturday')
)


/////////////////
// PROPERTIES //
///////////////


// untuk mengetahui banyaknya data pada sebauh array
var colors = ["Red", "Green", "Blue", "Orange"]
var lenColors = colors.length

for (var i = 0; i < lenColors; i++) {

}

////////////////
// PUSH, POP //
//////////////

// Push, untuk menambahan data baru ke index terakhir
// Pop, untuk mengeluarkan data dari index terakhir

var pro = ['Ceb', 'Dendi', 'Notail']

pro.push('MidOne')
console.log(pro)

pro.push('Topson', 'Ana')
console.log(pro)

// hanya mengeluarkan data yang paling belakang (tidak bisa di isi sesuatu)
pro.pop()
console.log(pro)

/////////////////////
// SHIFT, UNSHIFT //
///////////////////

var heroes = ["Rubbick", "Shadow Demon", "Medusa", "ClockWorkd"]

// Menghapus di awal index
heroes.shift()
console.log(heroes)

// Menambah di awal index
heroes.unshift("invoker")
console.log(heroes)

/////////////////////
// SPLICE, DELETE //
///////////////////

// Splice, hapus data tertentu, yang lain geser
// Delete, akan menjadi undefined

var words = ['Please', 'Save', 'Me', 'Now']

// Hapus mulai dari index 1, sebanyak 2 data
words.splice(1, 2)
console.log(words)
// ['Please', 'Now']

// Hapus mulai dari index 1 sampai terakhir
words.splice(1)


var words = ['Please', 'Save', 'Me', 'Now']

delete words[1]
console.log(words)

////////////
// SLICE //
//////////

// Copy sebagian data tanpa mengubah data aslinya
var hari = [
    'Sunday',
    'Monday',
    'Thuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

// Copy data dari index 2 sampai index terakhir
var hariOne = hari.slice(2)
console.log(hariOne)

// Copy data dari index 2-3
var hariTwo = hari.slice(2, 4)
console.log(hariTwo)