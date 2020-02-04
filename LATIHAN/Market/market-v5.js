// upgrade V5
/*

Hanya boleh ada satu block do while untuk input jumlah qty setiap product.
Gunakan for loop untuk menghitung total harga setiap barang.
Gunakan for loop untuk menghitung total harga dari seluruh barang.
Sekarang user tidak hanya bisa belanja namun ada 3 pilihan tambahan
App akan memiliki 4 menu utama :
0 . Menampilkan daftar buah
1 . Menambah buah
2 . Menghapus buah
3 . Membeli buah
Untuk setiap selesai menambah dan menghapus buah akan menampilkan daftar buah terbaru student akan mengulang kode yang sama untuk membuat list.*/
// senin 03/02/2020
/*
# Upgrade :
#    
*/
var stringTampilDaftarNamaBuah = ""

// inisialisasi awal / default
var daftarBuah = ['apel', 'jeruk', 'mangga']
var hargaBuah = [1000, 2000, 3000]
var qtyBuah = [10, 20, 30]
var stockBuah = [40, 40, 40]

var totalSeluruhHargaAkhir = 0
var hargaAkhirPerBuah = []
var hargaTotalPerBuah = []

// inputan user menu back to menu or not
var uiYesNo = 1
// inputan user untuk nomor menu keberapa
var uiNomorMenu = 0

// kondisi untuk do while
var beliBuahCondition = 0
var menuCondition = false

console.log("ini default di atas do while")

do {

    uiNomorMenu = prompt("Menu Utama\n0. Menampilkan daftar buah\n1. Menambah Buah\n2. Menghapus Buah\n3. Membeli Buah ")
    // jawaban untuk nomor menu
    if (uiNomorMenu == 0) {

        // console.log("daftar Buah " + daftarBuah)
        stringTampilDaftarNamaBuah = ""
        // menggunakan array yang di inisialisasikan pertama kali
        for (let y = 0; y < daftarBuah.length; y++) {
            stringTampilDaftarNamaBuah += "No. " + y + ". " + daftarBuah[y] + " || Harga Satuan " + hargaBuah[y] + " || Jumlah Stock " + qtyBuah[y] + "\n"
        }
        uiYesNo = prompt(`List Buah Di Jual \n${stringTampilDaftarNamaBuah} \n apakah kamu mau ke menu lagi ? \n 0. Yes 1. No`)
        if (uiYesNo == 0) {
            menuCondition = true
        } else {
            menuCondition = false
        }

    } else if (uiNomorMenu == 1) {

        // menu tambah buah
        var uiTambahBuah = prompt('Tambah Nama Buah')
        daftarBuah.push(uiTambahBuah)

        var uiTambahBuahHarga = parseInt(prompt('Tambah Harga Buah'))
        hargaBuah.push(uiTambahBuahHarga)

        // var uiTambahBuahJumlah = parseInt(prompt('Tambah Jumlah Buah'))
        // qtyBuah.push(uiTambahBuahJumlah)

        qtyBuah.push(parseInt(prompt('Tambah Jumlah Buah')))

        // untuk menampilkan list-list daftar buah ke bawah
        for (let y = 0; y < daftarBuah.length; y++) {
            if (y == 0) {
                stringTampilDaftarNamaBuah = y + ". " + daftarBuah[y] + "\n"
            } else {
                stringTampilDaftarNamaBuah = stringTampilDaftarNamaBuah + y + ". " + daftarBuah[y] + "\n"
            }
        }
        // console.log(daftarBuah)
        // console.log(qtyBuah)
        // console.log(hargaBuah)

        uiYesNo = prompt(`List nama buah \n ${stringTampilDaftarNamaBuah} \n apakah kamu mau ke menu lagi ? \n 0. Yes 1. No`)
        if (uiYesNo == 0) {
            menuCondition = true
        } else {
            menuCondition = false
        }
    } else if (uiNomorMenu == 2) {
        // menghapus buah

        // untuk menloop daftar buah untuk menampilkan list daftar buah sebelum di hapus
        for (let y = 0; y < daftarBuah.length; y++) {
            if (y == 0) {
                stringTampilDaftarNamaBuah = y + ". " + daftarBuah[y] + "\n"
            } else {
                stringTampilDaftarNamaBuah = stringTampilDaftarNamaBuah + y + ". " + daftarBuah[y] + "\n"
            }
        }

        var uiHapusBuah = prompt(`nama nama buah sebelum di hapus \n ${stringTampilDaftarNamaBuah} \n hapus nama buah \n `)
        daftarBuah.splice(uiHapusBuah, 1)
        // tambahan
        qtyBuah.splice(uiHapusBuah, 1)
        hargaBuah.splice(uiHapusBuah, 1)

        stringTampilDaftarBuah = ""

        // untuk menloop daftar buah untuk menampilkan list daftar buah setelah di hapus
        for (let y = 0; y < daftarBuah.length; y++) {
            if (y == 0) {
                stringTampilDaftarNamaBuah = y + ". " + daftarBuah[y] + "\n"
            } else {
                stringTampilDaftarNamaBuah = stringTampilDaftarNamaBuah + y + ". " + daftarBuah[y] + "\n"
            }
        }

        uiYesNo = prompt(`nama nama buah setelah di hapus \n ${stringTampilDaftarNamaBuah} \n apakah kamu mau ke menu lagi ? \n 0. Yes 1. No`)
        if (uiYesNo == 0) {
            menuCondition = true
        } else {
            menuCondition = false
        }
    } else if (uiNomorMenu == 3) {

        // console.log("daftar Buah -  " + daftarBuah)

        // untuk membuat batasan dowhile ketika menginputkan jumlah barang yang dibeli
        beliBuahCondition = daftarBuah.length
        qtyBuah = []

        // untuk memasukkan jumlah yang ingin di beli
        for (let x = 0; x < daftarBuah.length; x++) {

            // do {
            //     var entah = prompt(`Masukkan jumlah buah ${daftarBuah[x]} `)
            //     qtyBuah.push(entah)
            //     console.log("do while ke ")
            //     beliBuahCondition++
            // } while (beliBuahCondition <= daftarBuah.length);

            // guru
            do {
                qtyBuah[x] = prompt(`Masukkan jumlah ${daftarBuah[x]}`)
                if (qtyBuah[x] > stockBuah[x]) {
                    alert(`Kesalahan input stock ${qtyBuah[x]} > ${stockBuah[x]} `)
                }

            } while (qtyBuah[x] > stockBuah[x]);
            // selesai guru

            // menjumlahkan total setiap buah  
            hargaTotalPerBuah = qtyBuah[x] * hargaBuah[x];

            hargaAkhirPerBuah.push(hargaTotalPerBuah)

            // menjumlahkan seluruh total harga pembayaran dari seluruh buah
            totalSeluruhHargaAkhir += hargaAkhirPerBuah[x]

            // untuk menampilkan membeli buah apa dengan jumlah berapa dan harga total per buah berapa
            alert(`Anda membeli ${daftarBuah[x]} \nHarga satuan Rp. ` + hargaBuah[x].toLocaleString() + ` \nJumlah ${qtyBuah[x]} buah \nHarga total Rp. ` + hargaTotalPerBuah.toLocaleString())
        }

        console.log(typeof (hargaAkhirPerBuah[1]))
        console.log(typeof (hargaAkhirPerBuah))
        // console.log(totalSeluruhHargaAkhir)
        // console.log(daftarBuah)
        // console.log(qtyBuah)
        // console.log(hargaTotalPerBuah)

        // untuk menampilkan seluruh total pembayaran
        alert('Jumlah seluruh pembelian anda adalah Rp. ' + totalSeluruhHargaAkhir.toLocaleString())

        // memasukkan uang 
        var uangCondition = true
        do {
            var uiUangPembayaran = prompt('Masukkan uang anda ');
            var kurangUang = totalSeluruhHargaAkhir - uiUangPembayaran;
            var sisa = uiUangPembayaran - totalSeluruhHargaAkhir
            if (uiUangPembayaran < totalSeluruhHargaAkhir) {
                alert('Transaksi dibatalkan, Uang Anda masih kurang Rp. ' + kurangUang.toLocaleString('in'))
                uangCondition = true
            } else if (uiUangPembayaran == totalSeluruhHargaAkhir) {
                alert('Terimakasih')
                uangCondition = false
            } else {
                alert('Terimakasih, Uang kembali untuk Anda Rp. ' + sisa.toLocaleString('in'))
                uangCondition = false
            }
        } while (uangCondition);

    } else {
        menuCondition = false
    }
} while (menuCondition);