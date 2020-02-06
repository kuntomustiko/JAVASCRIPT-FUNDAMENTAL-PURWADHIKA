///////////////
// FUNCTION //
/////////////

// Block kode yang dapat memiliki nama dan digunakan secara berulang
// Sebuah Function dapat memiliki input, output atau input dan input sekaligus

// ketika function helo di panggil maka apapun yang ada di dalam function helo maka akan langsung dijalankan
function helo() {
    console.log('Hello ... ') s
}

helo()

// 1 input, no input
function greeting(name) {
    console.log("Hallo " + name)
}

greeting(kamu)
greeting(dia)
greeting(tony)

// 3 iinput, no output
function intro(name, age, job) {
    console.log(
        `Nama : ${name} \n` +
        `Umur : ${age} \n` +
        `Pekerjaan : ${job} \n`
    )
}

intro("kamu", 12, "desainer")

// no input, 1 output
// kode setelah return tidak di baca
function grav() {
    console.log('Sebelum return')
    return 9.8
    console.log('Setelah return')
}

// var result = grav()
// console.group(`Satuan gravitasi : ${result}`)

// 2 input, 1 output
// Variable x dan y merupakan variable 'local'
// yang artinya hanya dapat diakses di dalam function sum
// jika mencoba mengakses diluar function sum akan error
function sum(x, y) {
    return x + y
}


// Ini akan error karena tidak bisa mengakses variable di dalam function sum.
// console.log(x);

// kode di bawah return tidak akan dijalankan jika berada di sama badan program


// ketika memanggil function dengan parameter function
function oneFun() {
    console.log(`function oneFun`)
}

function twoFun(fn) {
    fn()
}


twoFun(oneFun)

// function expression 
// digunakan ketika sebuah function akan mengeluarkan output agar dapat langsung di simpan di dalam var

// function yang ingin memiliki output maka harus menggunakan return

// function default nya akan selalu me-return nilai akan tetapi jika kita tidak membuat return sesuatu nya maka akan mengembalikan nilai undefined


function anonym(fn) {
    var a = 4
    var b = 2
    var res = fn(a, b)
    console.log(res)
}

function square(x, y) {
    var res = Math.pow(x, y)
    return res
}

var hasil = anonym(square)

/////////////////////
// SORT : ADVANCE //
///////////////////

// Sort menerima function dg dua parameter
// function tsb mereturn salah satu dari 3 kemungkinan :
//      1. nilai negatif
//      2. nilai nol
//      3. nilai positif

// return negatif : posisi 'a' ada didepan 'b'
// return nol : tidak bertukar posisi
// return positif : posisi 'b' ada didepan 'a'

// sort akan menjadikan isi array menjadi string lalu baru di urutkan dari setiap huruf string tersebut
numArr = [40, 23, 1, 100, 2, 23]

var convert = numArr.sort()

console.log(convert)

// -----------------------------

// untuk mengurutkan sebenarnya (bukan hasil string sort yang diurutkan)
// ascending, kecil ke besar
function asc(a, b) {
    return a - b
}

// descending, besar ke kecil
function dsc(a, b) {
    return b - a
}

numArr.sort(dsc)
console.log(numArr)