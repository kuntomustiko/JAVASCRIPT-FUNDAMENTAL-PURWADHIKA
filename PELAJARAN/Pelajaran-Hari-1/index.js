// 1. memunculkna teks di terminal
console.log("hello world code")

// ---------------------------------------------------------------
// 2. Variable
// untuk menyimpan sebuah value / data

// tidak boleh di awali dengan angka
// boleh mengandung huruf, number, underscore
// 2 kata menggunakan camelCase

var _name = "john wick" // string
var greet = "Hello, i'am john wick"
var firstName = 'John'
var lastName = 'wick'
var sarcas = 'Masakkannya "enak" kok'
var bisa = 'Hello, i\'am iron man'

console.log(_name);
console.log(greet)
console.log(sarcas)
console.log(bisa)

// * titik koma opsional gak wajib. kecuali kalau mau 2 console dalam menulis 1 baris, untuk penanda pembatas
// '' "" antara petik dua dan satu boleh digunakan secara bebas untuk string
// gunakan \ untuk membuat petik yang sama dengan peting antara string

// ----------

// Data Type
var month = "january" // string
var date = 28 // integer (bilangan bulat)
var pi = 3.14 // float (bilangan desimal)
var single = true // boolean (true, false)


// --
// setiap kata yang diikuti () maka itu function
// funtion typeof untuk mengetahui tipe data dari sebuah variable
// --

var result = typeof (pi)
console.log(result)

// --
// length --> untuk mengetahui panjang / jumlah karakter dari string
// --
var x = "halo dunia"
console.log(x.length)

// menampilkan text
alert("Halo member student purwadhika")

// Menerima input dari User
var inputUser = prompt("ketikkan sesuatu")

var nameName = prompt('your name: ')
alert('nama kamu adalah ' + nameName)
console.log('nama kamu adalah ' + nameName)

console.log("this is my first line \nthis is my second line")
console.log("this is my first line" + "\n" + "this is my second line")


// ---------------------------------------------------------------
// ARITMATIKA
var numOne = 10;
var numTwo = 5
var result = numOne + numTwo
console.log(numOne + " + " + numTwo + " = " + result)
result = numOne - numTwo
console.log(numOne + " - " + numTwo + " = " + result)
result = numOne * numTwo
console.log(numOne + " * " + numTwo + " = " + result)
result = numOne / numTwo
console.log(numOne + " / " + numTwo + " = " + result)
result = numOne % numTwo
console.log(numOne + " % " + numTwo + " = " + result)

// -----------
// Mengubah Tipe Data
var numString = "23"
var numInteger = parseInt(numString)

console.log(typeof (numString))
console.log(typeof (numInteger))

// ---------------------------------------------------------------
//SHORTCUT
// membuka terminal : CTRL + J
// Membersihkan terminal : CTRL + L
// Membuat komentar : CTRL + /
// Untuk Mengubah banyak hal di beberapa baris : SHIFT + ALT + ARROW BAWAH
// Ubah posisi : ALT + ARROW
// Kursor banyak : ALT + LEFT KLIK
// Mengubah bersamaan : BLOCK + CTRL + D