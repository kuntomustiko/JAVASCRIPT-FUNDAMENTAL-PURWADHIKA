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