const verificaPalindromo = require("./palindromo")

test("É palindromo", () => {
    expect(verificaPalindromo("ovo")).toBe(true)
})

