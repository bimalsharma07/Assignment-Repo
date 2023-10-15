const calculator = require('../calculator');

describe('Addition',()=> {

    test('Adding two positive numbers',() => {
        expect(calculator.add (1,2)).toBe(3)
})
    test('Adding a positive and a negative number',()=>{
        expect(calculator.add(3,-1)).toBe(2)
})
    test('Adding a negative and a positive number',()=>{
        expect(calculator.add(-3,1)).toBe(-2)
})

    test('Adding two negative numbers',()=>{
        expect(calculator.add(-2,-2)).toBe(-4)
})
    test('Adding a positive and zero number',()=>{
        expect(calculator.add(2,0)).toBe(2)
})
    test('Adding zero and a negative number',()=>{
        expect(calculator.add(0,-3)).toBe(-3)
})
    test('Adding two zero numbers',()=>{
        expect(calculator.add(0,0)).toBe(0)
})
    test('Adding two decimal numbers',()=>{
        expect(calculator.add(2.30,3.75)).toBe(6.05)
})

})

describe('Division',()=>{

    test('Diving two positive numbers',()=>{
        expect(calculator.divide(4,2)).toBe(2)
})
    test('Dividing two Negative numbers',()=>{
        expect(calculator.divide(-9,-3)).toBe(3)
})
    test('Dividing zero by a number',()=>{
        expect(calculator.divide(0,4)).toBe(0)
})
    test('Dividing a positive number by a nagetive number',()=>{
        expect(calculator.divide(8,-2)).toBe(-4)
})
    test('Dividing a negative number by a positive number',()=>{
        expect(calculator.divide(-2,1)).toBe(-2)
})
    test('Dividing two decimal numbers',()=>{
        expect(calculator.divide(8.75,2.5)).toBe(3.5)
})
    test('Dividing two zero numbers',()=>{
        expect(calculator.divide(0,0)).toBe(NaN)
})
    test('Dividing a positive number by zero',()=>{
        expect(calculator.divide(7,0)).toBe(Infinity)
})
    test('Dividing a negative number by zero',()=>{
        expect(calculator.divide(-5,0)).toBe(-Infinity)
})

})

describe('When no data is passed',()=>{

    test('No data is passed in addition',()=>{
        expect(calculator.add()).toBe(NaN)
})
    test('No data is passed in division',()=>{
        expect(calculator.divide()).toBe(NaN)
})

})
