function bubbleSort(numbers) {
  const arr = [...numbers];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

function sortAndFindMedian(numbers) {
  const sorted = bubbleSort(numbers);
  const n = sorted.length;

  if (n % 2 === 0) {
    return (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
  }

  return sorted[Math.floor(n / 2)];
}

export async function startMedianCLI(ask) {
  const input = await ask("Enter numbers separated by spaces: ");
  const numbers = input.split(" ").map(Number);

  const median = sortAndFindMedian(numbers);
  console.log(`Median: ${median}`);
}
