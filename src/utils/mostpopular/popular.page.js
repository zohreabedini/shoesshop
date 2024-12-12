
import { El } from "../../utils/createelement";
import { router } from "../../main";
import { Mostpopularpage } from "./mostpopular";
export function popularproducts({ data, params }) {
    let mostpopular = El({ element: "h1", className: "text-3xl	m-2", children: [data.mostpopular] })

    const backbtn = El({ element: "img", src: "/icons/leftarrow.png", className: "size-10" })
    const list = El({
        element: 'div',
        children: [El({
            element: "div",
            className: "flex flex-row items-center",

            children: [backbtn, mostpopular]
        }), Mostpopularpage()]
    })
    return list
};

