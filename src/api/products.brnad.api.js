import { getProductList } from "./products.api";
import { El } from "../utils/createelement";
import { ProductCard } from "../components/product.card";

 export function getbrandproducts(brand){
    
    const home=El({
element:"div",
className: 'w-screen  grid grid-cols-2 justify-items-center	 p-4 ',
});
getProductList().then(products=>{
    let shoeslist=products.filter(product=>product.brand==brand);           
console.log(shoeslist);
    console.log(products);
    shoeslist.forEach(product => {
        const card=ProductCard(product)
        home.appendChild(card);

    });
})
return home;
 }
 
