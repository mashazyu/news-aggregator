import { describe, it, expect } from "vitest";

import { getCreator, timeAgo, isCreatorAvailable, limitChars } from "./utils";

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

describe("timeAgo()", () => {
  it.each`
    dateString          | result
    ${null}             | ${""}
    ${undefined}        | ${""}
    ${"invalid string"} | ${""}
  `(
    "if dateString value is $dateString, function returns $result",
    ({ dateString, result }) => {
      expect(timeAgo(dateString)).toEqual(result);
    }
  );

  it("if dateString contains valid date, function returns correct wording", () => {
    const now = new Date();
    expect(timeAgo(now.toString())).toContain("minutes");

    const twelveHoursAgo = new Date(Date.now() - 12 * 60 * 60 * 1000);
    expect(timeAgo(twelveHoursAgo.toString())).toContain("hours");

    expect(timeAgo("2023-02-30")).toContain("days");
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
