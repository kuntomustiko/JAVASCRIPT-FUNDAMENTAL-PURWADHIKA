// Mengambil kata dari index 4 sebanyak 6 kata
// console.log(text.substr(4, 6))

// split memisahkan sebuah text berdasarkan karakter tertentu


// Mengubah menjadi string
// console.log(z.toString())

// Mengubah sebuah karakter (berdasarkan index tertentu) menjadi huruf besar
// const lower = 'this is an entirely lowercase string';
// const upper = lower.charAt(0).toUpperCase() + lower.substring(1);
// console.log(upper)

// Mengubah menjadi Integer
// console.log(parseInt("123")) // 123
// Mengubah menjadi Float
// console.log(parseFloat("123")) // 123

// Mengubah menjadi Integer
// Menghilangkan bilangan desimal, bukan dibulatkan
// console.log(parseInt("123.12412")) // 123
// Mengubah menjadi float
// console.log(parseFloat("123.121213")) // 123.121213 

// Mengubah menjadi integer
// console.log(parseInt("Halo Dunia")) // NaN
// Mengubah menjadi float
// console.log(parseFloat("Halo Dunia")) // NaN

// NaN = Not a Number

// ----------------------------------------------------------------------
// ARITMATIC


var numOne = 10;
var numTwo = 5;


// console.log(numOne + " + " + numTwo + " = ", numOne + numTwo)
// console.log(numOne + " - " + numTwo + " = ", numOne - numTwo)
// console.log(numOne + " * " + numTwo + " = ", numOne * numTwo)
// console.log(numOne + " / " + numTwo + " = ", numOne / numTwo)
// console.log(numOne + " % " + numTwo + " = ", numOne % numTwo)

// sebuah number ketika bertemu dengan string (sebelumnya atau sesudahnya) dan dihubungkan dengan (tanda + (tanda penghubung dua nilai))
// maka number akan berubah menjadi string 
// "10" + 5 -- "10" + "5" = "105"
// 10 + 5 -- 15

// "10" - 5 -- 10 - 5 = 5
// "10" * 5 -- 10 * 5 = 50
// "10" / 5 -- 10 / 5 = 2
// "10" % 5 -- 10 % 5 = 0 

// console.log(10 + "*" + 5 + "=" + (10 + 5))

var result = numOne + 3 // 13
numOne = result

numTwo = numTwo + 15 // 20
// numTwo += 15 

// numTwo = numTwo + 1
// numTwo++ // penulisan lainnya

// -----------------------------------
// MATH Object

// 
console.log(Math.PI)

// Membulatkan bilangan menjadi positif
console.log(Math.abs(-4.7))

// Memangkatkan bilangan (power)
// 8 pangkat 3
console.log(Math.pow(8, 3))

// Akar dua bilangan (squre root)
// console.log(Math.sqrt(64))

// Akar tiga bilangan (cubic root)
// console.log(Math.cbrt(8))

// Bulatkan angka secara matematika
// console.log(Math.round(4.7)) // 5

// Bulatkan angka secara matematika
// console.log(Math.round(4.4)) //4 

// Bulatkan ke bawah
// walaupun 6789 tetap di bulatkan ke bawah
// console.log(Math.floor(4.7)) // 4

// bulatkan ke atas
// walaupun 1234 tetap di bulatkan ke atas 
// console.log(Math.ceil(4.4)) // 5

// random 0 - 0.999999999999...
// console.log(Math.random())

// mencari nilai maximal
// console.log(Math.max(1, 2, 3))

// mencari nilai minimal
// console.log(Math.min(1, 2, 3))

// console.log(Math.floor(Math.random() * 6) + 1)

// -------------------------------------------------------------------
// Date Object
// Mendapatkan info waktu

var time = new Date()

// console.log(time.getHours())
// console.log(time.getMinutes())
// console.log(time.getSeconds())

// Hari dimulai 1
console.log(time.getDay())

// bulan dimulai 0
confirm.log(time.getMonth())