function soma(n: number): number {
  if (n === 1) return 1;
  
  return n + soma(n - 1);
}

const num = parseInt(prompt("Digite um número para somar de 1 até N:")!);
console.log(`Resultado da soma: ${soma(num)}`);
