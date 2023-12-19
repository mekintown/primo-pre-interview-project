import { merge } from "../src/merge";

test("merge sorted arrays", () => {
  expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  expect(merge([], [1, 2, 3])).toEqual([1, 2, 3]);
  expect(merge([1, 2, 3], [])).toEqual([1, 2, 3]);
  expect(merge([], [])).toEqual([]);
  expect(merge([1, 2, 2, 3], [2, 4])).toEqual([1, 2, 2, 2, 3, 4]);
  expect(merge([1], [2])).toEqual([1, 2]);
  expect(merge([1, 3], [2])).toEqual([1, 2, 3]);
  expect(merge([-3, -1], [-2, 0, 2])).toEqual([-3, -2, -1, 0, 2]);
  expect(merge([2, 4, 6], [2, 4, 6])).toEqual([2, 2, 4, 4, 6, 6]);
});
