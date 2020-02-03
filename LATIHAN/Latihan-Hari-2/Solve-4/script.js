var totalHari = 485
// var tahun = 485 / 360
// console.log(Math.round(tahun))
// var bulan = totalHari / 12
// console.log(Math.round(bulan))
// var minggu = totalHari / 7
// console.log(Math.round(minggu))

// var tahun = Math.round(totalHari / 360)
// console.log(tahun)
// var bulan = Math.round(Math.round(totalHari % 360) / 30)
// console.log(bulan)
// var minggu = Math.round(((totalHari % 360) % 30) / 7)
// console.log(minggu)
// var hari = Math.round(((totalHari % 360) % 30) % 7)
// console.log(hari)

// Jawaban Guru
var years = parseInt(totalHari / 360)

// sisaTotalHari itu menjadi global variabel walaupun kita tidak menulis var atau let tapi memang tidak di rekomendasikan membuat varivel seperti ini
sisaTotalHari = totalHari % 360
var monts = parseInt(sisaTotalHari / 30)
sisaTotalHari = sisaTotalHari % 30
var weeks = parseInt(sisaTotalHari / 7)
sisaTotalHari = sisaTotalHari % 7

// bukan kutip 1 tapi pake bakctip yang berada di bawah tombol escape dan di samping 1
console.log(`${totalHari} hari : ${years} tahun, ${monts} bulan , ` + "\n" +
    `${weeks} minggu, dan ${sisaTotalHari} hari`)