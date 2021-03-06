const path = require("path");
const filePath = `./${path
  .basename(__filename)
  .split(".")[0]
  .toString()}.js`;
const file = require(`${filePath}`);

describe(__filename, () => {
  test.each`
    a                                                | b    | expected
    ${[1, 0, 1, 1, 0, 0, 0, 1]}                      | ${1} | ${[1]}
    ${[1, 0, 1, 1, 0, 0, 0, 1]}                      | ${2} | ${[1, 4]}
    ${[1, 0, 1, 1, 0, 0, 0, 1]}                      | ${3} | ${[1, 4, 5]}
    ${[1, 0, 1, 1, 0, 0, 0, 1]}                      | ${4} | ${[1, 4, 5, 6]}
    ${[1, 1, 0, 1, 1, 0, 0, 1]}                      | ${1} | ${[2]}
    ${[0, 1, 1, 1, 1, 0, 0, 0]}                      | ${1} | ${[0]}
    ${[0, 1, 1, 0, 0, 0, 1, 1, 1]}                   | ${1} | ${[5]}
    ${[1, 0, 1, 0, 1, 0]}                            | ${1} | ${[1]}
    ${[1, 0, 0, 0, 0, 1]}                            | ${1} | ${[1]}
    ${[1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1]}          | ${2} | ${[1, 2]}
    ${[1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1]}          | ${2} | ${[7, 8]}
    ${[1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0]}          | ${2} | ${[6, 7]}
    ${[1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0]}          | ${3} | ${[6, 7, 9]}
    ${[1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0]}          | ${3} | ${[4, 5, 7]}
    ${[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]}          | ${3} | ${[1, 2, 3]}
    ${[1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0]}          | ${3} | ${[7, 8, 9]}
    ${[1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0]} | ${4} | ${[7, 8, 9, 11]}
    ${[1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0]} | ${4} | ${[8, 9, 10, 11]}
    ${[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]} | ${4} | ${[2, 3, 4, 5]}
  `(
    "returns $expected when calling with the following param/s: a, b",
    ({ a, b, expected }) => {
      expect(file.solution(a, b)).toStrictEqual(expected);
    }
  );
});
