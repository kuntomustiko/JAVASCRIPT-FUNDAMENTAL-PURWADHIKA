/*
App tidak lagi hanya menjual buah, melainkan menjual tiga product lainnya, sehingga kini app akan menjual empat macam product, yaitu :
Makanan Cepat Saji (FastFood)
Properties : category, name, price, stock, expired, qty, total
Pakaian (Cloth)
Properties : category, name, price, stock, size, qty, total
Elektronik (Electronic)
Properties : category, name, price, stock, warranty, qty, total
Buah (Fruit)
Properties : category, name, price, stock, sugarLvl, qty, total
Kini user boleh memilih untuk product apa saja yang ingin dibeli, tidak harus semua
Ketika user ingin belanja dengan product yang sama, qty akhir akan di akumulasi dengan qty sebelumnya.
Ketika user memilih untuk membeli sejumlah qty tertentu, stock akan berkurang
Contoh Apel ada 5, ketika belanja pertama membeli 2 maka tinggal 3, belanja berikutnya tidak bisa membeli apel lebih dari 3.
Keterangan detail product hanya mencantumkan barang yang dibeli saja
Tambahkan menu ke 4 yaitu keluar dari aplikasi
Gunakan Class dalam project ini.
 */



class Market {
    constructor(_category, _name, _price, _stock, _qty, _total) {
        this.category = _category;
        this.name = _name;
        this.price = _price;
        this.stock = _stock;
        this.qty = _qty;
        this.total = _total;
    }
}

class FastFood extends Market {
    constructor(_category, _name, _price, _stock, _expired, _qty, _total) {
        super(_category, _name, _price, _stock, _qty, _total);
        this.expired = _expired;
    }

}

class Cloths extends Market {
    constructor(_category, _name, _price, _stock, _size, _qty, _total) {
        super(_category, _name, _price, _stock, _qty, _total);
        this.size = _size;
    }
}

class Electronics extends Market {
    constructor(_category, _name, _price, _stock, _warranty, _qty, _total) {
        super(_category, _name, _price, _stock, _qty, _total);
        this.warranty = _warranty;
    }

}

class Fruits extends Market {
    constructor(_category, _name, _price, _stock, _sugarLvl, _qty, _total) {
        super(_category, _name, _price, _stock, _qty, _total);
        this.sugarLvl = _sugarLvl;
    }

}



let products = [{
        category: 1,
        name: 'Noodle',
        price: 20000,
        stock: 8,
        expired: 2020,
        qty: 0,
        total: 0
    },
    {
        category: 2,
        name: 'Hoodie',
        price: 15000,
        stock: 7,
        size: 'L',
        qty: 0,
        total: 0
    },
    {
        category: 3,
        name: 'Headphone',
        price: 20000,
        stock: 8,
        warranty: 'Yes',
        qty: 0,
        total: 0
    },
    {
        category: 4,
        name: 'Apel',
        price: 10000,
        stock: 5,
        sugarLvl: 'High',
        qty: 0,
        total: 0
    }

]

var baju = new Fruits(products[3].category,
    products[3].name,
    products[3].price,
    products[3].stock,
    products[3].sugarLvl,
    products[3].qty,
    products[3].total);
// console.log(baju);
var listProductVar = ""

function listProduct() {
    if (products.length > 0) {
        for (let index = 0; index < products.length; index++) {
            // console.log(products[index])
            if (products[index].category == 1) {
                listProductVar += "No. " + `${index + 1}` + ". Category : " + products[index].category + " || Name : " +
                    products[index].name + " || Price : " + products[index].price + " || Stock : " + products[index].stock + " || Expired : " + products[index].expired + " || Qty: " + products[index].qty + " || Total : " + products[index].total + "\n"
                // alert(listProduct += `No. ${index + 1} Category : ${products[index].category} || Name : ${products[index].name} || Price : ${products[index].price} || Stock : ${products[index].stock} || Expired : ${products[index].expired} || Qty: ${products[index].qty} || Total : ${products[index].total} `)
            }

            if (products[index].category == 2) {
                listProductVar += "No. " + `${index + 1}` + ". Category : " + products[index].category + " || Name : " +
                    products[index].name + " || Price : " + products[index].price + " || Stock : " + products[index].stock + " || Size : " + products[index].size + " || Qty: " + products[index].qty + " || Total : " + products[index].total + "\n"
                // alert(listProduct += `No. ${index + 1} Category : ${products[index].category} || Name : ${products[index].name} || Price : ${products[index].price} || Stock : ${products[index].stock} || Expired : ${products[index].expired} || Qty: ${products[index].qty} || Total : ${products[index].total} `)
            }

            if (products[index].category == 3) {
                listProductVar += "No. " + `${index + 1}` + ". Category : " + products[index].category + " || Name : " +
                    products[index].name + " || Price : " + products[index].price + " || Stock : " + products[index].stock + " || Warranty : " + products[index].warranty + " || Qty: " + products[index].qty + " || Total : " + products[index].total + "\n"
                // alert(listProduct += `No. ${index + 1} Category : ${products[index].category} || Name : ${products[index].name} || Price : ${products[index].price} || Stock : ${products[index].stock} || Expired : ${products[index].expired} || Qty: ${products[index].qty} || Total : ${products[index].total} `)
            }

            if (products[index].category == 4) {
                listProductVar += "No. " + `${index + 1}` + ". Category : " + products[index].category + " || Name : " +
                    products[index].name + " || Price : " + products[index].price + " || Stock : " + products[index].stock + " || Sugar Level : " + products[index].sugarLvl + " || Qty: " + products[index].qty + " || Total : " + products[index].total + "\n"
                // alert(listProduct += `No. ${index + 1} Category : ${products[index].category} || Name : ${products[index].name} || Price : ${products[index].price} || Stock : ${products[index].stock} || Expired : ${products[index].expired} || Qty: ${products[index].qty} || Total : ${products[index].total} `)
            }

            // return listProductVar
        }

        return listProductVar
    }

    return listProductVar
}

alert(listProduct())

console.log(listProduct())
// do {
//     uiNomorMenu = parseInt(prompt("Menu Utama\n0. Menampilkan daftar buah\n1. Menambah Buah\n2. Menghapus Buah\n3. Membeli Buah "))
//     if (uiNomorMenu == 0) {

//     }
// } while (menuConditionUtama);