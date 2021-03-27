// Tugas 1 : Membuat Biodata Menggunakan Tipe Data Object
const biodata = {
  // Tipe Data String
  name: 'Aulia Safitri',
  // Tipe Data Number
  age: 22,
  // Tipe Data Array
  hobbies: ['Membaca', 'Badmintoon', 'Menonton Film', 'Mendengarkan Musik'],
  // Tipe Data Boolean
  isMaried: false,
  // Tipe Data Array of Object
  schoolList: [
    { name: 'SDN Berangas Barat 2', yearIn: 2004, yearOut: 2010, major: null },
    { name: 'SMP Negeri 1 Alalak', yearIn: 2010, yearOut: 2013, major: null },
    {
      name: 'SMA Negeri 8 Banjarmasin',
      yearIn: 2013,
      yearOut: 2016,
      major: 'IPA',
    },
    {
      name: 'Politeknik Negeri Banjarmasin',
      yearIn: 2016,
      yearOut: 2019,
      major: 'Teknik Informatika',
    },
  ],
  // Tipe Data Array of Object
  skills: [
    { skillName: 'HTML', level: 'advanced' },
    { skillName: 'CSS', level: 'advanced' },
    { skillName: 'Javascript', level: 'Beginner' },
    { skillName: 'PHP', level: 'advanced' },
  ],
  // Tipe Data Boolean
  interestInCoding: true,
}
console.log(biodata)
