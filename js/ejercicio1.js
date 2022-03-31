function esPrimo(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return n !== 1;
}

function generarPrimos(n) {
  let primos = [];

  for (let i = 2; i <= n; i++) {
    if (esPrimo(i)) {
      primos.push(i);
    }
  }

  return primos;
}

document.addEventListener("DOMContentLoaded", () => {
  let formCalcular = document.getElementById("form-calcular");

  formCalcular.addEventListener("submit", (e) => {
    e.preventDefault();

    const n = document.getElementById("n");
    const message = document.getElementById("validation-message");
    const resultado = document.getElementById("resultado");

    if (!formCalcular.checkValidity()) {
      message.innerHTML = "Se requiere un número";
    } else {
      message.innerHTML = "";

      let primos = generarPrimos(n.value);
      resultado.innerHTML = `Los números primos desde 1 hasta ${n.value} son: ${primos}`;
    }
  });
});
