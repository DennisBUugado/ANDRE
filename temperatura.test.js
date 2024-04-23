const celsiusParaFahrenheit = require("./temperatura")

test("É palindromo", () => {
    expect(celsiusParaFahrenheit(40)).toBe(104)
})