function generateArray(n) {
  let generatedArray = [];
  for (let i = 0; i < n; i++) {
    generatedArray[i] = Math.floor(Math.random() * 100);
  }
  return generatedArray;
}

export { generateArray };
