/**
 * @main 
 * arquivo principal que irá repassar os valores para os módulos
 */

//back-end servidor
import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";


const myCart=[]; //armazena compras
const myWhishList=[]; //armazena compras

console.log("Welcome to the your Shoppe Cart !");

//retorna um objeto
const item1 = await createItem("hotwheels ferrari",20.99,1);
const item2  = await createItem("hotwheels lamborghini",39.99,3);
const item3 = await createItem("Eragon Miniatura",11.99,1) ;

await cartService.addItem(myCart,item1);
await cartService.addItem(myCart,item2);
await cartService.addItem(myCart,item3);
await cartService.orderByPrice(myCart);
