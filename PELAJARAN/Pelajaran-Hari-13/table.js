console.log('Hallo')
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

var arrCategory = ['All', 'Fast Food', 'Electronic', 'Cloth', 'Fruit']

// callback function, menerima object {id, name, price, ...}
// function table(obj) {
//     return `
//     <tr>
//     <td>${obj.id}</td>
//     <td>${obj.category}</td>
//     <td>${obj.name}</td>
//     <td>${obj.price}</td>
//     <td>${obj.stock}</td>
//     </tr>`
// }

// function category(val) {
//     return `
//     <option value="">${val}</option>
//     `
// }



// var renderList = () => {
//     var resultTable = arrProduct.map(table)
//     var resultCatFilter = listCategory.map(category)
//     var resultCatInput = listCategory.map(category)
//     document.getElementById('render').innerHTML = resultTable.join("")
//     document.getElementById('catFilter').innerHTML = resultCatFilter
//     document.getElementById('catInput').innerHTML = resultCatInput
// }

// renderList()

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
    document.getElementById('catFilter').innerHTML = resCategory
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

renderList()