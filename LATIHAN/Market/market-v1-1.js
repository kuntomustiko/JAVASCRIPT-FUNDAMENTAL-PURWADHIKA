// upgrade 1
var stockApel = 10
var stockJeruk = 10
var stockMangga = 10


var apel = prompt("masukkan jumlah apel");
if (apel <= stockApel || apel == '') {
    alert(`Kesalahan 'input', stock apel = ${stockApel} `)
    stockApel = 0
}

var jeruk = prompt("masukkan jumlah jeruk");
if (jeruk <= stockJeruk) {
    alert(`Kesalahan 'input', stock jeruk = ${stockJeruk} `)
    stockJeruk = 0
}

var mangga = prompt("masukkan jumlah mangga");
if (mangga <= stockMangga) {
    alert(`Kesalahan 'input', stock mangga = ${stockMangga} `)
    stockMangga = 0
}

if (stockApel == 0 || stockJeruk == 0 || stockMangga == 0) {
    alert('Trasaksi dibatalkan, salah satu atau lebih mengalami kesalahan input')
} else {

    var hargaApel = 10000;
    var hargaJeruk = 15000;
    var hargaMangga = 20000;

    var hasilApel = apel * hargaApel;
    var hasilJeruk = jeruk * hargaJeruk;
    var hasilMangga = mangga * hargaMangga;
    var totalSeluruhHarga = hasilApel + hasilJeruk + hasilMangga;

    alert("1. " + "Anda Membeli " + apel + " APEL " + " dengan harga " + hargaApel.toLocaleString() + " dengan total harga " + hasilApel.toLocaleString() + "\n" +
        "2. " + "Anda Membeli " + jeruk + " JERUK " + " dengan harga " + hargaJeruk.toLocaleString() + " dengan total harga " + hasilJeruk.toLocaleString() + "\n" +
        "3. " + "Anda Membeli " + mangga + " MANGGA " + " dengan harga " + hargaMangga.toLocaleString() + " dengan total harga " + hasilMangga.toLocaleString() + "\n" +
        "Total Harga seluruhnya Rp. " + totalSeluruhHarga.toLocaleString('in'));

    // memasukkan uang 
    var uang = prompt('Masukkan uang anda ');
    if (uang < totalSeluruhHarga) {
        alert('Transakis dibatalkan, Uang yang Anda masukkan kurang (jumlah uang)')
    } else if (uang == totalSeluruhHarga) {
        alert('Terimakasih')
    } else {
        var sisa = uang - totalSeluruhHarga
        alert('Terimakasih, Uang kembali untuk Anda Rp. ' + sisa.toLocaleString('in'))
    }

}

// console.log("1. " + "Anda Membeli " + apel + " APEL " + " dengan harga " + hargaApel.toLocaleString() + " dengan total harga " + hasilApel.toLocaleString() + "\n" +
//     "2. " + "Anda Membeli " + jeruk + " JERUK " + " dengan harga " + hargaJeruk.toLocaleString() + " dengan total harga " + hasilJeruk.toLocaleString() + "\n" +
//     "3. " + "Anda Membeli " + mangga + " MANGGA " + " dengan harga " + hargaMangga.toLocaleString() + " dengan total harga " + hasilMangga.toLocaleString() + "\n" +
//     "Total Harga seluruhnya Rp. " + totalSeluruhHarga.toLocaleString('in'));


// switch (true) {
//     case (apel <= stockApel):
//         alert(`Kesalahan 'input', stock apel = ${stockApel} `)
//         apel = 0
//         break;
//     case (jeruk <= stockJeruk):
//         alert(`Kesalahan 'input', stock jeruk = ${stockJeruk} `)
//         jeruk = 0
//         break;
//     case (mangga <= stockMangga):
//         alert(`Kesalahan 'input', stock mangga = ${stockMangga} `)
//         mangga = 0
//         break;
//     default:
//         break;
// }