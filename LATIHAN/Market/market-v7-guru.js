class Product {
  constructor(category, name, price, stock) {
    this.category = category;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.qty = 0;
    this.total = 0;
  }
}

class FastFood extends Product {
  constructor(category, name, price, stock, expired) {
    super(category, name, price, stock);
    this.expired = expired;
  }
}

class Cloth extends Product {
  constructor(category, name, price, stock, size) {
    super(category, name, price, stock);
    this.size = size;
  }
}

class Electronic extends Product {
  constructor(category, name, price, stock, warranty) {
    super(category, name, price, stock);
    this.warranty = warranty;
  }
}

class Fruit extends Product {
  constructor(category, name, price, stock, sugar) {
    super(category, name, price, stock);
    this.sugar = sugar;
  }
}

let products = [{
    category: 1,
    name: "Noodle",
    price: 20000,
    stock: 8,
    expired: 2020,
    qty: 0,
    total: 0
  },
  {
    category: 2,
    name: "Hoodie",
    price: 15000,
    stock: 7,
    size: "L",
    qty: 0,
    total: 0
  },
  {
    category: 3,
    name: "Headphone",
    price: 20000,
    stock: 8,
    warranty: "Yes",
    qty: 0,
    total: 0
  },
  {
    category: 4,
    name: "Apel",
    price: 10000,
    stock: 5,
    sugar: "High",
    qty: 0,
    total: 0
  }
];

function renderList() {
  var listProducts = "";

  if (products.length > 0) {
    for (var i = 0; i < products.length; i++) {
      // products[i] = {category, name, price, stock, qty, total}

      // Cek kategori
      if (products[i].category == 1) {
        // Fast Food
        listProducts += `${i + 1}. ${products[i].name} | ${
          products[i].stock
        } | ${products[i].price} | ${products[i].expired}\n`;
      } else if (products[i].category == 2) {
        // Cloth
        listProducts += `${i + 1}. ${products[i].name} | ${
          products[i].stock
        } | ${products[i].price} | ${products[i].size}\n`;
      } else if (products[i].category == 3) {
        // Electronic
        listProducts += `${i + 1}. ${products[i].name} | ${
          products[i].stock
        } | ${products[i].price} | ${products[i].warranty}\n`;
      } else if (products[i].category == 4) {
        // Fruits
        listProducts += `${i + 1}. ${products[i].name} | ${
          products[i].stock
        } | ${products[i].price} |  ${products[i].sugar}\n`;
      }
    }

    return listProducts;
  }

  return "Produk tidak tersedia";
}

do {
  var mainOpt = parseInt(
    prompt(
      "Menu Utama : \n\n" +
      "1. Menampilkan daftar buah\n" +
      "2. Menambah buah\n" +
      "3. Menghapus buah\n" +
      "4. Membeli buah\n" +
      "5. Exit\n\n"
    )
  );

  switch (mainOpt) {
    case 1: // Daftar buah
      alert(renderList());

      // press ok, repeat = true
      // press cancel, repeat = false
      var repeat = confirm("Kembali ke menu utama ?");
      break;
    case 2: // Menambah buah
      var catOpt = parseInt(
        prompt(
          "Kategori produk yang ingin ditambahkan\n\n" +
          "1 . Cepat Saji \n" +
          "2 . Pakaian \n" +
          "3 . Elektronik \n" +
          "4 . Buah \n\n"
        )
      );

      // tanya nama, stock, dan harga
      var newName = prompt("Masukkan nama :");
      var newStock = parseInt(prompt("Masukkan stock :"));
      var newPrice = parseInt(prompt("Masukkan harga :"));

      if (catOpt == 1) {
        // Fast Food
        var expired = prompt("Masukkan waktu expired :");
        var newProduct = new FastFood(1, newName, newPrice, newStock, expired);
      } else if (catOpt == 2) {
        // Cloth
        var size = prompt("Masukkan size :");
        var newProduct = new Cloth(2, newName, newPrice, newStock, size);
      } else if (catOpt == 3) {
        // Electronic
        var warranty = prompt("Apakah memiliki garansi (ya / tidak):");
        var newProduct = new Electronic(
          3,
          newName,
          newPrice,
          newStock,
          warranty
        );
      } else if (catOpt == 4) {
        // Fruits
        var sugar = prompt("Masukkan tingkat kandungan gula  :");
        var newProduct = new Fruit(4, newName, newPrice, newStock, sugar);
      }

      // push ke masing - masing array
      products.push(newProduct);

      // tampilkan list buah
      alert(renderList());

      // press ok, repeat = true
      // press cancel, repeat = false
      var repeat = confirm("Kembali ke menu utama ?");
      break;
    case 3: // Menghapus buah
      // munculkan list, minta input user
      var selected = parseInt(prompt(`Pilih product :\n\n${renderList()}`)) - 1;

      // hapus buah pada index terpilih
      products.splice(selected, 1);

      // munculkan list
      alert(renderList());

      // press ok, repeat = true
      // press cancel, repeat = false
      var repeat = confirm("Kembali ke menu utama ?");
      break;
    case 4: // Membeli buah
      // total biaya kesuluruhan
      let totalPrice = 0;

      do {
        // Menerima input pilihan user
        var idProduct =
          parseInt(prompt(`Pilih product :\n\n${renderList()}`)) - 1;

        do {
          // Menerima input qty dari product yang dipilih
          var qtyProduct = parseInt(
            prompt(`Masukkan jumlah ${products[idProduct].name}`)
          );

          // Jika melebihi stock
          if (qtyProduct > products[idProduct].stock) {
            alert(
              `Kesalahan dalam input, stock product = ${products[idProduct].stock}`
            );
          } else {
            // Menambahkan qty
            products[idProduct].qty += qtyProduct;
            // Mengurangi stock
            products[idProduct].stock -= qtyProduct;
          }
        } while (qtyProduct > products[idProduct].stock);

        // return true / false
        var again = confirm("Ingin belanja lainnya ?");

        // Akan mengulang loop jika qty lebih besar dari stock
      } while (again);

      // di bawah ini belum selesai di pindah dipelajari ke market-v7-guru.js

      for (var i = 0; i < products.length; i++) {
        if (products[i].qty > 0) {
          //  total biaya per buah
          products[i].total = products[i].price * products[i].qty;
          // total biaya kesuluruhan
          totalPrice += products[i].total;
        }
      }

      var detailStr = "";
      for (var i = 0; i < products.length; i++) {
        if (products[i].qty > 0) {
          detailStr += `${products[i].name} : ${products[i].qty} x ${products[i].price} = ${products[i].total}\n`;
        }
      }

      // Munculkan Alert
      alert(
        "Detail Belanja \n\n" +
        detailStr +
        "\n" +
        "Total : Rp. " +
        totalPrice.toLocaleString("in")
      );

      var moneyCondition;
      do {
        // User input uang
        var money = parseInt(prompt("Masukkan jumlah uang : "));

        // Cari selisih uang dan total biaya
        var margin = money - totalPrice;

        // Jika uang user kurang
        if (money < totalPrice) {
          alert(`Mohon input kembali, uang Anda kurang Rp. ${margin}`);
          moneyCondition = true;

          // Jika uang user lebih
        } else if (money > totalPrice) {
          alert(`Terimakasih\n\nUang kembali Anda Rp. ${margin}`);
          moneyCondition = false;

          // Jika uang user pas
        } else {
          alert("Terimakasih !");
          moneyCondition = false;
        }
      } while (moneyCondition);
      // press ok, repeat = true
      // press cancel, repeat = false
      var repeat = confirm("Kembali ke menu utama ?");
      break;

    case 5:
      alert("Dadah ...");
      var repeat = false;
  }
} while (repeat);

/*
- Ubah penyimpanan data menjadi array of object
    - Berikan kepada student nilai awal array ini
    - Student akan refactor kode.
- Buatlah sebuah function untuk membuat sebuah list product
*/