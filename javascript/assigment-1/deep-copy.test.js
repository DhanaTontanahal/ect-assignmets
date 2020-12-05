const deepCopyFunc = require("./deep-copy");

test("Returns and compares the cloned variable", () => {
    expect(deepCopyFunc("dhana")).toBe("dhana");
});

test('Returns and compares the cloned array', () => {
    expect(deepCopyFunc([1, 2, 3])).toEqual([1, 2, 3]);
});

test('Returns and compares the null and undefined', () => {
    expect(deepCopyFunc(null)).toEqual(null);
});

test('Returns and compares the cloned object', () => {
    expect(deepCopyFunc({"hello":"world"})).toEqual({"hello":"world"});
});

test('Returns and compares the cloned object', () => {
    expect(deepCopyFunc([1,2,{"hello":"world"}])).toEqual([1,2,{"hello":"world"}]);
});