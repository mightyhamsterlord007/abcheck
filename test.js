const abCheck = require("./abCheck");

test("abCheck is a function", () => {
    expect(typeof abCheck).toBe("function");
});

test("abCheck 1", () => {
    expect(abCheck("lane borrowed")).toBe("true");
});

test("abCheck 2", () => {
    expect(abCheck("rat bone")).toBe("false");
});

test("abCheck 3", () => {
    expect(abCheck("man  bowling!")).toBe("true");
});