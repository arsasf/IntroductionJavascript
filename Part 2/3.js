// Tugas 3 : Menampilkan nilai diantara dari type Data array

function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  // coding yang diperbaiki urutan if elsenya (number)
  if (typeof nilaiAwal === 'number' && typeof nilaiAkhir === 'number') {
    // Kesalahan Memasukan nilai
    if (nilaiAwal >= nilaiAkhir) {
      return console.log('\nNilai akhir harus lebih besar dari nilai awal')
      // Kesalahan memasukan jumlah Data Array
    } else if (dataArray.length - 1 <= 5) {
      return console.log('\nJumlah Angka dalam dataArray tidak ada')
      // Proses Menyeleksi Nilai
    } else {
      // Mengurutkan nilai data Array dari terkecil ke yang terbesar
      const sortir = dataArray.sort((a, b) => a - b)
      // Memfilter dan menampilkan nilai data Array diantara nilaiAwal dan nilai Akhir
      console.log('\nData yang ditemukan:')
      return console.log(
        sortir.filter((value) => value > nilaiAwal && value < nilaiAkhir), // Coding yang diperbaiki (filter)
      )
    }
  } else {
    // Kesalahan memasukan type data
    return console.log(
      `\nHarap masukan type data Number. Nilai Awal adalah: ${typeof nilaiAwal}, Nilai Nkhir adalah: ${typeof nilaiAkhir}`,
    )
  }
}
seleksiNilai('a', 20, [2, 25, 4, 14, 17, 30, 8]) // nilai awal/akhir bukan type data number
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]) // nilai awal > nilai akhir
seleksiNilai(10, 17, [2, 25]) //nilai data array < 5
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]) // nilai awal < nilai akhr
seleksiNilai(5, 7, [2, 25, 4, 14, 17, 30, 8]) // nilai awal < nilai akhir tidak ada dalam nilai data array
