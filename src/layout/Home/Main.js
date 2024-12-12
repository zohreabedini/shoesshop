import { El } from "../../utils/createelement";
import{ProductCard} from "../../components/product.card"
import { getProductList } from '../../api/products.api';
 export  function Homemain() {
    const home = El({
        element: 'div',
        className: 'w-screen  grid grid-cols-2 justify-items-center	 p-4 ',
      
    });
    getProductList().then(products=>{
        console.log(products);
        products.forEach(product => {
            const card=ProductCard(product)
            home.appendChild(card);

        });
 })
    return home;
}