 import{El} from "../utils/createelement"
import { getproduct } from "../pages/Home/select.product"
 export function ProductCard(product){
   let id=product.id;
    return El({element:"div",
        eventListener:[{event:"click",callback:(event)=>{getproduct(id)}}],
        children:[
            El({element:"img",
                src:`${product.images}`  
                ,className:"size-32"}),
            El({element:"div",className:"flex", children:[
               El({element:"p",innerText:product.title}),
               El({element:"p", innerText:product.price}),
            ]})
        ]})
      
 }


 
 
    