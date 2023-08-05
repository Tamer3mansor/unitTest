const addFun = require ("../App");

it("pre add function", ()=>{
    expect(addFun.add()).toBe("add")
})


describe("this test for check divide methods", ()=>{
it("divide to correct number ", ()=>{
        expect(addFun.divide(5 , 6)).toBe(1)
    })
it("Return error if second number is zero", ()=>{
        expect(addFun.divide(5 , 0)).toBe("Can not divide by zero or null")
    })
it("Return zero if no number", ()=>{
        expect(addFun.divide()).toBe("Can not divide by zero or null")
    })
})

