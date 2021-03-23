// Tugas 3 : Menampilkan nilai diantara dari type Data array

function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  // Validasi nilaiAwal < nilaiAkhir?
  if (nilaiAwal >= nilaiAkhir) {
    console.log('\nNilai akhir harus lebih dari nilai awal')
    // validasi nilai dataArray > 5?
  } else if (dataArray.length - 1 <= 5) {
    console.log('\nJumlah Angka dalam dataArray tidak ada')
  } else if (nilaiAwal < nilaiAkhir) {
    // Mengurutkan nilai data Array dari terkecil ke yang terbesar
    dataArray.sort((a, b) => a - b)
    // Memfilter dan menampilkan nilai data Array diantara nilaiAwal dan nilai Akhir
    console.log(
      dataArray.filter((a) => a > nilaiAwal).filter((b) => b < nilaiAkhir),
    )
    // validasi nilai number?
  } else if (nilaiAwal !== 'number' && nilaiAkhir !== 'number') {
    console.log('\nNilai bukan Angka, Silahkan masukan kembali')
  }
}
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(10, 17, [2, 25])
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai('a', 20, [2, 25, 4, 14, 17, 30, 8])
