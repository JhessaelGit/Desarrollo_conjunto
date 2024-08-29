import MostrarItems from "./MostrarCantItems";

describe("Mostrar items",()=>{
    it("Debe mostrar la cantidad de items ingresado",()=>{
        expect(MostrarItems(3)).toEqual("La cantidad de items es: 3");
    })
})