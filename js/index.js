function hitungLuas() {
  var inputAlas = document.getElementById("input-alas").value;
  var inputTinggi = document.getElementById("input-tinggi").value;

  if (inputAlas !== "" && inputTinggi !== "") {
    var luas = 0.5 * inputAlas * inputTinggi;

    document.getElementById("hasil-luas").innerText = "Luas = 0.5 x " + inputAlas + " x " + inputTinggi + "\nLuas Segitiga = " + luas;
  } else {
    alert("Nilai Alas atau Tinggi tidak boleh kosong");
  }
}

function resetLuas() {
  document.getElementById("input-alas").value = "";
  document.getElementById("input-tinggi").value = "";
  document.getElementById("hasil-luas").innerText = "";
}

// KALKULATOR KELILING

function hitungKeliling() {
  var inputKiri = document.getElementById("input-kiri").value;
  var inputKanan = document.getElementById("input-kanan").value;
  var inputBawah = document.getElementById("input-bawah").value;

  if (inputKiri !== "" && inputKanan !== "" && inputBawah !== "") {
    var keliling = parseFloat(inputKiri) + parseFloat(inputKanan) + parseFloat(inputBawah);

    document.getElementById("hasil-keliling").innerText = "Keliling = " + inputKiri + " + " + inputKanan + " + " + inputBawah + "\nKeliling Segitiga = " + keliling;
  } else {
    alert("Semua Nilai Sisi tidak boleh kosong");
  }
}

function resetKeliling() {
  document.getElementById("input-kiri").value = "";
  document.getElementById("input-kanan").value = "";
  document.getElementById("input-bawah").value = "";
  document.getElementById("hasil-keliling").innerText = "";
}

document.getElementById("submit-luas").addEventListener("click", hitungLuas);
document.getElementById("reset-luas").addEventListener("click", resetLuas);
document.getElementById("submit-keliling").addEventListener("click", hitungKeliling);
document.getElementById("reset-keliling").addEventListener("click", resetKeliling);
