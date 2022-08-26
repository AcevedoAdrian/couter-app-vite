import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", () => {
  test("Debe de hacer match con el snapshot", () => {
    const title = "Hola Soy Adrian";
    // Esto renderiza el componente en memoria, actualiza el objeto screen que es un objeto propio de react testing librery. Y tambien retorna un objetos que expone ciertas propiedades. Una de ellas es el container, que es un objeto muy parecido al DOM
    const { container } = render(<FirstApp title={title} />);

    // Esto crea un snapshot(toma una fotografia) del componente renderizado en memoria y lo guarda en una carpeta llamada __snapshots__ con el nombre del archivo donde estoy ejecutando. Esta captura la hace graicas a que render retorna el container el cual es como un nodo de html del componente renderizado y con toMatchSnapshot guardamos ese contenido en un archivo.
    //expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el titulo en un h1", () => {
    const title = "Hola Soy Adrian";
    // Obtiene un nodo con texto
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();
    // Buscando un h1 en el componente rensderizado
    // const h1 = container.querySelector("h2");
    // Esto es una hacercion
    // expect(h1.innerHTML).toBe(title);
    // Evalua que contenga dentro del elemento el contenido de title
    // expect(h1.innerHTML).toContain(title);

    // Obteniendo elementos desde el html con un data-test
    // Verifica si este elemento existe en el html
    expect(getByTestId("test-title")).toBeTruthy();

    // verifica si existe el elementento con el contenido indicado en el tobe
    expect(getByTestId("test-title").innerHTML).toBe(title);

    //
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    const title = "Hola, Soy Adrian";
    const subTitle = "Hola, soy un subtitulo";
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );

    expect(getAllByText(subTitle).length).toBe(2);
  });
  
});
