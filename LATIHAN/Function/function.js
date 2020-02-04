var uiNomorMenu = ""
var menuCondition = true
var varIsiKalku = [10, 10]
var x = 0
var y = 0

do {
    uiNomorMenu = prompt("Menu Utama\n0. Tambah\n1. Kurang\n2. Pembagian\n3. Perkalian ")

    function calculate(fn, numOne, numTwo) {
        return fn(numOne, numTwo)
    }

    // Tambah
    function calSum(x, y) {
        return x + y
    }

    // Pengurangan
    function calKurang(x, y) {
        return x - y
    }

    // perkalian
    function calMul(x, y) {
        return x * y
    }

    // pembagian
    function calBagi(x, y) {
        return x / y
    }
    if (uiNomorMenu == 0) {
        x = parseInt(prompt(`Masukkan X `))
        y = parseInt(prompt(`Masukkan Y `))
        // Tambah
        var resultTambah = calculate(calSum, x, y)

        uiYesNo = prompt(`Hasil dari ${x} + ${y} = ${resultTambah}, apakah anda ingin ke menu ? \n 0. Yes 1. No  `)
        // console.log(resultTambah)
        if (uiYesNo == 0) {
            menuCondition = true
        } else {
            menuCondition = false
        }
    } else if (uiNomorMenu == 1) {

        // Pengurangan
        x = parseInt(prompt(`Masukkan X `))
        y = parseInt(prompt(`Masukkan Y `))
        var resultKurang = calculate(calKurang, x, y)

        uiYesNo = prompt(`Hasil dari ${x} - ${y} = ${resultKurang}, apakah anda ingin ke menu ? \n 0. Yes 1. No  `)
        if (uiYesNo == 0) {
            menuCondition = true
        } else {
            menuCondition = false
        }
    } else if (uiNomorMenu == 2) {

        // Pembagian
        x = parseInt(prompt(`Masukkan X `))
        y = parseInt(prompt(`Masukkan Y `))
        var resultBagi = calculate(calBagi, x, y)

        uiYesNo = prompt(`Hasil dari ${x} / ${y} = ${resultBagi}, apakah anda ingin ke menu ? \n 0. Yes 1. No  `)
        if (uiYesNo == 0) {
            menuCondition = true
        } else {
            menuCondition = false
        }
    } else if (uiNomorMenu == 3) {
        // Perkalian

        x = parseInt(prompt(`Masukkan X `))
        y = parseInt(prompt(`Masukkan Y `))
        var resultPerkalian = calculate(calMul, x, y)

        uiYesNo = prompt(`Hasil dar ${x} x ${y} = ${resultPerkalian}, apakah anda ingin ke menu ? \n 0. Yes 1. No  `)
        if (uiYesNo == 0) {
            menuCondition = true
        } else {
            menuCondition = false
        }
    } else {
        menuCondition = false
    }
} while (menuCondition);

// var x = prompt(`Masukkan X`);
// var y = prompt(`Masukkan Y`);

// function calculate(fn, numOne, numTwo) {
//     fn(numOne, numTwo)
// }

// function calMul(x, y) {
//     return x * y
// }

// function calSum(x, y) {
//     return x + y
// }

// var resultTambah = calculate(calSum, 4, 5)
// var resultKali = calculate(calMul, 4, 5)