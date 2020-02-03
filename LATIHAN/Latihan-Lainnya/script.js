var start = prompt("1. Lihat barang " + "\n" +
    "2. Tambahkan barang " + "\n" +
    "3. Update barang " + "\n" +
    "4. Hapus barang " + "\n" +
    "Masukkan nomor: ");

var intStart = parseInt(start);
// console.log(typeof (start));



switch (intStart) {
    case 1:
        console.log("tampil Barang");
        break;
    case 2:
        console.log("Tambahkan Barang");
        break;
    case 3:
        console.log("Update Barang");
        break;
    case 4:
        console.log("hapus Barang");
        break;
    default:
        console.log("Pilihan Anda salah")
        break;
}

function tambahBarang() {
    var pilihBarang = prompt("1. Pakaian " + "\n" +
        "2. Buah " + "\n" +
        "3. Minuman " + "\n" +
        "Masukkan pilihan Anda : ");

    var intPilihBarang = parseInt(pilihBarang);

    switch (intPilihBarang) {
        case 1:
            console.log("pilihan 1");
            break;
        case 2:
            console.log("pilihan 2");
            break;
        case 3:
            console.log("pilihan 3");
            break;
        default:
            console.log("salah pilih")
            break;
    }
}

function pakaian() {

}