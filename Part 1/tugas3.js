// Tugas 3 : Membuat Segitiga Terbalik

// =========Program=========

// Memasukan jumlah nilai untuk mencetak banyaknya baris dan panjang lengan baris
let printSegitiga= 5;

// Mem-validasi Variabel printSegitiga, Apakah Type Data Number?
if (typeof printSegitiga == 'number' && 

    // Pembatas Masukan Number Bernilai 2 atau lebih Agar terbentuk Segitiga
    printSegitiga >= 2){

    // Mencetak nilai secara menurun dari atas ke bawah (Baris)
    for(let i = printSegitiga; i > 0; i--){

        // Variabel untuk menampung jumlah karakter pada setiap baris
        let lengthBaris = '';

        // Mencetak Nilai Secara Menaik Dari Kiri Ke Kanan (lengan baris)
        for(let j = 1; j <= i; j++ ){
            lengthBaris = lengthBaris + j;
        }
        // Menyimpan Nilai Baris Terakhir Dan Menampilkan Keluaran
        const lengthBarisTerakhir = lengthBaris;
        console.log(lengthBarisTerakhir);
    }
} else {
    console.log('Data harus Number');
}