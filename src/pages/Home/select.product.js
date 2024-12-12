import { El } from "../../utils/createelement";
import { getProductList } from "../../api/products.api";
import { ProductCard } from "../../components/product.card";
export function getproduct(id){
    getProductList().then(products=>{
        let shoe=products.find(product=>product.id==2);           
    console.log(shoe);
    console.log(shoe.id);
        console.log(products);
        shoe.forEach(product => {
            const card=ProductCard(product)
            home.appendChild(card);
    
        });
    })
}