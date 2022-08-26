import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp /> pero con menos codigo y mas limpio", () => {
  const title = "Hola, Soy Adrian";
  const subTitle = "Hola soy un subtitulo";
  test("debe de hace match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostra el mensaje 'Hola, Soy Adrian'", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    // expect(screen.getByText(title)).not.toBeTruthy();
  });

  test("debe de mostrar el titulo en h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      title
    );
  });
  
  test("debe de mostrar los subtitulos enviados por props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
