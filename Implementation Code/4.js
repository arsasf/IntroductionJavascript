/* Tugas 4  Mengurutkan bilangan integer berdasarkan pemisah angka 0*/
const sortingNumber = (number) => {
  if (typeof number !== "number") {
    console.log(`Input ${number} salah! Data harus bilangan Integer / Angka `);
  } else {
    const splitNumber = number.toString().split(0);
    let arr = [];
    for (let i = 0; i <= splitNumber.length - 1; i++) {
      arr =
        arr +
        splitNumber[i]
          .split("")
          .sort((a, b) => a - b)
          .join("");
    }
    const mergeNumber = parseInt(arr);
    return console.log(mergeNumber);
  }
};
sortingNumber(5956560159466056);
