import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

function fibonacci(n: number): number{
    if (n<=1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const rl = readline.createInterface({ input: stdin, output: stdout });
  
async function main() {
    const num = parseInt(await rl.question("Digite um numero para calcular o Fibonacci: "));
    console.log(`Fibonacci(${num}) = ${fibonacci(num)}`);
    rl.close();
}

main();