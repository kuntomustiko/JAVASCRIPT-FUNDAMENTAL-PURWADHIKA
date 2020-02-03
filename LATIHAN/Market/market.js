// upgrade 1
var stockApel = 10
var stockJeruk = 10
var stockMangga = 10


var apel = prompt("masukkan jumlah apel");
if (apel <= stockApel) {
    apel = prompt("jumlah apel melebihi stock apel, masukkan jumlah apel lagi")

}
var jeruk = prompt("masukkan jumlah jeruk");
var mangga = prompt("masukkan jumlah mangga");

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


console.log("1. " + "Anda Membeli " + apel + " APEL " + " dengan harga " + hargaApel.toLocaleString() + " dengan total harga " + hasilApel.toLocaleString() + "\n" +
    "2. " + "Anda Membeli " + jeruk + " JERUK " + " dengan harga " + hargaJeruk.toLocaleString() + " dengan total harga " + hasilJeruk.toLocaleString() + "\n" +
    "3. " + "Anda Membeli " + mangga + " MANGGA " + " dengan harga " + hargaMangga.toLocaleString() + " dengan total harga " + hasilMangga.toLocaleString() + "\n" +
    "Total Harga seluruhnya Rp. " + totalSeluruhHarga.toLocaleString('in'));