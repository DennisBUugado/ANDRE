const {adicao, subtracao, multiplicacao, divisao} = require("./calculadora.js")

test("Soma correta", () => {
    expect(adicao(1,2)).toBe(3)
})

test("subtracao correta", () => {
    expect(subtracao(2,1)).toBe(1)
})

test("multiplicacao correta", () => {
    expect(multiplicacao(1,2)).toBe(2)
})

test("divisao correta", () => {
    expect(divisao(10,5)).toBe(2)
})