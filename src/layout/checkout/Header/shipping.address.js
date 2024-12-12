import {El} from "../../../utils/createelement"
export function ShippingAddress(){
    const elem=El({
        element:"div",
        children:[El({
            element:"h2",
            innerText:"Order List",
            className:"text-xl	font-semibold	"
        })]
    })
    return elem
}