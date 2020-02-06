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
// digunakan ketika sebuah fucntion akan mengeluarkan output agar dapat langsung di simpan di dalam var