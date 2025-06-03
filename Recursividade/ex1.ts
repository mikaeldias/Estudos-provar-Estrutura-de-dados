// Implemente uma função recursiva que permita somar os elementos de um vetor de inteiros.

function somaVetor(vetor: number[], i: number): number {
  if (i < 1) return v[0];
  return vetor[i] + somaVetor(vetor, i - 1);
}

const v = [10, 20, 30, 40, 50];
console.log(`Soma dos elementos: ${somaVetor(v, v.length - 1)}`);
