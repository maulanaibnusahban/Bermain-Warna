const tUbahWarna = document.getElementById("tUbahWarna");
tUbahWarna.addEventListener("click", function () {
  //  document.body.style.backgroundColor = "salmon";
  //  document.body.setAttribute("class", "biru-muda");
  document.body.classList.toggle("biru-muda"); // jika tidak ada classnya maka di tambahkan jika ada di hapus
});

// Membuat elemen <button> baru dengan nama 'tAcakWarna'.
const tAcakWarna = document.createElement("button");
// Membuat teks yang akan ditampilkan di dalam tombol.
const teksTombol = document.createTextNode("Acak Warna");
// Menambahkan teks ke dalam elemen <button>.
tAcakWarna.appendChild(teksTombol);
// Mengatur atribut 'type' dari elemen <button> menjadi 'button'.
tAcakWarna.setAttribute("type", "button");
// Menambahkan elemen <button> setelah elemen dengan nama 'tUbahWarna'.
tUbahWarna.after(tAcakWarna);

// Menambah event listener untuk merubah warna latar belakang secara acak saat elemen dengan id "tAcakWarna" di-klik.
tAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1); // Mendapatkan nilai acak untuk komponen merah.
  const g = Math.round(Math.random() * 255 + 1); // Mendapatkan nilai acak untuk komponen hijau.
  const b = Math.round(Math.random() * 255 + 1); // Mendapatkan nilai acak untuk komponen biru.
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"; // Mengubah warna latar belakang dengan warna yang dihasilkan.
});

// Mengambil elemen <input> dengan nama 'sMerah' dari dokumen HTML.
const sMerah = document.querySelector("input[name=sMerah]");
// Mengambil elemen <input> dengan nama 'sHijau' dari dokumen HTML.
const sHijau = document.querySelector("input[name=sHijau]");
// Mengambil elemen <input> dengan nama 'sBiru' dari dokumen HTML.
const sBiru = document.querySelector("input[name=sBiru]");

// Menambah event listener untuk merubah komponen warna merah dan mengubah warna latar belakang.
sMerah.addEventListener("input", function () {
  const r = sMerah.value; // Mengambil nilai komponen merah.
  const g = sHijau.value; // Mengambil nilai komponen hijau.
  const b = sBiru.value; // Mengambil nilai komponen biru.
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"; // Mengubah warna latar belakang dengan nilai yang diperbarui.
});

// Menambah event listener untuk merubah komponen warna hijau dan mengubah warna latar belakang.
sHijau.addEventListener("input", function () {
  const r = sMerah.value; // Mengambil nilai komponen merah.
  const g = sHijau.value; // Mengambil nilai komponen hijau.
  const b = sBiru.value; // Mengambil nilai komponen biru.
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"; // Mengubah warna latar belakang dengan nilai yang diperbarui.
});

// Menambah event listener untuk merubah komponen warna biru dan mengubah warna latar belakang.
sBiru.addEventListener("input", function () {
  const r = sMerah.value; // Mengambil nilai komponen merah.
  const g = sHijau.value; // Mengambil nilai komponen hijau.
  const b = sBiru.value; // Mengambil nilai komponen biru.
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"; // Mengubah warna latar belakang dengan nilai yang diperbarui.
});

// Menambah event listener untuk merubah warna latar belakang berdasarkan posisi mouse.
document.body.addEventListener("mousemove", function (event) {
  const xpos = Math.round((event.clientX / window.innerWidth) * 255); // Menghitung nilai untuk komponen merah berdasarkan posisi mouse.
  const ypos = Math.round((event.clientY / window.innerWidth) * 255); // Menghitung nilai untuk komponen hijau berdasarkan posisi mouse.
  document.body.style.backgroundColor = "rgb(" + xpos + "," + ypos + ",100)"; // Mengubah warna latar belakang dengan nilai yang diperbarui berdasarkan posisi mouse.
});
// mengetahui posisi mouse
// console.log(event.clientX);
// mengetahui ukuran browser
// console.log(window.innerWidth);
