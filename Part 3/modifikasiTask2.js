/*Tugas 2 
Membuat Program callback function untuk menampilkan semua bulan
menggunakan method map*/
const getmonth = (callback) => {
  let error = false
  setTimeout(() => {
    let month = [
      'January',
      'Fabruary',
      'March',
      'April',
      'May',
      'Juni',
      'Juli',
      'August',
      'September',
      'October',
      'Nopember',
      'Desember',
    ]
    if (!error === !showError) {
      callback(null, month)
    } else {
      callback(new Error('Sorry Data Not Found'), [])
    }
  }, 4000)
}
console.log('Loading...')
const showError = false //Berfungsi untuk menampilkan pesan error. true : menampilkan, false : tidak menampilkan
getmonth((isError, mapping) => {
  if (!isError && mapping) {
    mapping = mapping.map((a) => a)
    return console.log(`Data ${!isError}, Berhasil Ditampilkan!\n${mapping}`)
  } else {
    return console.log(`${isError}, Data Gagal Ditampilkan!\n${mapping}`)
  }
}, showError)
