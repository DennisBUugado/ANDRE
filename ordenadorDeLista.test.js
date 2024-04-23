const ordenadorDeLista = require("./ordenadorDeLista")

test("Crescente deu certo", () => {
    expect(ordenadorDeLista([5,4,3,2,1])).toEqual([1,2,3,4,5]);
})

test("Decrescente deu certo", () => {
    expect(ordenadorDeLista([1,2,3,4,5], true)).toEqual([5,4,3,2,1]);
})