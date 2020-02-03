var alasKaki = 'Sepatu'
var warna = 'Merah'
var harga = 'Murah'

switch (true) {
    case (alasKaki == 'Sepatu' && warna == 'Merah' && harga == 'Murah'):
        console.log("sepatu merah murah")
        break;
    case (alasKaki == 'Sandal' && warna == 'Merah' && harga == 'Murah'):
        console.log("Sandal merah murah")
        break;
    case (alasKaki == 'Sandal' && warna == 'Biru' && harga == 'Murah'):
        console.log("Sandal biru murah")
        break;
    case (alasKaki == 'Sandal' && warna == 'Merah' && harga == 'Mahal'):
        console.log("Sandal Merah Mahal")
        break;
    case (alasKaki == 'Sandal' && warna == 'Biru' && harga == 'Mahal'):
        console.log("Sandal Biru Mahal")
        break;
    case (alasKaki == 'Sepatu' && warna == 'Merah' && harga == 'Mahal'):
        console.log("Sepatu Merah Mahal")
        break;
    case (alasKaki == 'Sepatu' && warna == 'Biru' && harga == 'Murah'):
        console.log("Sepatu Biru Mahal")
        break;
    case (alasKaki == 'Sepatu' && warna == 'Biru' && harga == 'Mahal'):
        console.log("Sepatu Biru Mahal")
        break;
    default:
        console.log("gak punya sepatu gak berwarna dan gak dijual")
        break;
}


// ---------------------------------------

var massa = 100
var tinggi = 175

var IMT = massa / (tinggi * tinggi)

if (IMT < 18.5) {
    console.log('BB kurang')
} else if (IMT >= 18.5 && IMT <= 24.9) {
    console.log('BB Ideal')
} else if (IMT >= 25.0 && IMT <= 29.9) {
    console.log('BB berlebih')
} else if (IMT >= 30.0 && IMT <= 39.9) {
    console.log('Bb sangat berlebih')
} else {
    console.log('obesitas')
}