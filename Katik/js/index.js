// menghitung luas segitiga
function submittriangeWide(event){
  event.preventDefault();
  const padInput = document.getElementById("pad");
  const heightInput = document.getElementById("height");
  const pad = parseFloat(padInput.value.trim(), 10);
  const height = parseFloat(heightInput.value.trim(), 10);
  const resultWide = 0.5 * pad * height;
  document.getElementById("formula-wide").textContent = "L = 1/2 * a * t";
  document.getElementById("calculate-wide").textContent = "L = 1/2 * " + pad + " * " + height;
  document.getElementById("result-wide").textContent = "L = " + resultWide;     
}

// menghapus luas segitiga
function resettriangleWide(){
  document.getElementById("formula-wide").textContent = "";
  document.getElementById("calculate-wide").textContent = "";
  document.getElementById("result-wide").textContent = "";     
}

// menghitung keliling segitiga
function submittriangleArea(event){
  event.preventDefault();
  const side1Input = document.getElementById("side1");
  const side2Input = document.getElementById("side2");
  const side3Input = document.getElementById("side3");
  const side1 = parseFloat(side1Input.value.trim(), 10);
  const side2 = parseFloat(side2Input.value.trim(), 10);
  const side3 = parseFloat(side3Input.value.trim(), 10);
  const resultArea = side1 + side2 + side3;
  document.getElementById("formula-area").textContent = "K = S1 + S2 + S3";
  document.getElementById("calculate-area").textContent = "K = " + side1 + " + " + side2 + " + " + side3;
  document.getElementById("result-area").textContent = "K = " + resultArea;     
}

// menghapus keliling segitiga
function resettriangleArea(){
  document.getElementById("formula-area").textContent = "";
  document.getElementById("calculate-area").textContent = "";
  document.getElementById("result-area").textContent = "";     
}

// menghitung luas jajargenjang
function submitparallelogramWide(event){
  event.preventDefault();
  const padInput = document.getElementById("pad");
  const heightInput = document.getElementById("height");
  const pad = parseFloat(padInput.value.trim(), 10);
  const height = parseFloat(heightInput.value.trim(), 10);
  const resultWide = pad * height;
  document.getElementById("formula-wide").textContent = "L = a * t";
  document.getElementById("calculate-wide").textContent = "L = " + pad + " * " + height;
  document.getElementById("result-wide").textContent = "L = " + resultWide;     
}
// menghapus luas jajargenjang
function resetparallelogramWide(){
  document.getElementById("formula-wide").textContent = "";
  document.getElementById("calculate-wide").textContent = "";
  document.getElementById("result-wide").textContent = "";     
}

// menghitung keliling jajargenjang
function submitparallelogramArea(event){
  event.preventDefault();
  const side1Input = document.getElementById("side1");
  const side2Input = document.getElementById("side2");
  const side1 = parseFloat(side1Input.value.trim(), 10);
  const side2 = parseFloat(side2Input.value.trim(), 10);
  const resultArea = 2 * (side1 + side2)
  document.getElementById("formula-area").textContent = "K = 2 * (S1 + S2)";
  document.getElementById("calculate-area").textContent = "K = 2 * " + "(" + side1 + " + " + side2 + ")";
  document.getElementById("result-area").textContent = "K = " + resultArea;     
}

// menghapus keliling jajargenjang
function resetparallelogramArea(){
  document.getElementById("formula-area").textContent = "";
  document.getElementById("calculate-area").textContent = "";
  document.getElementById("result-area").textContent = "";     
}
