
function bubbleSort<T>(arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < (arr.length - i -1); j++) {
          if(arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
          }
      }
  }
  return arr;
}
 // Cria lista em ordem aleatória
let v1 = [];
for (let i = 0; i < 10000; i++) {
  v1.push(Math.floor(Math.random() * 10000));
}

// cria lista ja ordenada
let v2 = [];
for (let i = 0; i < 10000; i++) {
  v2.push(i); 
}

// ordem decrescente
let v3 = [];
for (let i = 9999; i >= 0; i--) {
  v3.push(i); 
}


console.log('----------------- Exemplo de Bubble Sort -----------------')
let inicio = performance.now();
bubbleSort(v1)
let fim = performance.now();

let inicio_v2_1 = performance.now();
bubbleSort(v2)
let fim_v2_1 = performance.now();

let inicio_v2_3 = performance.now();
bubbleSort(v2)
let fim_v2_3 = performance.now()

console.log(`O tempo de execução do Buble Sort: ${fim - inicio}`)
console.log(`O tempo de execução do Buble Sort: ${fim_v2_1 - inicio_v2_1}`)
console.log(`O tempo de execução do Buble Sort: ${fim_v2_3 - inicio_v2_3}`)


console.log('----------------- Exemplo de Selection Sort -----------------')

function selectionSort<T>(arr: T[]): T[] {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}

let inicio_2 = performance.now();
selectionSort(v1)
let fim_2 = performance.now();
console.log(`O tempo de duração do Section Sort foi de: ${fim_2 - inicio_2}`)

console.log('----------------- Exemplo de Insertion Sort -----------------')

function insertionSort<T>(arr: T[]): T[] {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
let inicio_3 = performance.now();
insertionSort(v1);
let fim_3 = performance.now();
console.log(`O tempo de duração do Insertion Sort, foi de: ${fim_3 - inicio_3}`);

console.log('----------------- Exemplo de Shell Sort -----------------')

function shellSort<T>(arr: T[]): T[] {
  let n = arr.length;
  let gap = Math.floor(n / 2);
  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}

let inicio_4 = performance.now();
shellSort(v1);
let fim_4 = performance.now();
console.log(`O tempo de duração do Shell Sort foi de: ${fim_4 - inicio_4}`);

console.log('----------------- Exemplo de Merge Sort -----------------')

function mergeSort<T>(arr: T[]): T[] {
  const n = arr.length;
  if (n < 2) 
	  return arr.slice();
  const mid = Math.floor(n / 2);
  const left =  mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

let inicio_6 = performance.now();
mergeSort(v1)
let fim_6 = performance.now();
console.log(`O tempo de duração do mergeSort foi de: ${fim_6 - inicio_6}`);


console.log('----------------- Exemplo de Merge  -----------------')

function merge<T>(a: T[], b: T[]): T[] {
  const result: T[] = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    result.push(a[i] <= b[j] ? a[i++] : b[j++]);
  }
  return result.concat(a.slice(i)).concat(b.slice(j));
}


let inicio_5 = performance.now();
merge(v1, v1);
let fim_5 = performance.now();
console.log(`O tempo de duração do merge foi de: ${fim_5 - inicio_5}`);


console.log('----------------- Exemplo de Quick Sort -----------------')

function quickSort<T>(arr: T[], lo = 0, hi = arr.length - 1): T[] {
  if (lo < hi) {
    const p = partition(arr, lo, hi);
    quickSort(arr, lo, p - 1);
    quickSort(arr, p + 1, hi);
  }
  return arr;
}

function partition<T>(arr: T[], lo: number, hi: number): number {
  const pivot = arr[hi];
  let i = lo;
  for (let j = lo; j < hi; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[hi]] = [arr[hi], arr[i]];
  return i;
}

let inicio_7 = performance.now();
quickSort(v1);
let fim_7 = performance.now();
console.log(`O tempo de duração do Quick Sort foi de: ${fim_7 - inicio_7}`);
