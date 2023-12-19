export function merge(
  collection_1: number[],
  collection_2: number[]
): number[] {
  const totalLength = collection_1.length + collection_2.length;
  let merged: number[] = new Array(totalLength);
  let index = 0,
    i = 0,
    j = 0;

  // Merge elements from both arrays in sorted order
  while (i < collection_1.length && j < collection_2.length) {
    if (collection_1[i] < collection_2[j]) {
      merged[index++] = collection_1[i++];
    } else {
      merged[index++] = collection_2[j++];
    }
  }

  // Append remaining elements from either array
  // Using direct assignment to the pre-allocated merged array is more memory efficient
  // than using .concat, as .concat would create an additional array and involve copying elements.
  // This approach avoids the memory overhead of .concat and is more suitable for large arrays.
  while (i < collection_1.length) {
    merged[index++] = collection_1[i++];
  }
  while (j < collection_2.length) {
    merged[index++] = collection_2[j++];
  }

  return merged;
}
