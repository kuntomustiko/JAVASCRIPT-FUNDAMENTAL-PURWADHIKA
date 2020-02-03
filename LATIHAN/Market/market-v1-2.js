// upgrade 2
/*
# Upgrade :
#     1. Jika user memasukkan qty lebih dari stock :
#         minta user untuk input ulang, sampai tidak melebihi stock

#     2. Minta user input sejumlah uang:
#         Jika uangnya kurang, munculkan pesan kurangnya berapa
#         kemudian minta beliau input lagi

#         Jika uangnya pas atau lebih, 'Terimakasih, kembalian Anda (sekian)'
*/
var stockApel = 10
var stockJeruk = 10
var stockMangga = 10

var stockApelTrue = true;
var stockJerukTrue = true;
var stockManggaTrue = true;
var qtyApel = 0
var qtyJeruk = 0
var qtyMangga = 0

do {
    qtyApel = prompt("masukkan jumlah apel");
    if (qtyApel > stockApel) {
        alert(`Kesalahan 'input', stock apel = ${stockApel} `)
        stockApelTrue = true
    } else {
        // jika yang dimasukkan 0 maka akan ngeloop lagi
        if (qtyApel == 0) {
            alert(`Kesalahan 'input' tidak boleh memasukkan 0 `)
            stockApelTrue = true
        } else {
            // jika yang dimasukkan selain 0 maka akan keluar dari loop
            stockApelTrue = false
        }
    }
    // stockApelTrue = true
} while (stockApelTrue);

do {
    qtyJeruk = prompt("masukkan jumlah jeruk");
    if (qtyJeruk > stockJeruk) {
        alert(`Kesalahan 'input', stock jeruk = ${stockJeruk} `)
        stockJerukTrue = true
    } else {
        stockJerukTrue = false
    }
} while (stockJerukTrue);

do {
    qtyMangga = prompt("masukkan jumlah mangga");
    if (qtyMangga > stockMangga) {
        alert(`Kesalahan 'input', stock mangga = ${stockMangga} `)
        stockManggaTrue = true
    } else {
        stockManggaTrue = false
    }
} while (stockManggaTrue);


var hargaApel = 10000;
var hargaJeruk = 15000;
var hargaMangga = 20000;

var hasilApel = qtyApel * hargaApel;
var hasilJeruk = qtyJeruk * hargaJeruk;
var hasilMangga = qtyMangga * hargaMangga;
var totalSeluruhHarga = hasilApel + hasilJeruk + hasilMangga;

alert("1. " + "Anda Membeli " + qtyApel + " APEL " + " dengan harga " + hargaApel.toLocaleString() + " dengan total harga " + hasilApel.toLocaleString() + "\n" +
    "2. " + "Anda Membeli " + qtyJeruk + " JERUK " + " dengan harga " + hargaJeruk.toLocaleString() + " dengan total harga " + hasilJeruk.toLocaleString() + "\n" +
    "3. " + "Anda Membeli " + qtyMangga + " MANGGA " + " dengan harga " + hargaMangga.toLocaleString() + " dengan total harga " + hasilMangga.toLocaleString() + "\n" +
    "Total Harga seluruhnya Rp. " + totalSeluruhHarga.toLocaleString('in'));

// memasukkan uang 
var uangTrue = true
do {
    var uang = prompt('Masukkan uang anda ');
    var kurangUang = totalSeluruhHarga - uang;
    var sisa = uang - totalSeluruhHarga
    if (uang < totalSeluruhHarga) {
        alert('Transaksi dibatalkan, Uang Anda masih kurang Rp. ' + kurangUang.toLocaleString('in'))
        uangTrue = true
    } else if (uang == totalSeluruhHarga) {
        alert('Terimakasih')
        uangTrue = false
    } else {
        alert('Terimakasih, Uang kembali untuk Anda Rp. ' + sisa.toLocaleString('in'))
        uangTrue = false
    }
} while (uangTrue);