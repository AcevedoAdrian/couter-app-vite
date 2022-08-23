import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas sobre 07-deses-arr.js", () => {
  test("Esto debe de retornar un string y un numeber", () => {
    const [letters, numbers] = retornaArreglo();

    // validamos si letters es string y si numbers son number usando js
    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    // Para evaluar la equidad tenemos que utilizar el toEqual
    // validamos si letters es string y si numbers son number usando jest

    expect(letters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));
  });
});
