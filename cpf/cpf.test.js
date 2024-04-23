const { validaCPF } = require('./valida_cpf');

test('CPF válido', () => {
  expect(validaCPF("529.982.247-25")).toBe(true);
  expect(validaCPF("52998224725")).toBe(true);
});
