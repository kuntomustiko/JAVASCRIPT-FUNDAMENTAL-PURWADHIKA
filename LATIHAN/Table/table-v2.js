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
        name: "apple",
        price: 10000,
        stock: 8
    }
];

var arrCategory = ['All', 'Fast Food', 'Electronic', 'Cloth', 'Fruit']

// -------------------- version nulis ES6
var renderList = () => {
    // Mapping product
    var resProduct = arrProduct.map((obj) => {
        return `
            <tr>
                <td>${obj.id}</td>
                <td>${obj.category}</td>
                <td>${obj.name}</td>
                <td>${obj.price}</td>
                <td>${obj.stock}</td>
            </tr>
        `
    })

    // Mapping category
    var resCategory = arrCategory.map((val) => {
        return `<option>${val}</option>`
    })

    // render product
    document.getElementById('render').innerHTML = resProduct.join("")
    // render category
    document.getElementById('catFilterId').innerHTML = resCategory
    document.getElementById('catInput').innerHTML = resCategory
}

// Input Data
var funInputData = () => {

    // Ambil Data dari inputan user di html
    var _name = document.getElementById("nameInput").value
    var _price = parseInt(document.getElementById("priceInput").value)
    var _stock = parseInt(document.getElementById("stockInput").value)
    var _category = document.getElementById("catInput").value
    var _time = new Date()


    // ketika kita ingin membuat id yang berbeda-beda maka buat beradasarkan detik
    // sehingga setiap detik maka id juga berubah

    // Push ke Object
    arrProduct.push({
            id: _time.getTime(),
            name: _name,
            price: _price,
            stock: _stock,
            category: _category
        }

    )
    // Render Tampil Product 

    renderList()
}

var filterName = () => {
    // Ambil data dari inputan user
    var _name = document.getElementById("nameFilter").value
    console.log(_name)
    var _nameInput = _name.toLowerCase()
    console.log(_nameInput)

    // di cek inputan user nya
    var resultFilter = arrProduct.filter((val) => {
        return val.name.toLowerCase().includes(_nameInput)
    })

    // console.log(resultFilter);

    var resProduct = resultFilter.map((obj) => {
        return `
                                    <tr>
                                        <td>${obj.id}</td>
                                        <td>${obj.category}</td>
                                        <td>${obj.name}</td>
                                        <td>${obj.price}</td>
                                        <td>${obj.stock}</td>
                                    </tr>
                                `
    })
    document.getElementById('render').innerHTML = resProduct.join("")

}

//     // render product

var hargaAwal = () => {
    // Ambil data dari inputan user
    var _hargaAwal = document.getElementById("hargaAwalId").value
    console.log(_hargaAwal)
    var _hargaAkhir = document.getElementById("hargaAkhirId").value
    console.log(_hargaAkhir)

    var result = arrProduct.filter((val) => {

        if (_hargaAwal == "" && _hargaAkhir == "") {
            renderList()
        } else if (_hargaAwal == "" || _hargaAkhir == "") {
            renderList()
        } else if (_hargaAkhir == "") {
            return false
        } else {
            return val.price >= _hargaAwal && val.price <= _hargaAkhir
        }
    })

    // console.log(result)

    var resProduct = result.map((obj) => {
        return `
            <tr>
                <td>${obj.id}</td>
                <td>${obj.category}</td>
                <td>${obj.name}</td>
                <td>${obj.price}</td>
                <td>${obj.stock}</td>
            </tr>
            `
    })

    document.getElementById('render').innerHTML = resProduct.join("")

}

var hargaAkhir = () => {
    // Ambil data dari inputan user
    var _hargaAwal = parseInt(document.getElementById("hargaAwalId").value)
    console.log("awal" + _hargaAwal)
    var _hargaAkhir = parseInt(document.getElementById("hargaAkhirId").value)
    console.log(typeof (_hargaAkhir))

    var result = arrProduct.filter((val) => {
        if (_hargaAwal == "" && _hargaAkhir == "") {
            renderList()
        } else if (_hargaAwal == "" || _hargaAkhir == "") {
            renderList()
        } else if (_hargaAwal == "") {
            return false
        } else {
            return val.price >= _hargaAwal && val.price <= _hargaAkhir
        }
    })

    // console.log(result)

    var resProduct = result.map((obj) => {
        return `
            <tr>
                <td>${obj.id}</td>
                <td>${obj.category}</td>
                <td>${obj.name}</td>
                <td>${obj.price}</td>
                <td>${obj.stock}</td>
            </tr>
            `
    })

    document.getElementById('render').innerHTML = resProduct.join("")

}

var catFilter = () => {

    // Ambil data dari inputan user
    var _catFilter = document.getElementById("catFilterId").value
    console.log(_catFilter)

    if (_catFilter == arrCategory[0]) {

        var resProduct = arrProduct.map((obj) => {
            return `
            <tr>
                <td>${obj.id}</td>
                <td>${obj.category}</td>
                <td>${obj.name}</td>
                <td>${obj.price}</td>
                <td>${obj.stock}</td>
            </tr>
            `
        })

        document.getElementById('render').innerHTML = resProduct.join("")

    } else {
        var result = arrProduct.filter((val) => {
            return _catFilter == val.category
        })

        // console.log(result);

        var resProduct = result.map((obj) => {
            return `
            <tr>
                <td>${obj.id}</td>
                <td>${obj.category}</td>
                <td>${obj.name}</td>
                <td>${obj.price}</td>
                <td>${obj.stock}</td>
            </tr>
            `
        })

        document.getElementById('render').innerHTML = resProduct.join("")
    }
}

renderList()