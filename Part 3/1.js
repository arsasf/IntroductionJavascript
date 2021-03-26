/*Tugas 1 
Membuat sebuah Program untuk mengecek hari kerja menggunakan then catch & try catch
*/
const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
      let cek = dataDay.find((item) => {
        return item === day
      })
      if (cek) {
        resolve(cek)
      } else {
        reject(new Error('Hari ini bukan hari kerja'))
      }
    }, 3000)
  })
}
// then & catch
cekHariKerja('sabtu')
  .then((result) => console.log(`${result}`))
  .catch((error) => console.log(`${error}`))
// /*Pada then akan menjalankan proses yang bernilai benar(resolve), sedangkan
// Pada catch akan menjalankan proses yang bernilai salah (reject)
// adapun prosesnya ebagai berikut :
//  1. then||catch = cekHariKerja : day => pemanggilan function
//  2. then||catch = Day ? DattaArray => function
//  3. then||catch = Item === day || !== day => Data Array
//  4. then||catch = cek : true || false => Pengkondisian
//  5. then||catch = cek || error
//  6. then = result||catch = error
// */

//try & catch
async function output() {
  try {
    let result = await cekHariKerja('senin')
    console.log(result)
  } catch (error) {
    console.log(`${error}`)
  }
}
output()
/*Pada try akan menjalankan proses dimana nilai tersebut berisi nilai benar(resolve) 
atau error(reject), sedangkan catch akan menjalankan proses yang bernilai salah (reject)
adapun prosesnya ebagai berikut :
 1. try = cekHariKerja : day => pemanggilan function
 2. try = Day === DattaArray => function
 3. try = Item == day || !== day => Data Array
 4. try||catch= cek : true || false => Pengkondisian 
 5. try||catch = cek || error
 6. try = result||catch = error 
*/
