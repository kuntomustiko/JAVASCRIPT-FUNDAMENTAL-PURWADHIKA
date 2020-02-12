// MAP
// Method yang dimiliki oleh array
// Digunakan untuk merubah bentuk Data
// Menerima sebuah function (callback function)
// callback function akan menerima satu parameter
// callback function harus me-return sesuatu
// map akan me-return array baru (result)


var numArr = [1, 2, 3, 4, 5]

// calback function
// 1
function times2(x) {
    return x + 2
}

// function times2(x) {
//     var result = x +2
//     return `Hasil jumlah : ${result}`
// }

// 1
// var result = numArr.map(times2)

// menggunakan MAP langsung memanggil dengan arrow function
var result = numArr.map((x) => {
    return x + 2
})
console.log(numArr);
console.log(result);

// FILTER
// Digunakan untuk menyaring data
// Method yg dimiliki oleh array
// Menerima sebuah function (callback function)
// callback function akan menerima satu parameter
// callback function harus me-return boolean (true / false)
// filter akan me-return array baru (result)

// var numArr = [1, 2, 3, 4, 5]

// var res = numArr.filter((val) => {
//     return val > 3
// })

// console.log(numArr)
// console.log(res)

var arrProduct = [{
        name: "Noodle",
        price: 3500,
    },
    {
        name: "Headphone",
        price: 4300000,
    },
    {
        name: "Hoodie",
        price: 300000,
    },
    {
        name: "Apple",
        price: 10000,
    }
];

// akan memfilter jika price nya kurang dari sama dengan 43K
var result = arrProduct.filter((val) => {
    // akan mengembalikan nilainya (nilai nya bukan true nya) jika true 
    return val.price <= 43000
})

console.log(result)