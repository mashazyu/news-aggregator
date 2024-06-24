import { describe, it, expect } from "vitest";

import { isCreatorAvailable } from "./utils";

describe("isCreatorAvailable()", () => {
  it.each`
    creator        | result
    ${null}        | ${false}
    ${undefined}   | ${false}
    ${[]}          | ${false}
    ${[""]}        | ${false}
    ${["creator"]} | ${true}
  `(
    "if creator value is $creator, function returns $result",
    ({ creator, result }) => {
      expect(isCreatorAvailable(creator)).toEqual(result);
    }
  );
});
