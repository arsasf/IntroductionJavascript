// Tugas 1 : Membuat 10 built-in Function beserta contohnya

/* 1.1 toString : Mengubah nilai type data menjadi String. 
  toString bisa digunakan untuk semua jenis type data kecuali nilai null.*/

// Contoh penggunaan toString :
const toStringData = (data) => {
  if (typeof data === 'number') {
    const toStringData = data.toString()
    return console.log('Contoh 1.1 Number toString : \n' + toStringData)
  } else if (typeof data === 'string') {
    return console.log('1.1 String to String : \n' + data)
  } else if (Array.isArray(data)) {
    data.toString()
    return console.log('Contoh 1.1 Array toString : \n' + data)
  } else if (typeof data === 'object' && data !== null) {
    const a = data
    a.toString()
    console.log('Contoh 1.1 Obejct toString : ')
    return console.log(a)
  } else if (typeof data === 'function') {
    return console.log('Contoh 1.1 function toString : \n' + data)
  } else if (typeof data === 'undefined') {
    data = typeof undefined
    data.toString()
    return console.log('Contoh 1.1 Undefined toString : \n' + data)
  } else if (data === null) {
    data = typeof null
    data.toString()
    return console.log('Contoh 1.1 Null to String: \n' + data)
  }
}
toStringData(230)
toStringData('Javascript')
toStringData([1, 2, 3, 4, 5])
toStringData({ nme: 'Aul', hobby: 'Menulis' })
toStringData(toStringData)
toStringData()
toStringData(null)

/* 1.2 toUppercase : Mengubah nilai type data pada string menjadi huruf besar semua.
toUpperCase hanya bisa digunakan pada type data String.
Contoh penggunaan toUppercase : */
const toUpperCaseData = (data) => {
  if (typeof data === 'string') {
    data.toUpperCase()
    return console.log('\nContoh 1.2 toUpperCase : \n' + data)
  } else {
    return console.log('Bukan String')
  }
}
toUpperCaseData('Saya Belajar Javascript')

/* 1.3 toLowercase : Mengubah nilai type data pada string menjadi huruf kecil semua.
toLowerCase hanya bisa digunakan pada type data String.
Contoh penggunaan toUppercase dan toLowerCase pada sebuah program mengubah tampilan Data
*/
const toLowerCaseData = (data) => {
  if (typeof data === 'string') {
    data.toLowerCase()
    return console.log('\nContoh 1.3 toLowerCase : \n' + data)
  }
  return console.log('Bukan String')
}
toLowerCaseData('Saya Belajar Javascript')

/* 1.4 push : Menambah nilai paling akhir dari sebuah array*/
function pushDataArray(data, kata) {
  console.log(data)
  data.push(1, 20, 16)
  kata(data)
  return console.log(data)
}
function kata(teks) {
  const teks1 = ['ayam', 'kucing', 'kelinci']
  teks.push(...teks1)
}
console.log('\nContoh 1.4 push pada Array : ')
pushDataArray([1, 2], kata)

/* 1.5 pop : Menghapus nilai paling akhir*/
const popDataArray = (data) => {
  console.log(data)
  data.pop()
  return console.log(data)
}
console.log('\nContoh 1.5 pop pada Array : ')
popDataArray([1, 5, 6, 7, 8])

/* 1.6 Slice : Memotong dan mengembalikan nilai tertentu pada sebuah array dengan 2 parameter,
 parameter pertama adalah nilai awal dan parameter kedua adalah nilai akhir*/
function sliceDataArray(start, end) {
  const data = [1, 2, 3, 4, 5, 6]
  console.log(data)
  const result = data.slice(start, end)
  return console.log(result)
}
console.log('\nContoh 1.6 Slice pada Array : ')
sliceDataArray(1, 4)

/* 1.7 Sort : Mengurutkan nilai data dalam sebuah array dari yang terbesar ke kecil
atau kecil ke terbesar*/
const dataArray = [0, 7, 2, 3, 5, 6]
dataArray.sort(function (a, b) {
  return b - a
})
console.log('\nContoh 1.7 Sort pada Array : ')
console.log(dataArray)

/* 1.8 parseInt : Mengubah suatu type data menjadi type data integer*/
const parseIntData = (value) => {
  if (typeof value !== 'number') {
    const a = parseInt(value)
    return console.log(
      'Type data ' + typeof value + ' sudah dirubah menjadi ' + typeof a,
    )
  } else if (typeof value === 'number') {
    return console.log('Type data yang dimasukan sudah ' + typeof value)
  }
}
console.log('\nContoh 1.8 ParseInt pada Type Data: ')
parseIntData('2')
parseIntData([1, 3, 'Angka'])
parseIntData(2)
parseIntData()

/* 1.9 toFixed : Membulatkan nilai pada type data number
kemudian mengembalikan nilai kedalam String*/
const toFixedNumber = (number1, number2) => {
  const value = number2 / number1
  return console.log(value.toFixed(2))
}
console.log('\nContoh 1.9 toFixed pada Number: ')
toFixedNumber(10, 5)

/* 1.10 toExponential : Mengubah nilai pada type data number menjadi exponential
kemudian mengembalikan nilai tersebut kedalam String*/
const toExponentialData = (number1, number2) => {
  const value = number2 * number1
  return console.log(value.toExponential(1))
}
console.log('\nContoh 1.10 toExponential pada Number: ')
toExponentialData(4, 10)
