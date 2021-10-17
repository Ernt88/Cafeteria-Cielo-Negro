//Creacion de variables para el resultado final con el total de paquetes y galletas a entregar.
var Total=0;
var Paquetes=0;
const Final = document.querySelector(".Total p");
const ImgGalletas = document.querySelector(".Total img");

//Creacion de la clase la cual contendra las propiedades a manipular de cada tipo de cafe
function Cafe(btns,valor,contador,CafesTotales, GalletasTotales,GalletasPorCafe)
{
    this.btns = btns;
    this.valor = valor;
    this.contador = contador;
    this.CafesTotales = CafesTotales;
    this.GalletasTotales = GalletasTotales;
    this.GalletasPorCafe = GalletasPorCafe;
}

//creacion de los objetos de tipo cafe
var CafeChico = new Cafe(
    document.querySelectorAll(".Chico .btn"),
    document.querySelector(".Chico span"),
    0,
    document.querySelector(".TotalCafes .chicos"),
    document.querySelector(".TotalGalletas .chicos"),
    0
)

var CafeMediano = new Cafe(
    document.querySelectorAll(".Mediano .btn"),
    document.querySelector(".Mediano span"),
    0,
    document.querySelector(".TotalCafes .medianos"),
    document.querySelector(".TotalGalletas .medianos"),
    3
)

var CafeGrande = new Cafe(
document.querySelectorAll(".Grande .btn"),
document.querySelector(".Grande span"),
0,
document.querySelector(".TotalCafes .grandes"),
document.querySelector(".TotalGalletas .grandes"),
6);
    


var CafeJumbo = new Cafe(
    document.querySelectorAll(".Jumbo .btn"),
    document.querySelector(".Jumbo span"),
    0,
    document.querySelector(".TotalCafes .jumbos"),
    document.querySelector(".TotalGalletas .jumbos"),
    "Paquete"
);

//invocacion del metodo que calculara todo en base a un event listener de los botones(btns) y en base a las propiedades de cada tipo de cafe
Calcular(CafeChico);
Calcular(CafeMediano);
Calcular(CafeGrande);
Calcular(CafeJumbo);


function Calcular(Cafe){
    Cafe.btns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const styles = event.currentTarget.classList;
            if (styles.contains("btn-danger")) {
                Cafe.contador--;
                if(Cafe.contador < 0){
                    Cafe.contador = 0;
                }
                Cafe.valor.textContent = Cafe.contador;
            }
            else if (styles.contains("btn-success")) {
                Cafe.contador++;
                Cafe.valor.textContent = Cafe.contador;
            }
            else { 
                Cafe.CafesTotales.textContent = parseInt(Cafe.CafesTotales.textContent) + Cafe.contador;
                if(typeof(Cafe.GalletasPorCafe) == "string"){ 
                    if(parseInt(Cafe.CafesTotales.textContent) == 1){
                        Cafe.GalletasTotales.textContent = 1 + " Paquete de galletas";
                        Paquetes = 1;
                    }
                    else{
                    Paquetes = parseInt(Cafe.CafesTotales.textContent);
                    Cafe.GalletasTotales.textContent = parseInt(Cafe.CafesTotales.textContent) + " Paquetes de galletas";
                    }
                }
                else if(Cafe.GalletasPorCafe == 3){
                    Cafe.GalletasTotales.textContent = Cafe.CafesTotales.textContent * 3;
                    Total += Cafe.contador * 3;
                }
                else if(Cafe.GalletasPorCafe == 6){
                    Cafe.GalletasTotales.textContent = Cafe.CafesTotales.textContent * 6;
                    Total += Cafe.contador * 6;
                }
                else{ 
                    Cafe.GalletasTotales.textContent = 0;
                }
                
                Cafe.contador = 0;
                Cafe.valor.textContent = 0;
                Final.textContent = "Usted debera entregar " + Paquetes + " paquetes de galletas y " + Total + " galletas";
                ImgGalletas.src = 'IMG/Galletas.jpeg';
            }         
        }) 
    })
    
}