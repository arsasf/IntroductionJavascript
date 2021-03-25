/*Tugas 3
Membuat 2 program mengguakan promise
*/
// Program 1 validasi type data number
let checkTypeData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === 'number') {
        resolve(data)
      } else {
        reject(
          new Error(`Data tidak tervalidasi, ${data} adalah ${typeof data}!`),
        )
      }
    }, 1000)
  })
}
// =============Then & catch
checkTypeData('2')
  .then((result) => {
    console.log('======Program 1. Validasi Type Data Number======')
    console.log(`(Then Catch) Data ${result} telah tervalidasi ! `)
  })
  .catch((reject) => {
    console.log('======Program 1. Validasi Type Data Number======')
    console.log(`(Then Catch) ${reject}`)
  })

// =============Try & catch
let doAsync = () => checkTypeData(4)
let showAsync = (data) =>
  console.log(`(Try Catch) Data ${data} telah tervalidasi ! `)
let output = async () => {
  try {
    let result = await doAsync()
    showAsync(`${result}`)
  } catch (error) {
    console.log(`(Try Catch) ${error}`)
  }
}
output()

// program 2 Penjumlahan Data dari Nilai Array
let addNumber = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let angka = [2, 6, 8, 15, 9, 10, 30, 100]
      let found = angka.find((int) => {
        return int === number
      })
      if (found) {
        resolve(number)
      } else {
        reject(new Error(`Data Tidak ditemukan. Gagal menghitung ${number}`))
      }
    }, 2000)
  })
}
let added = (number) => {
  let value = number + number
  console.log('\n======Program 2. Penjumlahan Data dari Nilai Array======')
  console.log(
    `(Then Catch) Data ditemukan. Hasil Penjumlahan dari ${number} : ${value}`,
  )
}
// ===============Then & catch
addNumber(15)
  .then((result) => added(result))
  .catch((reject) => {
    console.log('\n======Program 2. Penjumlahan Data dari Nilai Array======')
    console.log(`(Then Catch) ${reject}`)
  })

// =============Try & catch
const doAsyncAdd = () => addNumber(1)
const showAsyncAdd = (number) => {
  let value = number + number
  console.log(
    `(Try Catch) Data ditemukan. Hasil Penjumlahan dari ${number} : ${value}`,
  )
}
const resultAdded = async () => {
  try {
    let result = await doAsyncAdd()
    showAsyncAdd(result)
  } catch (error) {
    console.log(`(Try Catch) ${error}`)
  }
}
resultAdded()
