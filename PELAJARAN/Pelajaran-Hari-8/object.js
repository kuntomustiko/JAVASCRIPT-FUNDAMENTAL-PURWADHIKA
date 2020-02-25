/////////////
// OBJECT //
///////////

// Menggunakan kurung kurawal {}
// tidak mengenal indexing, melainkan property
// Data dari database nantinya akan berbentuk object

// Property : variable didalam object
// Method : function didalam object

// object person memiliki 4 property, dan 1 method
var person = {
    name: 'John',
    age: 79,
    hobbies: ['Run', 'Chase'],
    pets: [{
        name: 'Holly'
    }, {
        name: 'Molly'
    }],
    intro: function () {
        console.log('Halo, Dude')
    }
}

console.log(person)
console.log(person.name)
console.log(person.hobbies)
console.log(person.pets)
console.log(person.pets[1])
person.intro()
console.log()

var person = {
    name: 'John',
    age: 79,
    hobbies: ['Run', 'Chase'],
    pets: [{
        name: 'Holly'
    }, {
        name: 'Molly'
    }],
    // this disini untuk mengakses property yang berada di dalam object 
    intro: function () {
        console.log(`Hallo ${this.name}`)
    }
}

// kita dapat memanggil object di dalam object
// kita memanggil object coba di dalam method intro yang berada di dalam object person
var person = {
    name: 'John',
    age: 79,
    hobbies: ['Run', 'Chase'],
    pets: [{
        name: 'Holly'
    }, {
        name: 'Molly'
    }],
    // this disini untuk mengakses property yang berada di dalam object 
    intro: function (obj) {
        // console.log(`Hallo ${this.name}`)
        obj.coba(this.name)
    }
}

var coba = {
    coba(x) {
        console.log(`I got you ${x}`)
    }
}

person.intro(coba)

var person = {
    name: 'John',
    age: 79,
    hobbies: ['Run', 'Chase'],
    pets: [{
        name: 'Holly'
    }, {
        name: 'Molly'
    }, {
        name: ['Ring', 'Ding', 'Dong']
    }],
    // this disini untuk mengakses property yang berada di dalam object 

    intro: function () {
        console.log(`Hello, My name is${this.name}`)
        console.log(`My age is ${this.age} y.o`)
        console.log(`One of my pet is ${this.pets[0].name}`)
        console.log(`And the other one is, ${this.pets[1].name}`)
        console.log(`Then i have ${this.pets[2].name}`)
    }
}

console.log(person.name)
person.intro()

// menambahkan property
person.address = 'Summarecon'
person.wakeUp = function () {
    console.log('Hello, Good Morning ')
}

// menghapus property
delete person.age
console.log(person)


/////////////////////////////

var mobil = {
    name: "Avanza",
    color: "Grey",
    price: 130000
}
var mobilxxx = {
    xxx: mobil
}
var mobilqu = {
    mobil
}

var month = "January"
var day = "monday"
var year = 2020

// ketika kita ingin mengisi nama property sama dengan nama variabel yang akan menjadi nilai dari property tersebut
// maka kita bisa menulis langsung dengan nama yang sama tersebut
var date = {
    month,
    day,
    year
}

var date2 = {
    month: month,
    day: day,
    year: year
}
console.log(date);
console.log(date2);

var mobil = {
    name: "avanza",
    color: "grey",
    price: 13000
}

//copy doang
// {name: "avanza", color: "grey", price:13000}
var mobilStd = mobil

// copy doang
// copy isi nya saja (isi dari objek mobil)
// {name: "avanza", color: "grey", price:13000}
var mobilDes = {
    ...mobil
}

// copy + mengubah nilai pada property tertentu
// {name: "Xpander", color: "grey", price:13000}
var mobilChange = {
    ...mobil,
    name: "Xpander"
}

// copy + menambah property baru
// {name: "avanza", color: "grey", price:13000, seats: 4}
var mobilAdd = {
    ...mobil,
    seats: 4
}

// copy + menambah property baru + mengubah property tertentu
// {name: "Xpander", color: "grey", price:13000, seats: 4}
var mobilChangeAdd = {
    ...mobil,
    name: "Xpander",
    seats: 4
}