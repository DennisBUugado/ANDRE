function verificaPalindromo(string) {
    // Remover espaços em branco e converter para minúsculas
    string = string.replace(/\s/g, '').toLowerCase();
    // Verificar se a string é igual à sua reversa
    return string === string.split('').reverse().join('');
  }

  module.exports = verificaPalindromo;