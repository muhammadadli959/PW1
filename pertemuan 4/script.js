// 1. Variabel

// const x = 1;
// console.log(x);
// x = 2; // error karena const nilainya tidak boleh berubah

// let y = 1;
// console.log(y);
// y = 2;
// console.log(y);

// var z = 1;
// console.log(z);
// z = 2;
// console.log(z);

// Hindari penggunaan var karena hanya berupa function scope
// if (true){
//   var angka = 2;
// }
// console.log(angka);

// function fungsi() {
//   var angka = 1;
// }
// console.log(angka);

// let dan const sudah block scope
// {
//   let a = 1;
// }
// console.log(a);
// {
//   const b = 2;
// }
// console.log(b);

// 2. Tipe Data

// Tipe Data Dasar (Number, String, Boolean, Undefined, Null)
// const a = 1;
// console.log(typeof a);
// const nama = "Andre";
// console.log(typeof nama);
// const benar = true;
// console.log(typeof benar);
// let belumDiisi;
// console.log(typeof belumDiisi);
// const dataNull = null;
// console.log(typeof dataNull); // object (kesalahan historis dari JavaScript, jika diperbaiki ditakutkan kode lama menjadi rusak)

// Tipe Data Kompleks (Object, Function)
// const arr = [1, 2, 3, 4, 5];
// console.log(typeof arr); // object
// const mobil = {
//   merek: "Toyota",
// };
// console.log(typeof mobil);
// const fungsi = function iniFungsi() {};
// console.log(typeof fungsi);

// Template Literals
// const nama = "Andre";
// console.log(`Halo nama saya ${nama}`);

// Bisa juga untuk panggil fungsi
// const tampilkanNama = () => {
//   return "Andre";
// };
// console.log(`Hallo nama saya ${tampilkanNama()}`);

// 3. Operator Aritmatika

// Tambah
// const a = 1;
// const b = 2;
// const c = a + b;
// console.log(c);

// Kurang
// const a = 1;
// const b = 2;
// const c = a - b;
// console.log(c);

// Kali
// const a = 1;
// const b = 2;
// const c = a * b;
// console.log(c);

// Bagi
// const a = 1;
// const b = 2;
// const c = a / b;
// console.log(c);

// Modulo
// const a = 5;
// const b = 2;
// const c = a % b;
// console.log(c);

// Increment
// let a = 1;
// console.log(a++); // 1
// // a menjadi 2
// console.log(++a); // 3

// Decrement
// let b = 3;
// console.log(b--); // 3
// // b menjadi 2
// console.log(--b); // 1

// 4. Operator Assignment
// let a = 2;
// console.log(a);

// a += 2; // a = a + 2
// console.log(a); // 4

// a -= 1; // a = a - 1
// console.log(a); // 3

// a *= 3; // a = a * 3
// console.log(a); // 9

// a /= 2; // a = a / 2
// console.log(a); // 4.5

// a %= 3; // a = a % 3;
// console.log(a); // 1.5

// 5. Pengkondisian

// if, else if, else

// Loose Equality (==), Versi Inequality (!=)
// const a = "1";
// if (a == 1) {
//   console.log("Benar");
// }

// Strict Equality (===), Versi Inequality (!==)
// const b = "1";
// if (b === 1) {
//   console.log("Benar");
// } else {
//   console.log("Salah");
// }

// <, <=, >, >= SAMA SEPERTI VERSI LOOSE
// const a = "10";
// if (a < 2) {
//   console.log(`${a} lebih kecil dari 2`);
// } else if (a > 2) {
//   console.log(`${a} lebih besar dari 2`);
// }

// && (AND), || (OR), ! (NOT) SAMA SEPERTI BIASANYA

// Switch
// const angka = 10;

// // Tidak pakai break
// switch (angka) {
//   case 1:
//     console.log("Satu");
//   case 10:
//     console.log("Sepuluh pertama");
//   case 10:
//     console.log("Sepuluh kedua");
//   default:
//     console.log("Salah input");
// }

// // Pakai break
// switch (angka) {
//   case 1:
//     console.log("Satu");
//     break;
//   case 2:
//     console.log("Dua");
//     break;
//   case 10:
//     console.log("Sepuluh");
//     break;
//   default:
//     console.log("Salah input");
//     break;
// }

// Ternary Operator
// const hasil1 = 20 > 5 ? "Iya" : "Tidak";
// console.log(hasil1);

// const hasil2 = 2 > 5 ? "Iya" : "Tidak";
// console.log(hasil2);

// 6. Perulangan
// for (let i = 1; i <= 10; i++) {
//   //if (i == 5) continue;
//   // if (i == 5) break;
//   console.log(i);
// }

// let j = 1;
// while (j <= 10 && j % 5 == 1) {
//   console.log(j);
//   j++;
// }

// let k = 1;
// do {
//   console.log(k);
//   k++;
// } while (k < 1);

// 7. Array

// Deklarasi Array
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);

// Manipulasi Array

// Push
// const pushed_arr = arr.push(6);
// console.log(arr);
// console.log(pushed_arr);

// // Pop
// const popped_arr = arr.pop();
// console.log(arr);
// console.log(popped_arr);

// Shift, Unshift, Splice, Slice bisa eksplor sendiri

// Looping dan Transformasi

// for...of
// for (num of arr) {
//   console.log(num);
// }

// foreach
// arr.forEach((num) => {
//   console.log(num);
// });

// map
// const doubled = arr.map((num) => num * 2);
// console.log(doubled);

// filter
// const bilanganGenap = arr.filter((num) => num % 2 === 0);
// console.log(bilanganGenap);

// reduce
const arr = [1, 2, 3, 4, 5];

// const initialValue = -1;
// const maxValue = arr.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), initialValue);
// console.log(maxValue);

// const sum = arr.reduce(accumulator, currentValue) => accumulator + currentValue, 10

// Destructuring Array
// const [a, b, c, d, e] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// Spread Operator
// const newArr = [10, 20, ...arr, 30];
// console.log(newArr);

// 8. Fungsi

// Function Declarations
// function tampilkanNama() {
//   console.log("Andre");
// }
// tampilkanNama();

// function kembalikanLima() {
//   return 5;
// }
// console.log(kembalikanLima());

// function Expressions
// const nama = "Andre";
// const tampilkanNama = function (nama) {
//   console.log(nama);
// };
// tampilkanNama(nama);

// const kembalikanSepuluh = function () {
//   return 10;
// };
// console.log(kembalikanSepuluh());

// Arrow Function (harus berupa ekspresi)
// const tampilkanNama = () => {
//   console.log("Andre");
// };
// tampilkanNama();

// const a = 3;
// const b = 7;
// const penjumlahan = (a, b) => a + b; // tidak perlu keyword return jika hanya satu baris
// console.log(penjumlahan(a, b));

// Parameter Default
// function tampilkanNama(nama = "Andre") {
//   console.log(nama);
// }
// tampilkanNama();

// Rest Parameter
// function tampilkanAngkaDanArray(num1, num2, ...rest) {
//   console.log(num1);
//   console.log(num2);
//   console.log(rest);
// }

// tampilkanAngkaDanArray(1, 2, 3, 4, 5);

// Menambahkan argumen menggunakan spread operator
// const arr = [1, 2, 3, 4, 5];

// function tampilkanAngka(a, b, c, d, e) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
//   console.log(e);
// }
// tampilkanAngka(...arr);

// Menetapkan parameter menggunakan destructuring
// const arr2 = [6, 7, 8, 9, 10];

// function tampilkanAngka2([a, b, c, d, e]) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
//   console.log(e);
// }
// tampilkanAngka2(arr2);

// 9. Objek, Properti, dan Method

// Object Literal
// const mobil = {
//   merek: "Toyota Fortuner", // properti
//   warna: "Hitam", // properti
//   kecepatan: 0, // properti
//   // method
//   tambahKecepatan: function () {
//     this.kecepatan += 10;
//     console.log("kecepatan bertambah");
//   },
// };

// console.log(mobil);

// // Membuat properti
// mobil.jumlahCC = 2400;
// console.log(mobil);

// // Mengakses properti
// console.log(mobil.merek);

// // Menghapus properti
// delete mobil.warna;
// console.log(mobil);

// // Memanggil method dalam mobil
// mobil.tambahKecepatan();
// console.log(mobil);

// // Destructuring Object
// const { kecepatan, merek } = mobil; // variabel harus sesuai dengan key, urutan tidak penting
// console.log(kecepatan);
// console.log(merek);

// Object Shorthand
// const merek = "Pajero";
// const kecepatan = 20;

// const mobil = { merek, kecepatan };
// // tidak perlu
// // const mobil = { merek: merek, kecepatan: kecepatan };

// console.log(mobil);

// 10. HTML DOM dan BOM

// DOM: Memungkinkan JavaScript berinteraksi dengan elemen-elemen di dalam halaman web.

// const judulUtama = document.getElementById("judulUtama");
// console.log(judulUtama.innerText);
// judulUtama.innerText = "JavaScript";
// console.log(judulUtama.innerText);

// jika tidak sempat dibahas, silahkan cari tau lebih lanjut tentang:
// 1. querySelector dan querySelectorAll
// 2. .innerHTML, .value, .setAttribute
// 3. .style, .classList.add/remove/toggle
// 4. addEventListener

// BOM: Kumpulan objek yang memungkinkan JavaScript berinteraksi dengan elemen-elemen browser di luar halaman web.

// console
// console.log("Halo, ini console");

// window
// window.alert("Oops, ada peringatan");

// HTML DOM DAN BOM YANG LAIN BISA DIEKSPLOR LEBIH LANJUT SECARA MANDIRI