console.log(`Ini file js eksternal`);

function submit() {

    // akan me-return object
    // var name = document.getElementById("name")
    // console.log(name)

    // akan me-return value / nilai dari object nya
    // var nameValue = document.getElementById("name").value
    // console.log(nameValue)

    // var age = parseInt((document.getElementById("age").value))
    // var age = document.getElementById("age")
    // console.log(typeof (age))
    // console.log(parseInt(age.value))

    // getElementById : return object
    // getElementsByName : return array

    // ---------------------------------------------------------

    // Cara Pertama - 1
    //     var gender = document.getElementsByName("gender")
    //     console.log(gender)
    //     console.log(gender[0].value)

    //     var gendergender 
    //     for(var i = 0; i < gender.length; i++){
    //         if(gender[i].checked == true){
    //             gendergender = gender[i].value
    //         }
    //     }
    // console.log(gendergender)

    // Radion Button hanya bisa di akses oleh html nya aja dengan querySelector

    // querySelector / querySelectorAll : mencari element menggunakan query CSS
    // querySelector : return 1 object
    // querySelectorAll : return array
    // var gender = document.querySelectorAll("input")
    // console.log(gender)

    // yang dipilih harus sama dengan yang berada di html
    // var age = document.querySelectorAll('input[name=gender]:checked')
    // var age = document.querySelectorAll('input[name=gender]:checked').value
    // console.log(age)

    // -------------------------------------------------------------
    var name = document.getElementById("name").value
    var age = parseInt(document.getElementById("age").value)
    var gender = document.querySelector("input[name=gender]:checked").value
    var skills = document.querySelectorAll("input[type=checkbox]:checked")
    var skillArr = []
    for (var i = 0; i < skills.length; i++) {
        skillArr.push(skills[i].value)
    }

    var result = document.getElementById("result")
    result.innerText = `
        Nama saya ${name}\n
        umur saya ${age}\n
        saya ${gender}\n
        kemampuan saya ${skillArr.join(", ")}
    `

    // innerText --> walaupun ada html di dalam text maka akan tetap di baca text
    // innerHTML --> walaupun ada html di dalam text maka akan di tampilkan dalam html
}