import { classes } from "../../lib/classes";

describe("lib/classes", () => {
  describe("classes に文字列を渡すと", () => {
    it("文字列を結合して返す", () => {
      const result = classes("foo", "bar");

      expect(result).toBe("foo bar");
    });
  });

  describe("classes に文字列だけでなくnullやundefinedも含めて渡すと", () => {
    it("文字列のみを結合して返す", () => {
      const result = classes("hoge", undefined, "fuga", null, "piyo");

      expect(result).toBe("hoge fuga piyo");
    });
  });
});
