import { describe, it, expect } from "vitest";

import { getCreator, hoursAgo, isCreatorAvailable, limitChars } from "./utils";

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
    ${["creator"]} | ${"creator"}
  `(
    "if creator value is $creator, function returns $result",
    ({ creator, result }) => {
      expect(getCreator(creator)).toEqual(result);
    }
  );
});

describe("hoursAgo()", () => {
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
    const now = new Date();
    expect(hoursAgo(now.toString())).toContain("minutes");

    const twelveHoursAgo = new Date(Date.now() - 12 * 60 * 60 * 1000);
    expect(hoursAgo(twelveHoursAgo.toString())).toContain("hours");

    expect(hoursAgo("2023-02-30")).toContain("days");
  });
});

describe("limitChars()", () => {
  it.each`
    string       | limit | result
    ${null}      | ${5}  | ${""}
    ${undefined} | ${5}  | ${""}
    ${""}        | ${5}  | ${""}
    ${"abcde"}   | ${5}  | ${"abcde"}
    ${"abcdef"}  | ${5}  | ${"abcde..."}
  `(
    "if string value is $string, function returns $result",
    ({ string, result }) => {
      expect(limitChars(string, 5)).toEqual(result);
    }
  );
});
