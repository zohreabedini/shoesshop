import {El} from "../../../utils/createelement";
import {ShippingAddress} from "./shipping.address"
export function CheckoutHaeder(){
const header=El({
element:"hader",
className:"",
children:[El({
    element:"nav",
    className:"flex flex-row items-center justify-between	",
    children:[El({        
        element:"div",
        className:"flex flex-row items-center	m-5",
        children:[El({element:"img",src:"/icons/leftarrow.png",className:"size-12 mx-2"}),
            El({element:"h1",innerText:"Checkout",className:"text-3xl	font-semibold	"})]
    }),
    El({
        element:"img",
        src:"icons/more.png",
        className:"size-12 mx-3",
    })

    ]}),
El({
    element:"div",  //انتخاب ادرس
    className:" ml-5",
    children:[El({
        element:"h2",
        innerText:"Shipping Address",
        className:"text-xl	font-semibold	m-5"
    }),El({element:"div", className:"flex", children:[ 
        El({element:"img",
        src:"icons/edit.png",
        className:"size-12"
    }),ShippingAddress()]
})]
})]
})
return header
}