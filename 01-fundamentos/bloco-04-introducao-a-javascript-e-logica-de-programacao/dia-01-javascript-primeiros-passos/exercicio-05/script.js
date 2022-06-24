let x = 60;
let y = 60;
let z = 60;

let somaDosAngulos = x + y + z;
let todosOsAngulosPositivos = x > 0 && y > 0 && z > 0;

if (todosOsAngulosPositivos) {
  if (somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Erro: Ângulo inválido");
}
