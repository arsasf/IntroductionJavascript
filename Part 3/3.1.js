/*Tugas 3
Membuat 2 program mengguakan promise
*/
// Program 1 validasi type data number
let checkTypeData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === 'number') {
        resolve(`Data ${data} valid !`)
      } else {
        reject(new Error(`Data invalid! ${data} is ${typeof data}!`))
      }
    }, 1000)
  })
}
// =============Then & catch
checkTypeData(2)
  .then((result) => console.log(`${result} => Use Then Catch`))
  .catch((reject) => console.log(`${reject}=> Use Then Catch`))

// =============Try & catch
let output = async () => {
  try {
    let result = await checkTypeData('dua')
    console.log(`${result} => Use Try Catch`)
  } catch (error) {
    console.log(`${error} => Use Try Catch`)
  }
}
output()
