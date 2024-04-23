function ordenadorDeLista(lista, reverse = false) {
    if (reverse) {
        return lista.sort((a, b) => b - a); // Ordena em ordem decrescente
    } else {
        return lista.sort((a, b) => a - b); // Ordena em ordem crescente
    }
}
module.exports = ordenadorDeLista;