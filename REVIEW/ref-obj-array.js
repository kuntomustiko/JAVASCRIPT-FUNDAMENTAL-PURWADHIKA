// ARRAY
// Digunakan untuk menyimpan data yang banyak dalam satu variable
// Setiap data disusun menggunakan index
// index dimulai dari nol

let days = ['Tuesday', 'Wednesday', 'Saturday', 'Weekday', 'Weekend']

// Akses satu data
// days[2] // Saturday

// Akses lebih dari satu data
// days.slice(1,4) // [ 'Wednesday', 'Saturday', 'Weekday' ]

// Hapus satu atau lebih data
// Parameter 1 : start index
// Parameter 2 : banyaknya data
// Parameter 3 : Data baru yang ingin di tambahkan

// Hapus data mulai dari index ke - 1 sebanyak 2 data
// days.splice(1, 2)

// Menambahkan data baru pada index tertentu
// console.log(days);
// days.splice(0,0, 'Monday')
// console.log(days);

// Mengahapus 3 data dari dimulai dari index - 2
// Kemudian pada index - 2 ditambahkan data baru
// console.log(days);
days.splice(2, 3, "Burger", "Kentang")
console.log(days);

var arrProduct = [{
        name: "Noodle",
        price: 3500
    },
    {
        name: "Headphone",
        price: 4300000
    },
    {
        name: "Hoodie",
        price: 300000
    },
    {
        name: "Apple",
        price: 10000
    }
];


// Hapus dua data dari index 1, dan tambahkan 3 data baru
// data baru : obj, str, int, boolean
arrProduct.splice(
    1, 2, {
        ...arrProduct[0],
        name: "Mie ayam",
        bisa: () => {
            console.log("Bisa terus")
        }
    },
    "String",
    23,
    true,
    (x) => {
        console.log("Nih bisa lagi, isinya x : " + x)
    }
)

console.log(arrProduct);

arrProduct[1].bisa()
arrProduct[5](989)