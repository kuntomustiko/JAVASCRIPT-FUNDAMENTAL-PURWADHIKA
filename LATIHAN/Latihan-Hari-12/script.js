function hasilSolveIt6() {
    var nilai = document.getElementById("programKuadrat")
    var outputHasil = document.getElementById("hasilProgramKuadrat")

    var pangkat = Math.pow(nilai.value, 2)

    outputHasil.innerHTML = ` Hasil ${nilai.value}<sup>2</sup> = ${pangkat}`
}

function hasilSolveIt7() {
    var nilai1 = document.getElementById("Solve-7-1")
    var nilai2 = document.getElementById("Solve-7-2")
    var outputHasil = document.getElementById("hasilProgramPangkat")

    var pangkat = Math.pow(nilai1.value, nilai2.value)

    outputHasil.innerHTML = ` Hasil ${nilai1.value}<sup>${nilai2.value}</sup> = ${pangkat}`
}

function hasilSolveIt8() {
    var kalimat = document.getElementById("Solve-8-kalimat").value
    var hurufDicari = document.getElementById("Solve-8-diCari").value
    var outputHasil = document.getElementById("hasilProgramPencari")

    var charNemu = 0

    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] == hurufDicari) {
            charNemu++
        }
    }
    outputHasil.innerHTML = ` Jumlah '${hurufDicari}' sebanyak ${charNemu}`
}

function kalkuKali() {
    var angka1_9 = document.getElementById("Solve-9-1")
    var angka2_9 = document.getElementById("Solve-9-2")
    var hasilOutput9 = document.getElementById("hasilOutput9")

    var kali = angka1_9.value * angka2_9.value
    hasilOutput9.innerHTML = `${angka1_9.value} * ${angka2_9.value} = ${kali}`
}

function kalkuBagi() {
    var angka1_9 = document.getElementById("Solve-9-1")
    var angka2_9 = document.getElementById("Solve-9-2")
    var hasilOutput9 = document.getElementById("hasilOutput9")

    var kali = angka1_9.value / angka2_9.value
    hasilOutput9.innerHTML = `${angka1_9.value} / ${angka2_9.value} = ${kali}`
}

function kalkuTambah() {
    var angka1_9 = parseInt(document.getElementById("Solve-9-1").value)
    var angka2_9 = parseInt(document.getElementById("Solve-9-2").value)
    var hasilOutput9 = document.getElementById("hasilOutput9")


    console.log(typeof (angka1_9))
    var kali = angka1_9 + angka2_9
    hasilOutput9.innerHTML = `${angka1_9} + ${angka2_9} = ${kali}`
}

function kalkuKurang() {
    var angka1_9 = document.getElementById("Solve-9-1")
    var angka2_9 = document.getElementById("Solve-9-2")
    var hasilOutput9 = document.getElementById("hasilOutput9")

    var kali = angka1_9.value - angka2_9.value
    hasilOutput9.innerHTML = `${angka1_9.value} - ${angka2_9.value} = ${kali}`
}

function kalkuModulus() {
    var angka1_9 = document.getElementById("Solve-9-1")
    var angka2_9 = document.getElementById("Solve-9-2")
    var hasilOutput9 = document.getElementById("hasilOutput9")

    var kali = angka1_9.value % angka2_9.value
    hasilOutput9.innerHTML = `${angka1_9.value} % ${angka2_9.value} = ${kali}`
}

function kalkuPangkat() {
    var angka1_9 = document.getElementById("Solve-9-1")
    var angka2_9 = document.getElementById("Solve-9-2")
    var hasilOutput9 = document.getElementById("hasilOutput9")

    var kali = Math.pow(angka1_9.value, angka2_9.value)
    hasilOutput9.innerHTML = `${angka1_9.value} + ${angka2_9.value} = ${kali}`
}

function solve10() {
    var pilihan1 = document.querySelector("input[name=satu]:checked").value
    var pilihan2 = document.querySelector("input[name=dua]:checked").value
    var pilihan3 = document.querySelector("input[name=tiga]:checked").value
    var pilihan4 = document.querySelector("input[name=empat]:checked").value
    var hasilSolve10 = document.getElementById("hasilSolve10")
    var nilai = 0

    // for (var x = 1; x < 5; x++) {
    //     if (pilihan1 == "habibie") {
    //         nilai += 25
    //     } else if (pilihan2 == "microbit") {
    //         nilai += 25
    //     } else if (pilihan3 == "mirai") {
    //         nilai += 25
    //     } else if (pilihan4 == "bruce") {
    //         nilai += 25
    //     }
    // }

    for (var x = 1; x < 5; x++) {
        nilai = 0
        if (pilihan1 == "habibie") {
            nilai += 25
        }
        if (pilihan2 == "microbit") {
            nilai += 25
        }
        if (pilihan3 == "mirai") {
            nilai += 25
        }
        if (pilihan4 == "bruce") {
            nilai += 25
        }
    }

    hasilSolve10.innerHTML = `Nilai Akhir Anda adalah ${nilai} `

    console.log(pilihan1)
    console.log(pilihan2)
    console.log(pilihan3)
    console.log(pilihan4)
    console.log(nilai)

}