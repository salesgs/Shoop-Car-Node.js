/**
 * @fetures
 * 
 * adicionar item.
 * deletar item.
 * remover um item.
 * incrementar quantidade de itens.
 * decrementar quantidade de intens.
 * calcular total de itens.
 * 
 */

// -> ✅ adicionar item no carrinho
async function addItem(userCart,item){
  userCart.push(item); //objeto adicionado no array
}

// -> ✅ calcular o total do carrinho
async function calculateTotal(userCart){
 const result =(userCart.reduce((total,item)=>total+item.subtotal(),0));
 console.log(`R$:${result} 💵`);
}

// -> ✅ deletar item no carrinho "diminuir quantidade"
async function deleteItem(userCart,name){
  const index =  userCart.findIndex((item)=>item.name === name);
  if(index!==-1){
    userCart.splice(index,1);
  }
}

// -> ✅ remover um item - diminui um item
async function removeItem(userCart,item){
  //1.encontrar o indice do item
  const indexFound =userCart.findIndex((p)=>p.name === item.name);
  
  //2.caso não encontre o item
  if(indexFound===-1){
    console.log("item não encontrado");
    return  ;
  }

  //3. item > 1 subtrair um item.
  if(userCart[indexFound].quantity>1){
    userCart[indexFound].quantity -=1;
    return;
  }
  //4.caso  item =1 deletar o item da lista.
  if(userCart[indexFound].quantity===1){
    userCart.splice(indexFound,1);
    return;
  }

}
// -> ✅ exibir lista de itens 
async function displayCart(userCart){
 console.log("Shopee cart list: 🛒");
 userCart.forEach((item,index) => {
  console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity} | subtotal =  ${item.subtotal()} `);
 });
}

/** 
 * @author: Gabriel Sales @BobleSort
 *  */
async function orderByPrice(list){
  /** */
  for(let i=0;i < list.length;i++){
    for(let j = 0; j < list.length - 1; j++){
     if(list[j].price > list[j+1].price){
       let swap = list[j];
       list[j] = list[j+1];
       list[j+1] = swap;
     }
    }   
   }
  for(let i=0;i<list.length;i++){
    console.log(`${list[i].name}`);
    console.log(`${list[i].price}`);
  }

}

export{ //exportação
  addItem,
  calculateTotal,
  deleteItem,
  removeItem,
  displayCart,
  orderByPrice
};
