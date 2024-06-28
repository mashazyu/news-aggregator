import { describe, it, expect } from "vitest";

import { getCreator, hoursAgo, isCreatorAvailable } from "./utils";

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

describe("getCreator()", () => {
  it.each`
    creator        | result
    ${null}        | ${""}
    ${undefined}   | ${""}
    ${[]}          | ${""}
    ${[""]}        | ${""}
    ${["creator"]} | ${"by creator"}
  `(
    "if creator value is $creator, function returns $result",
    ({ creator, result }) => {
      expect(getCreator(creator)).toEqual(result);
    }
  );
});

describe.only("hoursAgo()", () => {
  it.each`
    dateString          | result
    ${null}             | ${""}
    ${undefined}        | ${""}
    ${"invalid string"} | ${""}
  `(
    "if dateString value is $dateString, function returns $result",
    ({ dateString, result }) => {
      expect(hoursAgo(dateString)).toEqual(result);
    }
  );

  it("if dateString contains valid date, function returns correct wording", () => {
    expect(hoursAgo("2023-02-30")).toContain("hours ago");
  });
});
