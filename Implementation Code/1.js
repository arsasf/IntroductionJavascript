/* Tugas 1 Mendeteksi Palindrom */

let teks = "Malam";
let hasil = "";
for (x = teks.length - 1; x >= 0; x--) {
  if (x >= 0) {
    var teksNew = teks.toUpperCase();
    hasil = hasil + teksNew[x];
  }
}
if (hasil === teksNew) {
  console.log(teks + " Palindrom");
} else {
  console.log(teks + " Bukan Palindrom");
}
