import searchInsert from "./index";

describe("Test Algorithm", () => {
  it("Test 1", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });
  it("Test 2", () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });
  it("Test 3", () => {
    expect(searchInsert([1, 2, 3, 4, 5, 10], 2)).toBe(1);
  });
  it("Test 4", () => {
    expect(searchInsert([3, 6, 7, 8, 10], 5)).toBe(1);
  });
  it("Test 5", () => {
    expect(searchInsert([-1, 3, 5, 6], 0)).toBe(1);
  });
});
