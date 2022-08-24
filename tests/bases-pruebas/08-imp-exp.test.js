import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroesJSON from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe de retornar un heroe por ID", () => {
    const idHeroe = 1;
    const hero = getHeroeById(idHeroe);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getElementById debe de retonar si no existe", () => {
    const idHeroe = 100;
    const hero = getHeroeById(idHeroe);

    // Esto es para saber cuando el resultado en negativo, null, undefined, null, false
    expect(hero).toBeFalsy();
  });
  
  test("getHeroesByOwner debe de regresar heroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(3);
    expect(heroes).toEqual(heroesJSON.filter((heroe) => heroe.owner === owner));
  });

  test("getHeroesByOwner debe de regreasar heroes de Marver", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    expect(heroes).toEqual(heroesJSON.filter((heroe) => heroe.owner === owner));
  });
});
