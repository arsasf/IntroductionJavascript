// Tugas 3 : Menampilkan nilai diantara dari type Data array

function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (typeof nilaiAwal === 'number' && typeof nilaiAkhir === 'number') {
    // Kesalahan Memasukan nilai
    if (nilaiAwal >= nilaiAkhir) {
      console.log('\nNilai akhir harus lebih besar dari nilai awal')
      // Kesalahan memasukan jumlah Data Array
    } else if (dataArray.length - 1 <= 5) {
      console.log('\nJumlah Angka dalam dataArray tidak ada')
      // Proses Menyeleksi Nilai
    } else {
      // Mengurutkan nilai data Array dari terkecil ke yang terbesar
      const sortir = dataArray.sort((a, b) => a - b)
      // Memfilter dan menampilkan nilai data Array diantara nilaiAwal dan nilai Akhir
      console.log('\nData yang ditemukan:')
      console.log(sortir.filter((a) => a < nilaiAkhir && a > nilaiAwal))
    }
  } else {
    // Kesalahan memasukan type data
    console.log(
      `\nHarap masukan type data Number. Nilai Awal adalah: ${typeof nilaiAwal}, Nilai Nkhir adalah: ${typeof nilaiAkhir}`,
    )
  }
}
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(10, 17, [2, 25])
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(5, 7, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai('a', 20, [2, 25, 4, 14, 17, 30, 8])
