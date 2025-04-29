import { getFormattedDateString } from "../../lib/datetime";

describe("lib/datetime", () => {
  describe("getFormattedDateString にDateオブジェクトを渡すと", () => {
    it("yyyy/MM/dd 形式の文字列にして返す", () => {
      const d = new Date("2021-04-10T06:22:55.125Z");
      const result = getFormattedDateString(d);

      expect(result).toBe("2021/04/10");
    });
  });
});
