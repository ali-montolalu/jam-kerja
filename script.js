const inputHari = document.getElementById("hari");
const inputJam = document.getElementById("jam");
const inputMenit = document.getElementById("menit");
const inputJamkurang = document.getElementById("jamkurang");
const inputMenitkurang = document.getElementById("menitkurang");

inputHari.addEventListener("input", jumlah);
inputJam.addEventListener("input", jumlah);
inputMenit.addEventListener("input", jumlah);
inputJamkurang.addEventListener("input", jumlah);
inputMenitkurang.addEventListener("input", jumlah);

function jumlah() {
  var a = parseInt(inputHari.value);
  var b = parseInt(inputJam.value);
  var c = parseInt(inputMenit.value);
  var e = parseInt(inputJamkurang.value);
  var f = parseInt(inputMenitkurang.value);

  var d = 7; // 1 hari = 7 jam

  // default 0
  if (isNaN(a)) a = 0;
  if (isNaN(b)) b = 0;
  if (isNaN(c)) c = 0;
  if (isNaN(e)) e = 0;
  if (isNaN(f)) f = 0;

  // 👉 semua ke menit
  var totalTambah = a * d * 60 + b * 60 + c;
  var totalKurang = e * 60 + f;

  // 👉 hasil akhir
  var totalMenit = totalTambah - totalKurang;

  // 👉 biar tidak minus
  if (totalMenit < 0) totalMenit = 0;

  if (totalMenit === 0) {
    document.getElementById("hasil").innerHTML = "";
    return;
  }

  // 👉 pecah ke jam & menit
  var jam = Math.floor(totalMenit / 60);
  var menit = totalMenit % 60;

  document.getElementById("hasil").innerHTML = jam + " jam " + menit + " menit";
}
