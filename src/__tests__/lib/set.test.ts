import { toggleSet } from "../../lib/set";

describe("lib/set", () => {
  describe("toggleSet", () => {
    it("Setに存在しない要素を渡すと、Setに追加して返す", () => {
      const set = new Set([1, 2, 3]);
      const toggled = toggleSet(set, 4);

      expect(toggled).toEqual(new Set([1, 2, 3, 4]));
    });

    it("Setに存在する要素を渡すと、Setから削除して返す", () => {
      const set = new Set([1, 2, 3]);
      const toggled = toggleSet(set, 2);

      expect(toggled).toEqual(new Set([1, 3]));
    });
  });
});
