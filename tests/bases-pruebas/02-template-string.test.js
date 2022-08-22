import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Prueba en 02-template-string.test.js", () => {
  test('getSaludo debe de retornar "Hola Adrian"', () => {
    // sujeto de prueba
    const name = "Adrian";
    const message = getSaludo(name);
    expect(message).toBe(`Hello ${name}`);
  });
});
