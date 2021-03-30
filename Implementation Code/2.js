/* Tugas 2 Reverse Words */
let kalimat = "Saya Belajar Javascript";
let reverse = "";
let x = kalimat.length - 1;
for (i = x; i >= 0; i--) {
  if (kalimat[i] == " " || i <= 0) {
    let j = i;
    while (j <= x) {
      reverse = reverse + kalimat[j];
      j++;
    }
    x = i;
  }
}
console.log(reverse);
