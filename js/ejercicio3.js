function fibonacci(n) {
  let terminos = [];
  let n1 = 0;
  let n2 = 1;
  terminos.push(n1);
  for (let i = 2; i <= n; i++) {
    terminos.push(n2);
    n2 = n1 + n2;
    n1 = n2 - n1;
  }

  return terminos;
}

document.addEventListener("DOMContentLoaded", () => {
  let formFibonacci = document.getElementById("form-fibonacci");

  formFibonacci.addEventListener("submit", (e) => {
    e.preventDefault();

    let n = document.getElementById("n").value;
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `Los primeros ${n} números de la serie de Fibonacci son: ${fibonacci(
      n,
    ).join(" + ")} + ...`;
  });
});
