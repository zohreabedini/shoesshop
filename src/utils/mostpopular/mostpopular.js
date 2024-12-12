import { El } from "../createelement";
import { getProductList } from "../../api/products.api";
import { ProductCard } from "../../components/product.card";

export function Mostpopularpage(mostpopular){
    
    const home=El({
element:"div",
className: 'w-screen  grid grid-cols-2 justify-items-center	 p-4 ',
});
getProductList().then(products=>{
    let shoeslist=products.filter(product=>product.mostpopular=="true");           
console.log(shoeslist);
    shoeslist.forEach(product => {
        const card=ProductCard(product)
        home.appendChild(card);

    });
})
return home;
 }