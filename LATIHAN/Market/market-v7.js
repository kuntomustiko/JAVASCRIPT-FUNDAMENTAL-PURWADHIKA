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
  constructor(_category, _name, _price, _stock) {
    this.category = _category;
    this.name = _name;
    this.price = _price;
    this.stock = _stock;
    this.qty = 0;
    this.total = 0;
  }
}

class FastFood extends Market {
  constructor(_category, _name, _price, _stock, _expired) {
    super(_category, _name, _price, _stock);
    this.expired = _expired;
  }
}

class Cloth extends Market {
  constructor(_category, _name, _price, _stock, _size) {
    super(_category, _name, _price, _stock);
    this.size = _size;
  }
}

class Electronic extends Market {
  constructor(_category, _name, _price, _stock, _warranty) {
    super(_category, _name, _price, _stock);
    this.warranty = _warranty;
  }
}

class Fruit extends Market {
  constructor(_category, _name, _price, _stock, _sugarLvl) {
    super(_category, _name, _price, _stock);
    this.sugarLvl = _sugarLvl;
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
    sugarLvl: "High",
    qty: 0,
    total: 0
  }
];

// console.log(baju);

function renderList() {
  var listProducts = "";
  if (products.length > 0) {
    for (let index = 0; index < products.length; index++) {
      if (products[index].category == 1) {
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
        // Fruit
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
    case 1:
      // tampil daftar buah
      alert(renderList());
      // press ok, repeat = true
      // press cancel, repeat = false
      var repeat = confirm("kembali ke menu utama");
      break;
    case 2:
      // menambah buah
      var catOpt = parseInt(
        prompt(
          "Kategori produk yang ingin ditambahkan\n\n" +
          "1 . Cepat Saji \n" +
          "2 . Pakaian \n" +
          "3 . Elektronik \n" +
          "4 . Buah \n\n"
        )
      );

      // tanya yang di miliki oleh semua kategory
      // tanya nama, stock, dan harga
      var newName = prompt("Masukkan nama : ");
      var newStock = parseInt(prompt("Masukkan stock : "));
      var newPrice = parseInt(prompt("Masukkan Harga : "));

      if (catOpt == 1) {
        // Fast Food Category
        var expired = prompt("Masukkan waktu expired : ");
        var newProduct = new FastFood(1, newName, newPrice, newStock, expired);
      } else if (catOpt == 2) {
        // Cloth Category
        var size = prompt("Masukkan size : ");
        var newProduct = new Cloth(
          2,
          newName,
          newPrice,
          newStock,
          size);
      } else if (catOpt == 3) {
        // Electronic Category
        var warranty = prompt("Apakah memiliki garansi [yes/no] : ");
        var newProduct = new Electronic(
          3,
          newName,
          newPrice,
          newStock,
          warranty
        );
      } else if (catOpt == 4) {
        // Fruits Category
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
    case 3:
      // Menghapus Buah
      // Munculkan list, minta input user
      var selected = parseInt(prompt(`Pilih product :\n\n${renderList()}`)) - 1;

      // hapus buah pada index terpilih
      products.splice(selected, 1);

      // munculkan list
      alert(renderList())

      // press ok, repeat = true
      // press cancel, repeat = false
      var repeat = confirm("Kembali ke menu utama ?");
      break;
    case 4:
      // Membeli Buah
      // Total biaya keseluruhan
      var totalPrice = 0;

      do {
        // Menerima input pilihan user , pilihan barang yang ingin di beli
        var idProduct =
          parseInt(prompt(`Pilih product :\n\n${renderList()}`)) - 1;

        do {
          // Menerima input qty dari product yang dipilih
          var qtyProduct = parseInt(
            prompt(`Masukkan jumlah ${products[idProduct].name}`)
          );

          // Jika Melebih stock
          if (qtyProduct > products[idProduct].stock) {
            alert(
              `Kesalahan dalam input, stock product = ${products[idProduct].stock}`
            );
          } else {

            // Menambah qty
            products[idProduct].qty += qtyProduct;
            // Mengurangi stock
            products[idProduct].stock -= qtyProduct;
          }

        } while (qtyProduct > products[idProduct].stock);

        // return true / false
        var again = confirm("Ingin belanja lainnya ?");

        // Akan mengulang loop jika qty lebih besar dari stock
      } while (again);

      // sampai sini sebelum selesai

      for (var i = 0; i < products.length; i++) {
        if (products[i].qty > 0) {
          // total biaya per buah
          products[i].total = products[i].price * products[i].qty;
          // total biaya keseluruhan
          totalPrice += products[i].total
        }
      }

      var detailStr = "";
      for (var i = 0; i < products.length; i++) {
        if (products[i].qty > 0) {
          detailStr += `${products[i].name} : ${products[i].qty} x ${products[i].price} = ${products[i].total}\n`;
        }
      }

      // Memunculkan Alert
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
      break;
  }
} while (repeat);