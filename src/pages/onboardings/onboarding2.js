
import { El } from "../../utils/createelement";
import{Onboarding3} from "../onboardings/onboardin3"
import {ChangPage2} from "../../utils/changeonboardingspages/changepag2.js"
export function Onboarding2() {
    const el = El({
        element: "div",
        children: [El({
            element: "div",
            className:"bg-cover w-screen h-[610px]",
            style:"background-image:url('shoes3.jfif')",
                }), El({
            element: "div",
            className: " w-screen h-[314px] flex flex-col	items-center justify-around	",
            children: [
                El({
                    element: "h2",
                    className: "text-2xl	font-semibold	w-80 h-24 text-center	",
                    innerText: "Your satisfaction is our number one periority"
                }),
                El({
                    element: "div",
                    className: "flex",
                    children: [El({ element: "div", className: "w-8	h-1  bg-zinc-700 mx-3" }),
                    El({ element: "div", className: "w-8	h-1 bg-gray-950	mx-3" }),
                    El({ element: "div", className: "w-8	h-1 bg-zinc-700	mx-3" })]
                }),
                El({
                    element:"button",
                    innerText:"Next",
                    className:"w-96 h-12 bg-gray-950 text-white	rounded-full	",
                    eventListener:[
                        {event:"click",callback:(event)=>{ ChangPage2()}}
                    ]
                })

            ]
        })],
    })
    return el
}
