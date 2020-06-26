import { Utils } from "Core/Utils";

export {};

describe("Utils", () => {
  it("nextNumberCount", () => {
    expect(Utils.nextNumberCount(5, 4, 4)).toBe(0);
  });
  it("nextNumberCount - 1개차이", () => {
    expect(Utils.nextNumberCount(5, 0, 1)).toBe(1);
  });
  it("nextNumberCount - 3개차이", () => {
    expect(Utils.nextNumberCount(5, 3, 1)).toBe(3);
  });
  it("nextNumberCount - 0 - 4 = 4개차이", () => {
    expect(Utils.nextNumberCount(5, 4, 3)).toBe(4);
  });
  it("nextNumberCount - 기준이 0, index는 1 = 1", () => {
    expect(Utils.nextNumberCount(5, 0, 1)).toBe(1);
  });
});
