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
    mapping = mapping.map((a) => a)
    return console.log(`${isError}, [${mapping}]`)
  } else {
    console.log(`${isError},[]`)
  }
})

/*proses functionnya
1. getmonth (day) => callback : callback not found
2. kondisi => !error  
3. true => callback() || false => error
4. callback() : found => getmonth()
5. getmonth() => true
6. return (null, month)
*/
