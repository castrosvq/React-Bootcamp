import { getHeroeByIdAsync } from "../../base/09-promesas";

describe("Pruebas con promesas", () => {
  test("getHeroeByIdAsyn debe retornar un héroe async", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroe[0]);
      done();
    });
  });
});
