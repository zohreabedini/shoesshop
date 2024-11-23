
import { El } from "../../utils/createelement";
export function Onboarding1() {
    const el = El({
        element: "div",
        children: [El({
            element: "div",
            className:"bg-cover w-screen h-[610px]",
            style:"background-image:url('shoes2.jfif')",
    
        }), El({
            element: "div",
            className: " w-screen h-[314px] flex flex-col	items-center justify-around	",
            children: [
                El({
                    element: "h2",
                    className: "text-2xl	font-semibold	w-80 h-24 text-center	",
                    innerText: "We provide high quality products just for you"
                }),
                El({
                    element: "div",
                    className: "flex",
                    children: [El({ element: "div", className: "w-8	h-1 bg-gray-950 mx-3" }),
                    El({ element: "div", className: "w-8	h-1 bg-zinc-700	mx-3" }),
                    El({ element: "div", className: "w-8	h-1 bg-zinc-700	mx-3" })]
                }),
                El({
                    element:"a",
                    innerText:"Next",
                    className:"w-96 h-12 bg-gray-950 text-white	rounded-full	",

                })

            ]
        })],
    })
    return el
}