///////////////
// FUNCTION //
/////////////

// Block kode yang dapat memiliki nama dan digunakan secara berulang
// Sebuah Function dapat memiliki input, output atau input dan input sekaligus

// ketika function helo di panggil maka apapun yang ada di dalam function helo maka akan langsung dijalankan
function helo() {

}

helo()

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

anonym(square)

/////////////////////
// SORT : ADVANCE //
///////////////////

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