import { El } from "../../utils/createelement";
export function Loading() {
    const text = El({
        element: "div",
        className: "flex flex-col items-center	mt-96",
        children: [El(
            {
                element: "div",
                children: [El({
                    element: "img",
                    src: "../../logo.jpg",
                    className: "size-10 rounded-full mr-3"
                }),
                El
                    ({
                        element: "p",
                        innerText: 'Shoea',
                        className: 'text-5xl font-bold'
                    }),
                ],
                className: "flex items-end	 "
            }),El({
element:"img",
src:"../../loading.png",
className:"size-14 mt-56 animate-spin",

            })]
    })


    return text;
}