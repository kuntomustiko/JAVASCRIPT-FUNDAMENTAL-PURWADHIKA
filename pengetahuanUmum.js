// ES5
// 'string' + variabel

// ES6
// `string ${variabel}`

// javascript Hoisting



//  '' --> kutip satu tidak bisa di enter


// includes() --> bisa untuk array dan string tapi harus dengan spesifiki
var days = ['sabtu', 'minggu', 'senin']
days.includes('sabtu') // true
var text = 'sunday morning'
text.includes('s') // true
text.includes('S') // false

// indexOf() --> untuk data yang simple, atau array berisi string 
// findIndexOf() --> untuk cari index dari data yang komplek

// map --> return apapun
// filter --> return boolean
// findIndexOf() --> index data yang dicari


// sort() 
// --> untuk sorting
// --> untuk array
// --> akan mengembalikan array
// (a,b) --> positif: b didepan, negatif: a didepan

// --------------------------

// slice()
// --> mengambil data tertentu
// --> untuk string, array
// --> akan mengembalikan string, array
// param 1: dimulai index ke- , param 2: sampai index ke-

// splice()
// --> untuk memotong dengan menghapus satu atau beberapa data dan juga menambahkan data setelah data sebelumnya di hapus
// --> untuk array
// --> akan mengembalikan array
// param 1: dimulai index ke- , param 2: berapa banyak data, param 3: data yang di tambahkan


// -------------------------

// typeof()
// --> untuk mengecek tipe data dari sesuatu data

// indexOf()
// --> untuk mengecek berada pada index ke berapa suatu data

// length
// --> untuk mengecek panjang string

// substr()
// --> untuk mengambil kata 
// param 1: dari index ke-, param 2: berapa banyak yang di ambil

// slice()
// --> untuk mengambil kata
// param 1: dari index ke-, param 2: sampai index ke-

// toUpperCase()
// --> untuk merubah ke huruf KAPITAL

// toLowerCase()
// --> untuk merubah ke huruf kecil

// replace()
// --> untuk me-replace / mengganti huruf tertentu
// param 1: huruf yang ingin di replace, param 2: huruf yang akan menggantikan

// toString()
// --> merubah tipe data menjadi string

// parseInt()
// --> untuk merubah tipe data menjadi Int

// parseFloat()
// --> untuk merubah tipe data menjadi float

// ------------------------

// MATH.PI
// --> mendapatkan nilai PI

// MATH.abs()
// --> untuk merubah ke positif
// param : angka yang ingin dirubah

// MATH.pow()
// --> untuk pangkat / memangkatkan
// param 1: angka yang ingin di pangkatkan, param 2: angka pangkatnya

// -------------------------

// DESTRUCT OBJECT //

// var mobil = {name: "Avanza", color: "Grey", price: 130000}

// copy
// var mobilDes = {...mobil}
// { name: 'Avanza', color: 'Grey', price: 130000 }

// copy + mengubah nilai pada property tertentu
// var mobilChange = {...mobil, name : "Xpander"}
// { name: 'Xpander', color: 'Grey', price: 130000 }

// copy + menambah property baru
// var mobilAdd = {...mobil, seats: 4}
// {name: "Avanza", color: "Grey", price: 130000, seats : 4}

// copy + mengubah yg sudah ada + menambahkan property baru
// var mobilChangeAdd = {...mobil, name : "Lancer", seats: 2}
// {name: "Lancer", color: "Grey", price: 130000, seats : 2}



// join()

// sort()

// reverse()

// indexOf

// length

//-------
// push()
// pop()

//------
// unshift()
// shift()

//------
// delete
// splice()

// slice()

// Descrution Array

// Array of Array