// var x = new Date()

// console.log("Hari ini tanggal " + x.getTime())
// console.log("Hari ini tanggal " + (x.getTime() + 1))
// console.log("Hari ini tanggal " + (x.getTime() - 1))

var tanggalLengkap = new Date();
var dd = tanggalLengkap.getDate();
var mm = tanggalLengkap.getMonth() + 1;
var yyyy = tanggalLengkap.getFullYear();

var ddT = tanggalLengkap.getDate() + 1;
var mmT = tanggalLengkap.getMonth() + 1;
var yyyyT = tanggalLengkap.getFullYear();

var ddY = tanggalLengkap.getDate() - 1;
var mmY = tanggalLengkap.getMonth() + 1;
var yyyyY = tanggalLengkap.getFullYear();

tanggalLengkap = dd + '/' + mm + '/' + yyyy;
console.log("Hari ini tanggal " + tanggalLengkap)
tanggalLengkap = ddT + '/' + mmT + '/' + yyyy;
console.log("Besok tanggal " + tanggalLengkap)
tanggalLengkap = ddY + '/' + mmY + '/' + yyyy;
console.log("Kemarin tanggal " + tanggalLengkap)


// Jawaban Mentor