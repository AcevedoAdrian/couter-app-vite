import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Prueba en 05-funciones.js ", () => {
  test("getUser debe retornar un objeto ", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    // Para comparar igualdad entre 2 objetos
    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const name = "Adrian";

    const userActive = getUsuarioActivo(name);
    // Para comparar igualdad entre 2 objetos
    expect(userActive).toStrictEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
