var jarakMobil = 120;
var kecA = 60
var kecB = 40

// var waktu = jarakMobil / (kecA + kecB)
// var waktuMulai = 9
// var waktuTabrak = waktuMulai + Math.round(waktu)
// console.log(waktuTabrak)

// Jawaban Mentor
var timeCrash = jarakMobil / (kecA + kecB)
var timeHour = parseInt(timeCrash) // 1 jam
var timeMinute = (timeCrash * 60) % 60 // 12 menit