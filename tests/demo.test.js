describe("Prueba en <DemoComponent />", () => {
  // Aca dentro van los distintos test que vamos a escribir.
  test("Esta prueba no puede fallar", () => {
    // 1. Inicializacion.
    const message = "Hola Muendo";
    // 2. Estiomulo.
    const message2 = message.trim();
    // 3. Observamos el comportamiento... el esperado.
    expect(message).toBe(message2);
  });
});
