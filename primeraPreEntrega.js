//1.- variables
//2.- condicionales
//3.- ciclos
//4.- función

const iva = 1.19

let codProducto = parseInt(prompt("Ingresa el código del producto a comprar 🕶️\n1-Lentes de descanso, $25.990\n2-Lentes ópticos, $36.990\n3-Lentes de Sol, $29.990 \n4-Lentes ópticos de sol, $42.990 "))
let totalProducto = 0;

switch (codProducto) {
    case 1:
        totalProducto += 25990;
        alert("Agregaste Lentes de descanso a tu carrito, total de tu compra $"+total);
        break;
    case 2:
        totalProducto += 36990;
        alert("Agregaste Lentes ópticos a tu compra, total de tu compra $"+total);
        break;
    case 3:
        totalProducto += 29990;
        alert("Agregaste Lentes de sol a tu compra, total de tu compra $"+total);
        break;
    case 4:
        totalProducto += 42990;
        break;
        alert("Agregaste Lentes de ópticos de sol a tu compra, total de tu compra $"+total);
    default:
        alert("Código inválido, intenta nuevamente 🐶");
        break;

}
