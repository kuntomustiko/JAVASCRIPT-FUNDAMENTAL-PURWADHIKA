// urutkan berdasarkan name
// urutkan berdasarkan umur
// urutkan berdasarkan pekerjaan

// petunjuk
// untuk nama dan pekerjaan menggunakan perbadingan bisa ( > / < / ==) 
// untuk umur pakai asc

var persons = [
    ['John', 43, 'Assasin'],
    ['Tony', 44, 'Engineer'],
    ['Baby', 21, 'Driver'],
    ['Justin', 29, 'Singer']
]


// urutkan berdasarkan nama
function byName(a, b) {
    // a = ['Tony', 44, 'Engineer']
    // b = ['Baby', 21, 'Driver']
    if (a[0] < b[0]) {
        return -1

    } else if (a[0] > b[0]) {
        return 1

    } else {
        return 0
    }
}

// urutkan berdasarkan umur  
function byAge(a, b) {
    return a[1] - b[1]
}

// urutkan berdasarkan pekerjaan
function byJob(a, b) {
    // a = ['Tony', 44, 'Engineer']
    // b = ['Baby', 43, 'Assasin']
    if (a[2] < b[2]) {
        return -1

    } else if (a[2] > b[2]) {
        return 1

    } else {
        return 0
    }
}

persons.sort(byJob)
console.log(persons)