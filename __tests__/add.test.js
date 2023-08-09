const addFun = require("../App");
it("pre add function", () => {
  expect(addFun.add()).toBe("add");
});

describe("this test for check divide methods", () => {
  it("divide to correct number ", () => {
    expect(addFun.divide(5, 6)).toBe(1);
  });
  it("Return error if second number is zero", () => {
    expect(addFun.divide(5, 0)).toBe("Can not divide by zero or null");
  });
  it("Return zero if no number", () => {
    expect(addFun.divide()).toBe("Can not divide by zero or null");
  });
});
describe("thats is practice on matches ", () => {
  it("contain", () => {
    expect(addFun.arr).toContain(5);
  });
  it("Greater Than", () => {
    expect(addFun.arr[1]).toBeGreaterThan(5);
  });
});

expect.extend({
  toBeString(receive) {
    const pass = typeof receive;
    if (pass == 'string' || pass instanceof string) {
      return {
        message: () => `${receive} Is String `,
        pass: true,
      };
    } else {
      return {
        message: () => `${receive} Is Not String Expected To Be String `,
        pass: false,
      };
    }
  },
});
it("Check if string with my own matcher",()=>{
    expect("5").toBeString();
})