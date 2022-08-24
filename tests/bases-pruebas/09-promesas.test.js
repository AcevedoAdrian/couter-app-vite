import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
  test("getHeroesByAsync debe de retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      // con esto indicamamos que ya terminamos de ejecutar la funcion asincrona
      done();
    });
  });

  test("getHeroesByAsync debe de retornar un error si el heroe no existe", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
      // con esto indicamamos que ya terminamos de ejecutar la funcion asincrona
      done();
    });
  });
});
