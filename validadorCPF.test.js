const validarCPF = require("./validadorCPF")

test("CPF Valido", () => {
    expect(validarCPF("09555128910")).toBe(true);
})