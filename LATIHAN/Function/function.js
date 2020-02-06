var uiNomorMenu = 0
var menuConditionVar = true
var varIsiKalku = [10, 10]
var x = 0
var y = 0
var resultHitung = 0
var uiYesNoVar = 0

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

function inputUser() {
    var z = parseInt(prompt(`Masukkan Angka `))
    return z
}

function uiYesNo(x, y, resultTambah) {
    var z = parseInt(prompt(`Hasil dari ${x} + ${y} = ${resultTambah}, apakah anda ingin ke menu ? \n 0. Yes 1. No  `))
    return z
}

function menuCondition(uiYesNoVar) {
    if (uiYesNoVar == 0) {
        menuConditionVar = true
        return menuConditionVar
    } else if (uiYesNoVar != 0) {
        menuConditionVar = false
        return menuConditionVar
    } else {
        alert("gagal condition menu")
    }
}

do {
    uiNomorMenu = prompt("Menu Utama\n0. Tambah\n1. Kurang\n2. Pembagian\n3. Perkalian ")

    if (uiNomorMenu == 0) {
        x = inputUser()
        y = inputUser()
        // Tambah
        resultHitung = calculate(calSum, x, y)
        uiYesNoVar = uiYesNo(x, y, resultHitung)
        menuConditionVar = menuCondition(uiYesNoVar)
    } else if (uiNomorMenu == 1) {
        // Pengurangan
        x = inputUser()
        y = inputUser()
        resultHitung = calculate(calKurang, x, y)
        uiYesNoVar = uiYesNo(x, y, resultHitung)
        menuConditionVar = menuCondition(uiYesNoVar)
    } else if (uiNomorMenu == 2) {
        // Pembagian
        x = inputUser()
        y = inputUser()
        resultHitung = calculate(calBagi, x, y)
        uiYesNoVar = uiYesNo(x, y, resultHitung)
        menuConditionVar = menuCondition(uiYesNoVar)
    } else if (uiNomorMenu == 3) {
        // Perkalian
        x = inputUser()
        y = inputUser()
        resultHitung = calculate(calMul, x, y)
        uiYesNoVar = uiYesNo(x, y, resultHitung)
        menuConditionVar = menuCondition(uiYesNoVar)
    } else {
        menuConditionVar = false
    }
} while (menuConditionVar);