import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("getsaludo debe retornar hola alba", () => {
    const nombre = "Alba";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });

  test("getsaludo debe retornar hola Pepe si no hay argumento nombre", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Pepe");
  });
});
