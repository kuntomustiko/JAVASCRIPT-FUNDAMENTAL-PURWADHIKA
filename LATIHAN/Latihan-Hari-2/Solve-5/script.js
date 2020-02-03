var rasioAndi = 2;
var rasioBudi = 5;
var jumlahUsia = 49;

var n = jumlahUsia / (rasioAndi + rasioBudi)
var umurAndi = rasioAndi * n + 2;
var umurBudi = rasioBudi * n + 2;

console.log("Usia Budi " + umurBudi + "\n" +
    " Usia Andi " + umurAndi)


// jawaban mentor
var totalAge = 49
var rasioAndi = 2,
    rasioBudi = 5,
    totalRasio = 7

var ageAndi = totalAge * (rasioAndi / totalRasio)
ageAndi += 2
var ageBudi = totalAge * (rasioBudi / totalRasio)
ageBudi += 2

console.log(`Usia Andi : ${ageAndi} tahun \n` +
    `Usia Budi : ${ageBudi} tahun`)