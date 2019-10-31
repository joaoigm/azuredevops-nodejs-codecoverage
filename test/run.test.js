"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const run_1 = require("../src/run");
test("first unit test", () => {
    expect(new run_1.testClass().sum(1, 5)).toBe(6);
});
