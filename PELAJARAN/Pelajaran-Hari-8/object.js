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