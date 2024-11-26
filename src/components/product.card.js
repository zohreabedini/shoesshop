 import{El} from "../utils/createelement"

 export function ProductCard(product){

    return El({element:"div",children:[
            El({element:"img",
                src:`${product.images}`  
                ,className:"size-32"}),
            El({element:"div",className:"flex", children:[
               El({element:"p",innerText:product.title}),
               El({element:"p", innerText:product.price}),
            ]})
        ]})
      
 }


 
 
    