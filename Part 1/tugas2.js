// Tugas 2 : Menghitung rata-rata UN beserta Grade
    // ketentuan sebagai berikut:
    // 90 - 100 = A
    // 80 - 89 = B
    // 70 - 79 = C
    // 60 - 69 = D
    // 0 - 59 = E

// ============Program=============
//Memasukan Nilai Setiap Mata Pelajaran
let mtk = 90.03;
let bahasaIndonesia = 90;
let bahasaInggris = 100;
let ipa = 79;
    if  (  // Mem-validasi Semua Nilai, Apakah Sudah Terisi dengan Angka 0 - 100?
            typeof mtk == 'number' && mtk >= 0 && mtk <= 100 &&
            typeof bahasaIndonesia == 'number' && bahasaIndonesia >= 0 && bahasaIndonesia <= 100 &&
            typeof bahasaInggris == 'number' && bahasaInggris >= 0 && bahasaInggris <= 100 &&
            typeof ipa == 'number' && ipa >= 0 && ipa <= 100
        )
        {
            // Menghitung Rata-rata Nilai UN
            const rata_rata = ( mtk + bahasaIndonesia + bahasaInggris + ipa)/4;

            // Mengecek dan Menampilkan keluaran Grade Nilai UN
            if ( rata_rata >= 90){
                const grade = 'A';
                console.log('Rata-rata = ' + rata_rata + '\nGrade = ' + grade)
            }else if (rata_rata >= 80 && rata_rata < 90){
                const grade = 'B';
                console.log('Rata-rata = ' + rata_rata + '\nGrade = ' + grade)
            }else if (rata_rata >= 70 && rata_rata < 80){
                const grade = 'C';
                console.log('Rata-rata = ' + rata_rata + '\nGrade = ' + grade)
            }else if (rata_rata >= 60 && rata_rata < 70){
                const grade = 'D';
                console.log('Rata-rata = ' + rata_rata + '\nGrade = ' + grade)
            }else if (rata_rata >= 0 && rata_rata < 60){
                const grade = 'E';
                console.log('Rata-rata = ' + rata_rata + '\nGrade = ' + grade)
            }
    }else{

        // Data Tidak Ter-validasi
        console.log(
        ' Ada Nilai yang belum di isi,\n Nilai harus Angka dan bernilai 0 sampai dengan 100'
        );
    }