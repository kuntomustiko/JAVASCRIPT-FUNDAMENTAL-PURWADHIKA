var arrProductAwal = [{
        id: 1579581080923,
        category: 'Fast Food',
        name: "Noodle",
        price: 3500,
        stock: 9,
        qty: 0
    },
    {
        id: 1579581081130,
        category: 'Electronic',
        name: "Headphone",
        price: 4300000,
        stock: 8,
        qty: 0
    },
    {
        id: 1579581081342,
        category: 'Cloth',
        name: "Hoodie",
        price: 300000,
        stock: 7,
        qty: 0
    },
    {
        id: 1579581081577,
        category: 'Fruit',
        name: "Apple",
        price: 10000,
        stock: 8,
        qty: 0
    }
];

var arrProduct = [{
        id: 1579581080923,
        category: 'Fast Food',
        name: "Noodle",
        price: 3500,
        stock: 9,
        qty: 0
    },
    {
        id: 1579581081130,
        category: 'Electronic',
        name: "Headphone",
        price: 4300000,
        stock: 8,
        qty: 0
    },
    {
        id: 1579581081342,
        category: 'Cloth',
        name: "Hoodie",
        price: 300000,
        stock: 7,
        qty: 0
    },
    {
        id: 1579581081577,
        category: 'Fruit',
        name: "Apple",
        price: 10000,
        stock: 8,
        qty: 0
    }
];

var arrCategory = ["All", "Fast Food", "Electronic", "Cloth", "Fruit"];

var arrCart = []

// Render List
var fnRenderList = (data, idx) => {
    // Mapping product
    var resProduct = data.map((obj) => {
        // jika id product sama dengan idx
        if (obj.id == idx) {
            // Textbox
            return `
                <tr>
                    <td>${obj.id}</td>
                    <td><input disabled type="text" value="${obj.category}"></td>
                    <td><input id="nameEdit" type="text" value="${obj.name}"></td>
                    <td><input id="priceEdit" type="text" value="${obj.price}"></td>
                    <td><input id="stockEdit" type="text" value="${obj.stock}"></td>
                    <td><input id="stockEdit" type="text" value="${obj.qty}"></td>
                    <td>
                        <input disabled type="button" value="Add">
                    </td>
                    <td>
                        <input onclick="fnSave(${obj.id})" type="button" value="Save">
                    </td>
                    <td>
                        <input onclick="fnEditCancel()" type="button" value="Cancel">
                    </td>
                </tr>
            `

        } else {
            // String
            return `
                <tr>
                    <td>${obj.id}</td>
                    <td>${obj.category}</td>
                    <td>${obj.name}</td>
                    <td>${obj.price}</td>
                    <td>${obj.stock}</td>
                    <td>${obj.qty}</td>
                    <td>
                        <input onclick="fnAdd(${obj.id})" type="button" value="Add">
                    </td>
                    <td>
                        <input onclick="fnDelete(${obj.id})" type="button" value="Delete">
                    </td>
                    <td>
                        <input onclick="fnEditCancel(${obj.id})" type="button" value="Edit">
                    </td>
                </tr>
            `
        }
    })

    // Mapping category
    var resCategory = arrCategory.map((val) => {
        return `<option>${val}</option>`
    })

    // render product
    document.getElementById('render').innerHTML = resProduct.join("")

    // render category
    document.getElementById('catFilter').innerHTML = resCategory
    document.getElementById('catInput').innerHTML = resCategory

    console.log("resCategory" + resCategory);

}

// Render Cart
var fnRenderCart = () => {
    var listCart = arrCart.map((obj) => {
        return `
            <tr>
                <td>${obj.id}</td>
                <td>${obj.category}</td>
                <td>${obj.name}</td>
                <td>${obj.price}</td>
                <td>${obj.stock}</td>
                <td>${obj.qty}</td>
                <td>
                    <input onclick="fnTambahCart(${obj.id})" type="button" value="Tambah">
                </td>
                <td>
                    <input onclick="fnKurangCart(${obj.id})" type="button" value="Kurang">
                </td>
                <td>
                    <input onclick="fnDeleteCart(${obj.id})" type="button" value="Delete">
                </td>
            </tr>
        `
    })

    document.getElementById('cart').innerHTML = listCart.join('')

}

// Render Filter
var fnRenderFilter = (data) => {
    var resProduct = data.map((obj) => {
        return `
            <tr>
                <td>${obj.id}</td>
                <td>${obj.category}</td>
                <td>${obj.name}</td>
                <td>${obj.price}</td>
                <td>${obj.stock}</td>
                <td>${obj.qty}</td>
                <td>
                    <input onclick="fnDelete(${obj.id})" type="button" value="Delete">
                </td>
                <td>
                    <input onclick="fnEditCancel(${obj.id})" type="button" value="Edit">
                </td>
            </tr>
        `
    })

    // render product
    document.getElementById('render').innerHTML = resProduct.join("")
}


// Input data
var fnInputData = () => {
    // Ambil data
    var name = document.getElementById("name").value
    var price = parseInt(document.getElementById("price").value)
    var stock = parseInt(document.getElementById("stock").value)
    var category = document.getElementById("catInput").value
    var time = new Date()

    // Push ke object
    arrProduct.push({
        id: time.getTime(),
        name: name,
        price: price,
        stock: stock,
        qty: 0,
        category: category
    })

    // Render product
    fnRenderList(arrProduct)
}

// Filter name
var fnFilterName = () => {
    // Ambil data
    var keyword = document.getElementById("keyword").value // N

    // Filter data
    // val = { name: "Noodle", price: 3500, stock : 9}
    var filterResult = arrProduct.filter((val) => {
        // Mengecilkan input user
        keyword = keyword.toLowerCase() // n
        // Mengecilkan nama product
        var prodName = val.name.toLowerCase() // noodle
        // Return true atau false
        // noodle -> n
        return prodName.includes(keyword)
    })

    // Render data
    fnRenderFilter(filterResult)

}

// Filter price
var fnFilterPrice = () => {
    // Ambil data
    var min = document.getElementById('min').value
    var max = document.getElementById('max').value
    var filterResult = arrProduct

    // Cek kedua textbox, apakah sudah terisi keduanya
    // Jika terisi keduanya, lakukan filter
    // Jika salah satu kosong, tidak lakukan filter

    if (!(min == "" || max == "")) {
        // filtering
        // val = { category: 'Fast Food', name: "Noodle"}
        filterResult = arrProduct.filter((val) => {
            return val.price >= min && val.price <= max
        })
    }

    // Render data
    fnRenderFilter(filterResult)
}

// Filter category
var fnFilterCategory = () => {
    // Ambil data
    var selected = document.getElementById("catFilter").value
    var filterResult = arrProduct

    // Filter data
    // selected = "All"
    // val = { category: 'Electronic' , name: "Headphone"}
    if (selected != "All") {
        filterResult = arrProduct.filter((val) => {
            return val.category == selected
        })
    }

    // Render data
    fnRenderFilter(filterResult)
}

// Button Delete Cart
var fnDelete = (idx) => {
    // Delete berdasarkan id
    arrProduct = arrProduct.filter((val) => {
        return val.id != idx
    })

    // Render data
    fnRenderList(arrProduct)
}


// Button Edit and Cancel
var fnEditCancel = (idx) => {
    // Change to text box
    fnRenderList(arrProduct, idx)
}

// Button Save
var fnSave = (idx) => {
    // Ambil data
    var name = document.getElementById("nameEdit").value
    var price = parseInt(document.getElementById("priceEdit").value)
    var stock = parseInt(document.getElementById("stockEdit").value)

    // Cari indexnya
    var foundIdx = arrProduct.findIndex((val) => {
        return val.id == idx
    })

    // Replace data lama
    arrProduct[foundIdx] = {
        ...arrProduct[foundIdx],
        name: name,
        price: price,
        stock: stock,
        harga: 40000
    }

    // Render data
    fnRenderList(arrProduct)
}

// Button Tambah cart
var fnTambahCart = (idx) => {

    // console.log("Tambah" + idx);

    var selectedProduct = arrCart.findIndex((val) => {
        return val.id == idx
    })

    if (arrCart[selectedProduct].stock >= 1) {
        arrCart[selectedProduct].qty += 1
        arrCart[selectedProduct].stock -= 1
    } else {
        alert("stok habis")
    }

    console.log(arrCart);
    // Render data
    fnRenderCart()

}

// Button Kurang cart
var fnKurangCart = (idx) => {
    console.log("Kurang" + idx);
    // Delete berdasarkan id
    arrCart = arrCart.filter((val) => {
        return val.id == idx
    })

    for (let i = 0; i < arrCart.length; i++) {

        if (arrCart[i].qty >= 1) {
            arrCart[i].qty -= 1
            arrCart[i].stock += 1
        } else {
            alert("Tambah Belanjaan Anda")
        }

    }
    // Render data
    fnRenderCart()

}
// Button delete cart
var fnDeleteCart = (idx) => {
    console.log("delete" + idx);

    var selectedProduct = arrCart.findIndex((val) => {
        return val.id == idx
    })
    arrCart[selectedProduct].stock = arrProductAwal.stock
    arrCart[selectedProduct].qty = arrProductAwal.qty
    // Delete berdasarkan id
    arrCart = arrCart.filter((val) => {
        return val.id != idx
    })

    // Render data
    fnRenderCart()

    fnRenderList(arrProduct)

}

// Button add
var fnAdd = (idx) => {

    // // temukan product terpilih
    console.log("arrCart fnAdd " + arrCart.id);
    // jika arrCart kosong
    if (arrCart.length == 0) {
        var selectedProduct = arrProduct.find((val) => {
            return val.id == idx
        })
        selectedProduct.qty = 1
        selectedProduct.stock -= 1
        console.log(selectedProduct + "==0")
        arrCart.push(selectedProduct)
        console.log(arrCart[0].id + "==0")
        fnKurangStockRenderList(idx, selectedProduct.stock, selectedProduct.qty)


        fnRenderCart(idx)
        // fnRenderList(arrProduct, idx)
        // fnKurangStockRenderList(idx)

    } else {
        // jika cart ada isi nya
        console.log(arrCart.length + "== +--")
        console.log(arrCart.id + "== +--")
        var found = arrCart.findIndex((val) => {
            return val.id == idx
        })
        console.log('Idx ' + idx);
        console.log('Index: ' + found);

        if (found >= 0) {

            if (arrCart[found].stock > 0) {
                arrCart[found].stock -= 1
                arrCart[found].qty += 1

                // fnRenderList(arrProduct, idx)
                fnKurangStockRenderList(arrCart[found].id, arrCart[found].stock, arrCart[found].qty)
            } else {
                alert("maaf stock habis")
            }
        }

        if (found < 0) {
            console.log("tambah objek lagi");
            var selectedProduct = arrProduct.find((val) => {
                return val.id == idx
            })
            selectedProduct.qty = 1
            selectedProduct.stock -= 1
            console.log(selectedProduct.id + "==2")
            arrCart.push(selectedProduct)
            fnKurangStockRenderList(selectedProduct.id, selectedProduct.stock, selectedProduct.qty)
            // fnRenderList(idx)
        }
    }

    // tambahkan product tersebut ke cart
    // arrCart.push(selectedProduct)
    // render cart
    fnRenderCart()
}

// ketika mengklik button add di rener list utama maka stock dan qty akan berkurang
var fnKurangStockRenderList = (idx, stock, qty) => {
    var foundIdx = arrProduct.findIndex((val) => {
        return val.id == idx
    })

    var category = arrProduct[foundIdx].category
    var name = arrProduct[foundIdx].name
    var price = arrProduct[foundIdx].price
    // console.log("stock fnKurangStockRenderList -" + stock);
    // console.log("id fnKurangStockRenderList -" + arrProduct[foundIdx].id);

    // Replace data lama
    arrProduct[foundIdx] = {
        ...arrProduct[foundIdx],
        category: category,
        name: name,
        price: price,
        stock: stock,
        qty: qty
    }

    console.log(arrProduct);


    // Render data
    fnRenderList(arrProduct)
}


// Button Payment
var fnPayment = () => {
    //  Bikin list
    var listPayment = arrCart.map((val) => {
        return `<p>${val.id} | ${val.category} | ${val.name} | ${val.price} | ${val.qty}</p> `
    })

    //  Hitung total awal, ppn, total akhir
    var subTotal = 0
    var totalSubTotal = 0
    for (var i = 0; i < arrCart.length; i++) {
        subTotal = arrCart[i].price * arrCart[i].qty
        totalSubTotal += subTotal
    }

    var ppn = totalSubTotal * 0.1
    var finalTotal = totalSubTotal + ppn

    //  tampilkan total awal, ppn, total akhir
    var listDetail = listPayment.join('')
    var listTotal = `<h3>Subtotal : Rp. ${totalSubTotal.toLocaleString()}</h3><h3>ppn : Rp. ${ppn.toLocaleString()}</h3><h3>Final : Rp. ${finalTotal.toLocaleString()}</h3>`
    var finalList = listDetail + listTotal
    document.getElementById('payment').innerHTML = finalList

}



fnRenderList(arrProduct)

/*
... (distructerin)
mobil: {id, cat, name, price , stock}
--> ketika menggunakan ... (titik 3) maka itu untuk menambahkan property baru 
mobilqu: {...mobil, seats: 4}
--> sekarang menjadi {id, catt, name, price, stock, seats:4}

*/

/*
// cek apakah product yang di klik sudah ada di cart?
belum: tambha ke cart
sudah: cari index ke berapa dan update qty
*/