// Tugas 4 : Spread Operator dan Destructuring

let data = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
}

// Tugas 4a : Mengubah Data Name, Email dan Hobby Menggunakan Spread Opertor
let data1 = {
  name: 'Aulia Safitri',
  email: 'auliasafitri2698@gmail.com',
  hobby: {
    hobby1: 'Membaca',
    hobby2: 'Badmintoon',
    hobby3: 'Menonton Film',
    hobby4: 'Mendengarkan Musik',
  },
}
let ubahData = { ...data, ...data1 }
console.log('Tugas 4a : \n')
console.log(ubahData)

// Tugas 4b : Mengambil Data Street & City Menggunakan Destructuring
const { street, city } = data.address
console.log('\nTugas 4b : \n' + street, city)
