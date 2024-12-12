import { El } from "../../utils/createelement";
export function CheckoutFooter(){
    const footer=El({
        element:"footer",
        className:"bg-slate-300",
        children:[El({
            element:"div", //انتخاب روش ارسال 
            className:"",
            children:[El({element:"h2",innerText:"Choose Shipping"}),
                El({element:"div",
                    className:"flex flex-row items-center	gap-5 my-4 p-2 border-2 border-y-slate-400",children:[
                    El({element:"img",className:"size-10",src:"icons/express.png"}),
                    El({element:"p",className:"font-semibold",innerText:"Choose Shipping Type"}),
                    El({element:"img",className:"size-10 ml-30",src:"icons/rightarrow.png"}),

                ]})
            ]

        })]
    })
    return footer
}