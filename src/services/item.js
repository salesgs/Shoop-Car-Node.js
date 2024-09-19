/**
 * @fetures
 * Definir a estrutura dos itens
 * 
 * Criar item:
 * 
 * 
 */
async function createItem(name,price,quantity){
  return {
    name,
    price,
    quantity,
    subtotal:()=> price * quantity
  }
}
export default createItem;