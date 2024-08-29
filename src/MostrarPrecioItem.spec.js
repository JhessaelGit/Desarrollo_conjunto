import mostrarPrecioItem from "./MostrarPrecioItem";

describe("Mostrar items",()=>{
    it("Debe mostrar el precio total",()=>{
        expect(mostrarPrecioItem(2,4)).toEqual("El precio total es: 8");
    })
})