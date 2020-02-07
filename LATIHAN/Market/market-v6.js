var uiNomorMenu = 0
var uiYesNoVar = 1
var menuCondition = true

var stringTampilDaftarNamaBuah = ""
var stringTampilDaftarNamaBuahVar = ""

var totalSeluruhHargaAkhir = 0
var hargaAkhirPerBuah = []
var hargaTotalPerBuah = []

var fruits = {
    daftarBuah: ['Apel', 'Jeruk', 'Mangga'],
    hargaBuah: [100, 200, 300],
    qtyBuah: [10, 20, 30],
    stockBuah: [40, 40, 40]
}


function tampilListDaftarBuahAwal() {
    for (let y = 0; y < fruits.daftarBuah.length; y++) {
        stringTampilDaftarNamaBuah += "No. " + y + ". " + fruits.daftarBuah[y] + " || Harga Satuan " + fruits.hargaBuah[y] + " || Jumlah Stock " + fruits.qtyBuah[y] + "\n"
    }
    return stringTampilDaftarNamaBuah
}

function tampilListDaftarBuah() {
    for (let y = 0; y < fruits.daftarBuah.length; y++) {
        if (y == 0) {
            stringTampilDaftarNamaBuah = y + ". " + fruits.daftarBuah[y] + "\n"
        } else {
            stringTampilDaftarNamaBuah = stringTampilDaftarNamaBuah + y + ". " + fruits.daftarBuah[y] + "\n"
        }
    }
    return stringTampilDaftarNamaBuah
}

function uiYesNo(stringTampilDaftarNamaBuah) {
    var uiYesNo = prompt(`List Buah Di Jual \n${stringTampilDaftarNamaBuah} \n apakah kamu mau ke menu lagi ? \n 0. Yes 1. No`)
    return uiYesNo
}

function pilihanMenu(uiYesNo) {
    if (uiYesNo == 0) {
        menuCondition = true
        return menuCondition
    } else {
        menuCondition = false
        return menuCondition
    }
}

function tambahHapusNamaBuah() {
    var tambahHapusBuahVar = prompt('Tambah Nama Buah')
    return tambahHapusBuahVar
}

function inputHapusHargaBuah() {
    var tambahHapusHargaBuahVar = parseInt(prompt('Tambah Harga Buah'))
    return tambahHapusHargaBuahVar
}

function inputHapusJumlahBuah() {
    var tambahHapusJumlahBuahVar = parseInt(prompt('Tambah Jumlah Buah'))
    return tambahHapusJumlahBuahVar
}

function hapusBuah(stringTampilDaftarNamaBuahVar) {
    var uiHapusBuah = prompt(`nama nama buah sebelum di hapus \n ${stringTampilDaftarNamaBuahVar} \n hapus nama buah \n `)
    return uiHapusBuah
}

function jumlahInginDiBeli() {
    for (let x = 0; x < fruits.daftarBuah.length; x++) {
        do {
            fruits.qtyBuah[x] = prompt(`Masukkan jumlah ${fruits.daftarBuah[x]}`)
            if (fruits.qtyBuah[x] > fruits.stockBuah[x]) {
                alert(`Kesalahan input stock ${fruits.qtyBuah[x]} > ${fruits.stockBuah[x]} `)
            }
        } while (fruits.qtyBuah[x] > fruits.stockBuah[x]);
        // menjumlahkan total setiap buah  
        hargaTotalPerBuah = fruits.qtyBuah[x] * fruits.hargaBuah[x];
        hargaAkhirPerBuah.push(hargaTotalPerBuah)
        // menjumlahkan seluruh total harga pembayaran dari seluruh buah
        totalSeluruhHargaAkhir += hargaAkhirPerBuah[x]
        // untuk menampilkan membeli buah apa dengan jumlah berapa dan harga total per buah berapa
        alert(`Anda membeli ${fruits.daftarBuah[x]} \nHarga satuan Rp. ` + fruits.hargaBuah[x].toLocaleString() + ` \nJumlah ${fruits.qtyBuah[x]} buah \nHarga total Rp. ` + hargaTotalPerBuah.toLocaleString())
    }
    return totalSeluruhHargaAkhir
}

function uangCondition(uangConditionVar) {
    do {
        var uiUangPembayaran = prompt('Masukkan uang anda ');
        var kurangUang = totalSeluruhHargaAkhir - uiUangPembayaran;
        var sisa = uiUangPembayaran - totalSeluruhHargaAkhir
        if (uiUangPembayaran < totalSeluruhHargaAkhir) {
            alert('Transaksi dibatalkan, Uang Anda masih kurang Rp. ' + kurangUang.toLocaleString('in'))
            uangConditionVar = true
        } else if (uiUangPembayaran == totalSeluruhHargaAkhir) {
            alert('Terimakasih')
            uangConditionVar = false
        } else {
            alert('Terimakasih, Uang kembali untuk Anda Rp. ' + sisa.toLocaleString('in'))
            uangConditionVar = false
        }
    } while (uangConditionVar);
}

do {
    uiNomorMenu = parseInt(prompt("Menu Utama\n0. Menampilkan daftar buah\n1. Menambah Buah\n2. Menghapus Buah\n3. Membeli Buah "))
    if (uiNomorMenu == 0) {
        stringTampilDaftarNamaBuah = ""
        stringTampilDaftarNamaBuahVar = tampilListDaftarBuahAwal()
        uiYesNoVar = uiYesNo(stringTampilDaftarNamaBuahVar)
        pilihanMenu(uiYesNoVar)
    } else if (uiNomorMenu == 1) {
        // menu tambah buah
        fruits.daftarBuah.push(tambahHapusNamaBuah())
        fruits.hargaBuah.push(tambahHapusHargaBuah())
        fruits.qtyBuah.push(tambahHapusJumlahBuah())

        // untuk menampilkan list-list daftar buah ke bawah
        stringTampilDaftarNamaBuahVar = tampilListDaftarBuah()
        uiYesNoVar = uiYesNo(stringTampilDaftarNamaBuahVar)
        pilihanMenu(uiYesNoVar)
    } else if (uiNomorMenu == 2) {
        // menghapus buah
        // untuk menloop daftar buah untuk menampilkan list daftar buah sebelum di hapus
        stringTampilDaftarNamaBuahVar = tampilListDaftarBuah()

        var uiHapusBuahMenu2 = hapusBuah(stringTampilDaftarNamaBuahVar)

        fruits.daftarBuah.splice(uiHapusBuahMenu2, 1)
        fruits.qtyBuah.splice(uiHapusBuahMenu2, 1)
        fruits.hargaBuah.splice(uiHapusBuahMenu2, 1)
        console.log(stringTampilDaftarNamaBuah)
        stringTampilDaftarNamaBuah = ""
        // stringTampilDaftarBuah = ""
        // untuk menloop daftar buah untuk menampilkan list daftar buah setelah di hapus
        stringTampilDaftarNamaBuahVar = tampilListDaftarBuah()
        console.log(tampilListDaftarBuah())
        uiYesNoVar = uiYesNo(stringTampilDaftarNamaBuahVar)
        pilihanMenu(uiYesNoVar)

    } else if (uiNomorMenu == 3) {
        // untuk membuat batasan dowhile ketika menginputkan jumlah barang yang dibeli
        fruits.qtyBuah = []
        // untuk memasukkan jumlah yang ingin di beli
        var totalSeluruhHargaAkhirVar = jumlahInginDiBeli()
        console.log(typeof (hargaAkhirPerBuah[1]))
        console.log(typeof (hargaAkhirPerBuah))
        alert('Jumlah seluruh pembelian anda adalah Rp. ' + totalSeluruhHargaAkhirVar.toLocaleString())
        // memasukkan uang 
        var uangConditionVar = true
        uangCondition(uangConditionVar)

    } else {
        menuCondition = false
    }
}
while (menuCondition);