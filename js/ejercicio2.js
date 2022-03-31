function sumatoria(n) {
  let suma = 0,
    terminos = [];

  for (let i = 1; i <= n; i++) {
    terminos.push({i, n});
    suma += Math.pow(i, n);
  }

  return {terminos, suma};
}

document.addEventListener("DOMContentLoaded", () => {
  let formSumatoria = document.getElementById("form-sumatoria");

  formSumatoria.addEventListener("submit", (e) => {
    e.preventDefault();

    let n = document.getElementById("n").value;
    const resultado = document.getElementById("resultado");

    const {terminos, suma} = sumatoria(n);
    const terminosImp = [];

    terminos.forEach((termino) => {
      terminosImp.push(`${termino.i}<sup>${termino.n}</sup>`);
    });

    resultado.innerHTML = `${terminosImp.join(" + ")} = ${suma}`;
  });
});
