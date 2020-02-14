var arrProduct = [{
        id: 1579581080923,
        category: 'Fast Food',
        name: "Noodle",
        price: 3500,
        stock: 9
    },
    {
        id: 1579581081130,
        category: 'Electronic',
        name: "Headphone",
        price: 4300000,
        stock: 8
    },
    {
        id: 1579581081342,
        category: 'Cloth',
        name: "Hoodie",
        price: 300000,
        stock: 7
    },
    {
        id: 1579581081577,
        category: 'Fruit',
        name: "Apple",
        price: 10000,
        stock: 8
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
                <td>
                    <input onclick="funDelete(${obj.id})" type="button" value="Delete">
                </td>
                <td>
                    <input onclick="funEditCancel(${obj.id})" type="button" value="Edit">
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

// Button Delete
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

// Button delete cart
var fnDeleteCart = (idx) => {
    // Delete berdasarkan id
    arrCart = arrCart.filter((val) => {
        return val.id != idx
    })

    // Render data
    fnRenderCart()
    fnPayment()

}

// Button add
var fnAdd = (idx) => {
    // temukan product terpilih
    var selectedProduct = arrProduct.find((val) => {
        return val.id == idx
    })

    // tambahkan product tersebut ke cart
    arrCart.push(selectedProduct)

    // render cart
    fnRenderCart()
}

// Button Payment
var fnPayment = () => {
    var subHargaPayment = 0
    for (let i = 0; i < arrCart.length; i++) {
        subHargaPayment += arrCart[i].price
    }

    renderPayment(subHargaPayment)
}

var renderPayment = (subTotal) => {

    var ppn = subTotal * 0.1
    var totalAfterPpn = subTotal + ppn

    var resProduct = arrCart.map((obj) => {
        return `
        <p> ${obj.id} || ${obj.category} || ${obj.name} || ${obj.price} </p>
        `
    })
    // render product
    var finalList = resProduct.join("") +
        ` <h2> Sub Total ${subTotal} </h2>
    <h2> Ppn ${ppn} </h2>
    <h2> Ppn ${totalAfterPpn} </h2>`
    document.getElementById('payment').innerHTML = finalList
}
fnRenderList(arrProduct)