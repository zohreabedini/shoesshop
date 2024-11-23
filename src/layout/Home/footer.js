import { El } from "../../utils/createelement";
export function Homefooter(){
   const footer=El({
    element:'div',
    className:'fixed  bottom-0 bg-white	h-18 w-screen p-4',
    children:[El({
        element:'div',
        className:'flex flex-row justify-around	',
        children:[
            El({element:"a",className:"", children:[El
                ({element:"img",className:"size-8 opacity-70	",src:"icons/home.png"}),
            El({element:"p",innerText:"Home"})]}),

            El({element:"a",className:"", children:[El
                ({element:"img",className:"size-8 opacity-70	",src:"icons/bag1.jpg"}),
            El({element:"p",innerText:"cart"})]}),

            El({element:"a",className:"", children:[El
                ({element:"img",className:"size-8 opacity-70  ",src:"icons/cart.png"}),
            El({element:"p",innerText:"Orders"})]}),

            El({element:"a",className:"", children:[El
                ({element:"img",className:"size-8 opacity-70  ",src:"icons/wallet.png"}),
            El({element:"p",innerText:"Wallet"})]}),

            El({element:"a",className:"", children:[El
                ({element:"img",className:"size-8 opacity-70 rounded-full ",src:"icons/body1.jpg"}),
            El({element:"p",innerText:"Profile"})]}),
            

        ]
    })

    ]
   })


    return footer;
}