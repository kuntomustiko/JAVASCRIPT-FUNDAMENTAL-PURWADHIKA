var x = 5
var y = '5'
console.log(x >= y)

var age = 4
var kategori

if (age >= 0 && age <= 5) {
    console.log('balita')
} else if (age >= 6 && age <= 11) {
    console.log('kanak-kanak')
} else if (age >= 12 && age <= 25) {
    console.log('Remaja')
} else if (age >= 26 && age <= 45) {
    console.log('Dewasa')
} else if (age >= 46 && age <= 65) {
    console.log('Lansia')
} else {
    console.log('Manula')
}