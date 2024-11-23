

import { El } from "../../utils/createelement";
export function Welcome(){
    const text=El({
        element:"div",
        className:"bg-cover ",
        style:"background-image:url('shoes.jfif')",
        children:[
            El({
          element:"div",
          className:"w-screen h-screen bg-gradient-to-t from-neutral-800	  to-bg-transparent pt-[629px] pl-8 text-white	",
          children:[El({
            element:"h3",
            innerText:" Welcome to 👋 ",
            className:"text-4xl	font-semibold	",
            children:[El({element:"p",
            })]
          }),
        El({
            element:"h1",
            className:"font-bold text-7xl my-8",
            innerText:"Shoea",
        }),
    El({

        element:"p",
        className:"font-semibold leading[22px] w-[364px]",
        innerText:"The best sneakers & shoes e-commerse app of the century for your fashion needs!",
    })]
        })]
    })
    return text;
}