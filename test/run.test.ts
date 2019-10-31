import {testClass} from '../src/run'

test("first unit test", () => {
    expect(new testClass().sum(1,5)).toBe(6);
})
