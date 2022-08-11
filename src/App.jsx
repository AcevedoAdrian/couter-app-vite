// Esta función no se va a volver a cargar en memoria cuando se realice el render de nuevo. Ya que esta fuera del functional component que hace el rende
const sum = (a, b) => {
  const c = a + b;
  return `El resultado es ${c}`;
};

export const App = () => {
  return (
    <>
      {sum(3, 3)}
      <h1>Hello World</h1>
    </>
  );
};
