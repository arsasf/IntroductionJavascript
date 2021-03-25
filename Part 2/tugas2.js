// Tugas 2 :  Program Searching Name

const name = [
  'Abigail',
  'Alexandra',
  'Alison',
  'Amanda',
  'Angela',
  'Bella',
  'Carol',
  'Caroline',
  'Carolyn',
  'Deirdre',
  'Diana',
  'Elizabeth',
  'Ella',
  'Faith',
  'Olivia',
  'Penelope',
]
// Menampilkan hasil akhir kseluruhan
function searchName(character, limit, callback) {
  // Validasi nilai string
  if (typeof character === 'string') {
    // Menampilkan hasil dari nilai Array tanpa batas lengan
    const result = name.filter(function (changeCharacter) {
      return changeCharacter.toLowerCase().indexOf(character.toLowerCase()) > -1
    })
    callback(result, limit)
  } else {
    console.log(
      `Data ${character} yang anda cari tidak ada, type data bernilai ${typeof character}`,
    )
  }
}
// menampilkan hasil dari nilai lengan Array yang sudah dibatasi
function callback(value, limit) {
  // validasi nilai number
  if (typeof limit === 'number') {
    console.log(value.slice(0, limit))
  } else {
    console.log(
      `Nilai limit ${limit} yang anda masukan bukan type data Number, type data bernilai ${typeof limit}`,
    )
  }
}
searchName('aa', 'a', callback)
