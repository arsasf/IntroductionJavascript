/*Tugas 3
Membuat 2 program mengguakan promise
*/
// Program 1 validasi type data number
let checkTypeData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === 'number') {
        resolve(`Data ${typeof data} ${data} valid !`)
      } else {
        reject(new Error(`Data invalid! ${data} is ${typeof data}!`))
      }
    }, 1000)
  })
}
// =============Then & catch
checkTypeData(8)
  .then((result) => console.log(`${result}`))
  .catch((reject) => console.log(`${reject}`))

// =============Try & catch
async function output(data) {
  try {
    let result = await checkTypeData(data)
    console.log(`${result}`)
  } catch (error) {
    console.log(`${error}`)
  }
}
output('Delapan')
