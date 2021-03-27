/*Tugas 3
Membuat 2 program mengguakan promise
*/
// program 2 Penjumlahan Data dari Nilai Array
let addNumber = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let angka = [2, 6, 8, 15, 9, 10, 30, 100]
      let found = angka.find((int) => int === number)
      if (found) {
        resolve(number)
      } else {
        reject(new Error(`Data ${number} Not Found`))
      }
    }, 2000)
  })
}
let showAdded = (number) => {
  let value = number + number
  return console.log(`Data Result ${number} + ${number} = ${value}`)
}
// ===============Then & catch
addNumber(15)
  .then((result) => showAdded(result))
  .catch((reject) => console.log(`${reject}`))

// =============Try & catch
async function resultAdded(number) {
  try {
    let result = await addNumber(number)
    await showAdded(result)
  } catch (error) {
    console.log(`${error}`)
  }
}
resultAdded(6)
