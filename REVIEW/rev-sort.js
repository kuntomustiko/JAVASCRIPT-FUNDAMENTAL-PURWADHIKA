// SORT
// Function yang digunakan untuk mengurutkan data pada array
// Sort menerima satu function (callback)
// callback function menerima 2 parameter (a, b)
// callback harus me return salah satu dari tiga hal

// 1. angka dibawah 0 (negatif)
//      posisi a didepan b

// 2. angka 0
//      posisi tidak berubah

// 3. angka diatas 0 (positif)
//      posisi b didepan a

// let days = ['Tuesday', 'Wednesday', 'Saturday', 'Weekday', 'Weekend']
// days.sort()



let numbers = [12, 1, 100, 2, 30, 4, ]

// Ascending
// numbers.sort((a, b) => {return a - b})
// [ 1, 2, 4, 12, 30, 100 ]

// Descending
numbers.sort((a, b) => {
    return b - a
})
console.log(numbers);
//[ 100, 30, 12, 4, 2, 1 ]

let cars = [{
        year: 2009,
        merk: "Totoya",
        cc: 3000
    },
    {
        year: 2013,
        merk: "Hando",
        cc: 1400
    },
    {
        year: 2003,
        merk: "Totoya",
        cc: 2700
    },
    {
        year: 2018,
        merk: "Sukuzi",
        cc: 3200
    },
    {
        year: 1999,
        merk: "Hando",
        cc: 5000
    }
]

// sort by year asc
let yearAsc = (a, b) => {
    // a : {year: 2009, merk: "Totoya", cc: 3000}
    // b : {year: 2003, merk: "Hando", cc: 1400}

    if (a.year < b.year) {
        return -1
    } else if (b.year < a.year) {
        return 1
    } else {
        return 0
    }

}

// sort by year desc
let yearDesc = (a, b) => {
    // a : {year: 2009, merk: "Totoya", cc: 3000},
    // b : {year: 2013, merk: "Hando", cc: 1400},

    // positif

    if (b.year > a.year) {
        return 1
    } else if (b.year < a.year) {
        return -1
    } else {
        return 0
    }

}

cars.sort(yearDesc)
console.log(cars)


//