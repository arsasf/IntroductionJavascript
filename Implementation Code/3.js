/* Tugas 3 Membuat function menghitung pembelian makanan pada sebuah restoran */

// Proses menghitung potongan harga dari kode promo yang digunakan user
const countVoucher = (price, voucher) => {
  // proses perhitungan potongan harga pada Voucher "ARKAFOOD5"
  if (voucher === "ARKAFOOD5") {
    // Pendeklarasian variabel
    const discount = 0.5;
    const minOrder = 50000;
    const maxPriceDiscount = 50000;
    const totalDiscount = price * discount;
    // menentukan total potongan harga pada setiap kondisi
    if (price >= minOrder && totalDiscount <= maxPriceDiscount) {
      const result = totalDiscount;
      return result;
    } else if (totalDiscount > maxPriceDiscount) {
      const result = maxPriceDiscount;
      return result;
    } else {
      const result = price;
      return result;
    }
    // proses perhitungan potongan harga pada Voucher "DITRAKTIRDEMY"
  } else if (voucher === "DITRAKTIRDEMY") {
    // pendeklarasian variabel
    const discount = 0.6;
    const minOrder = 25000;
    const maxPriceDiscount = 30000;
    const totalDiscount = price * discount;
    // menentukan total potongan harga pada setiap kondisi
    if (price >= minOrder && totalDiscount <= maxPriceDiscount) {
      const result = totalDiscount;
      return result;
    } else if (totalDiscount > maxPriceDiscount) {
      const result = maxPriceDiscount;
      return result;
    } else {
      const result = price;
      return result;
    }
    // Proses perhitungan potongan harga jika Voucher yang dimasukan bukan kode promo
  } else {
    const result = 0;
    return result;
  }
};

// proses menghitung biaya pengiriman, jarak antara rumah buyer dengan restoran
const countDistance = (distance) => {
  // pembulatan keatas untuk jarak dalam satuan KM
  distance = Math.ceil(distance);
  // pendeklarasian variabel
  const shippingCost1 = 5000;
  const shippingCost2 = 3000;
  // menentukan biaya pengirimin sesuai kondisi
  if (distance <= 2) {
    const result = shippingCost1;
    return result;
  } else {
    const distanceFixed = distance - 2;
    const result = distanceFixed * shippingCost2 + shippingCost1;
    return result;
  }
};

// Function utama
const ArkFood = (price, voucher, distance, tax) => {
  // validasi type data yang dimasukan
  if (
    typeof price !== "number" ||
    typeof voucher !== "string" ||
    typeof distance !== "number" ||
    typeof tax !== "boolean"
  ) {
    console.log(`Ada type data yang tidak sesuai!
    1. Harga harus Number    : ${typeof price}
    2. Voucher harus String  : ${typeof voucher}
    3. Jarak harus Number    : ${typeof distance}
    4. Pajak harus Boolean   : ${typeof tax}`);
  } else {
    // validasi nilai dari type data yang dimasukan
    if (!price || !voucher || !distance) {
      console.log(`
      Ada data yang belum di isi atau kosong! Periksa kembali data dengan benar...
      1. Harga Harus Lebih Besar Dari 0                                : ${price}
      2. Voucher : - | ARKAFOOD5 | DITRAKTIRDEMY                       : ${voucher}
      3. Jarak Dalam Satuan KM & Lebih Besar dari 0 (ex: 200M = 0.2KM) : ${distance}
      4. Pajak (TRUE OR FALSE)                                         : ${tax}`);
    } else {
      // proses utama dalam program
      // pendeklarasian variabel
      const countVoucherFixed = countVoucher(price, voucher);
      const countDistanceFixed = countDistance(distance);
      const valueTax = 0.05;
      // jika restoran menggunakan pajak, pajak = 5% / 0.05
      if (tax === true) {
        const countTaxFixed = price * valueTax;
        const subTotal =
          price + countDistanceFixed + countTaxFixed - countVoucherFixed;
        return console.log(`
        ===================================================
        | Pembelian Makanan menggunakan Voucher ${voucher}
        ===================================================
        | harga           : ${price}
        | Potongan Harga  : ${countVoucherFixed}
        | Biaya Antar     : ${countDistanceFixed}
        | Pajak           : ${countTaxFixed}
        ===================================================
        | Sub Total       : ${subTotal}                   
        ===================================================`);
      } else {
        // jika restoran tidak menerapkan pajak, pajak = 0
        // pendeklarasian variabel
        const countTaxFixed = 0;
        const subTotal =
          price + countDistanceFixed + countTaxFixed - countVoucherFixed;
        return console.log(`
        ===================================================
        | Pembelian Makanan menggunakan Voucher ${voucher}
        ===================================================
        | harga           : ${price}
        | Potongan Harga  : ${countVoucherFixed}
        | Biaya Antar     : ${countDistanceFixed}
        | Pajak           : ${countTaxFixed}
        ===================================================
        | Sub Total       : ${subTotal}                   
        ===================================================`);
      }
    }
  }
};
ArkFood(75000, "ARKAFOOD5", 5, true);
