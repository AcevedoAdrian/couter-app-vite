import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("testeando el componente <CounterApp />", () => {
  const valueInitial = 100;

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={valueInitial} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostra el valor inicial de 100", () => {
    render(<CounterApp value={valueInitial} />);
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      "100"
    );
    // expect(screen.getByText(value)).toBeTruthy();
  });

  test("debe de incrementar en 1 al precionar el boton +1", () => {
    render(<CounterApp value={valueInitial} />);
    // Este es un metodo que nos permite disparar distintos eventos
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText(valueInitial + 1)).toBeTruthy();
  });

  test("debe de decrementar en 1 al precionar el boton -1", () => {
    render(<CounterApp value={valueInitial} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText(valueInitial - 1)).toBeTruthy();
  });

  test("debe de funcionar el boton de reset", () => {
    render(<CounterApp value={valueInitial} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // Capturamos el boton con el nombre de btn-reset, que se lo asiganamos en el componente, este nombre lo asignamos con aria-label, caso contrario si lo asignamos con id o name tomara el nombre desde el nombre que se muestra en el boton no por lo que definimos dentro de las comillas
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(valueInitial)).toBeTruthy();
  });
});
