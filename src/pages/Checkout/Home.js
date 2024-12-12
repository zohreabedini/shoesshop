import {El} from "../../utils/createelement";
import{CheckoutHaeder} from "../../layout/checkout/Header/header";
import {ShippingAddress} from "../../layout/checkout/Header/shipping.address"
import {CheckoutFooter} from "../../layout/checkout/footer";
import {CheckoutMain} from "../../layout/checkout/main"
export function Checkout(){
   const home= El({
        element:"div",
        children:[CheckoutHaeder(),CheckoutMain(),CheckoutFooter()]
    })
    return home
}