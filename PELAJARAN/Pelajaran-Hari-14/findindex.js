// FINDINDEX
// Digunakan untuk mencari index data
// Method yg dimiliki oleh array
// Menerima sebuah function (callback function)
// callback function akan menerima satu parameter
// callback function harus me-return boolean (true / false)
// findindex akan me-return index data yang di cari (result)

var students = [{
        id: 1,
        name: "Zarco"
    },
    {
        id: 2,
        name: "Melandri"
    },
    {
        id: 3,
        name: "Marq"
    }
]

var found = students.findIndex((val) => {
    return val.name == 'Marq'
})

console.log('Index : ' + found)