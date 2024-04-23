const primoSimNao = require("./primoSimNao")

test("CPF Valido", () => {
    expect(primoSimNao(11)).toBe(true);
})