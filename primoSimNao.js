function primoSimNao(number) {
    // 1 não é primo
    if (number <= 1) {
      return false;
    }
  
    // Verificar divisibilidade por todos os inteiros de 2 a sqrt(number)
    for (let i = 2; i < Math.sqrt(number); i++) {
      if (number % i === 0) {
        // Se for divisível por algum número, não é primo
        return false;
      }
    }
  
    // Se não foi divisível por nenhum número, é primo
    return true;
  }

  module.exports = primoSimNao;