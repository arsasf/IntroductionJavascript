/*Tugas 2 
Membuat Program callback function untuk menampilkan semua bulan
menggunakan method map*/
const getmonth = (callback) => {
  setTimeout(() => {
    let error = false
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
    if (!error) {
      callback(null, month)
    } else {
      callback(new Error('Sorry Data Not Found'), [])
    }
  }, 4000)
}
getmonth((isError, mapping) => {
  if (isError === null) {
    isError = null
    mapping = mapping.map((a) => a)
    return console.log(`${isError}, [${mapping}]`)
  } else {
    isError = new Error('Sorry Data Not Found')
    return console.log(`${isError}, []`)
  }
})
