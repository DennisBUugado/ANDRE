function validarCPF(cpf) {
    // Remover caracteres não numéricos do CPF
    cpf = cpf.replace(/[^\d]/g, '');
  
    // Verificar se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
  
    // Verificar se todos os dígitos são iguais, o que tornaria o CPF inválido
    const todosDigitosIguais = cpf.split('').every(digito => digito === cpf[0]);
    if (todosDigitosIguais) {
      return false;
    }
  
    // Calcular o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;
  
    // Verificar o primeiro dígito verificador
    if (parseInt(cpf.charAt(9)) !== digitoVerificador1) {
      return false;
    }
  
    // Calcular o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;
  
    // Verificar o segundo dígito verificador
    if (parseInt(cpf.charAt(10)) !== digitoVerificador2) {
      return false;
    }
  
    // Se passou por todas as verificações, o CPF é válido
    return true;
  }

  module.exports = validarCPF;