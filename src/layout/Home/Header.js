import { El } from "../../utils/createelement";
export function Homeheader1() {
    const header = El({
        element: "header",
        className: "p-4",
        children: [
            El({
                element: "div",
                className: "flex justify-between	",
                children: [El({
                    element: "img",
                    src: "icons/bell.png",
                    className: "size-12",
                }), El({
                    element: "img",
                    className: "size-10",
                    src: "icons/heart.png"
                })]
            }), El({
                element: "div",
                className: " flex items-center ml-20 ",
                children: [El({
                    element: "img",
                    src: "icons/magnifying-black.png",
                    className: "size-7 opacity-65	"
                }),
                El({
                    element: "input",
                    placeholder: "Search",
                    className: "w-60 h-5  outline-none	  ",
                })]
            }),
            El({
                element: "div",
                className: "mt-5 mx-6 grid	grid-cols-4	grid-rows-2	",
                children: [El({
                    element: "div",
                    className:'flex flex-col items-center	',
                    children: [El({
                        element: 'a', className: "bg-neutral-300	size-14 rounded-full  text-end	",
                        children: [El({ element: 'img', className: 'size-8 ml-3 mt-3 ', src: 'icons/nike.png ' })]
                    }),
                    El({ element: "p", className: "text-sm	", innerText: 'Nike' })]
                }),

                El({
                    element: "div",
                    className:'flex flex-col items-center	',
                    children: [El({
                        element: 'a', className: "bg-neutral-300	size-14 rounded-full  text-end	",
                        children: [El({ element: 'img', className: 'size-8 ml-3 mt-3', src: 'icons/adidas.png' })]
                    }),
                    El({ element: "p", className: "text-sm	", innerText: 'Adidas' })]
                }),

                El({
                    element: "div",
                    className:'flex flex-col items-center	',
                    children: [El({
                        element: 'a', className: "bg-neutral-300	size-14 rounded-full  text-end	",
                        children: [El({ element: 'img', className: 'size-8 ml-3 mt-3', src: './icons/puma.png' })]
                    }),
                    El({ element: "p", className: "text-sm	", innerText: 'Puma' })]
                }),

                El({
                    element: "div",
                    className:'flex flex-col items-center	',
                    children: [El({
                        element: 'a', className: "bg-neutral-300	size-14 rounded-full  text-end	",
                        children: [El({ element: 'img', className: 'size-8 ml-3 mt-3', src: './icons/asics.png' })]
                    }),
                    El({ element: "p", className: "text-sm	", innerText: 'Asics' })]
                }),

                El({
                    element: "div",
                    className:'flex flex-col items-center	',
                    children: [El({
                        element: 'a', className: "bg-neutral-300	size-14 rounded-full  text-end	",
                        children: [El({ element: 'img', className: 'size-8 ml-3 mt-3', src: './icons/reebok.png' })]
                    }),
                    El({ element: "p", className: "text-sm	", innerText: 'Reebok' })]
                }),

                El({
                    element: "div",
                    className:'flex flex-col items-center	',
                    children: [El({
                        element: 'a', className: "bg-neutral-300	size-14 rounded-full  text-end	",
                        children: [El({ element: 'img', className: 'size-12 ml-1 mt-1', src: './icons/newbalenc.png' })]
                    }),
                    El({ element: "p", className: "text-sm	", innerText: 'New Ba..' })]
                }),

                El({
                    element: "div",
                    className:'flex flex-col items-center	',
                    children: [El({
                        element: 'a', className: "bg-neutral-300	size-14 rounded-full  text-end	",
                        children: [El({ element: 'img', className: 'size-8 ml-3 mt-3', src: './icons/convers.png' })]
                    }),
                    El({ element: "p", className: "text-sm	", innerText: 'Converse' })]
                }),

                El({
                    element: "div",
                    className:'flex flex-col items-center	',
                    children: [El({
                        element: 'a', className: "bg-neutral-300	size-14 rounded-full  text-end	",
                        children: [El({ element: 'img', className: 'size-8 ml-3 mt-3', src: './icons/more.png' })]
                    }),
                    El({ element: "p", classNamzze: "text-sm	", innerText: 'More' })]
                }),

                ]
            }),
            El({
                element:'div',
                className:'flex items-center	justify-between	 m-6',
                children:[
                    El({element:"h2",className:"text-base	font-semibold	" ,innerText:"Most Popular "}),
            El({
                element:"p",className:'font-semibold',innerText:'See All'})
                ]
            }),
             El({
                element:'div',
                className:'flex m-4 w-[380px] overflow-scroll	',
                children:[
                    El({
                        element:'a',
                        className:' w-16 h-10 bg-slate-800	 rounded-3xl  text-center p-2 font-semibold	text-white	',
                        innerText:'All'
                    }),
                    El({
                        element:'a',
                        className:' w-20 h-10 border border-2 border-slate-800	 rounded-3xl  text-center p-2 mx-2 font-semibold		',
                        innerText:'Nike'
                    }),
                    El({
                        element:'a',
                        className:' w-24 h-10 border border-2 border-slate-800	 rounded-3xl  text-center p-2 mx-2 font-semibold		',
                        innerText:'Adidas'
                    }),
                    El({
                        element:'a',
                        className:' w-20 h-10 border border-2 border-slate-800	 rounded-3xl  text-center p-2 mx-2 font-semibold		',
                        innerText:'Puma'
                    }),
                    El({
                        element:'a',
                        className:' w-20 h-10 border border-2 border-slate-800	 rounded-3xl  text-center p-2 mx-2 font-semibold		',
                        innerText:'Asics'
                    }),
                    El({
                        element:'a',
                        className:' w-20 h-10 border border-2 border-slate-800	 rounded-3xl  text-center p-2 mx-2 font-semibold		',
                        innerText:'Reebok'
                    }),
                    El({
                        element:'a',
                        className:' w-28 h-10 border border-2 border-slate-800	 rounded-3xl  text-center p-2 mx-2 font-semibold		',
                        innerText:'NewBa...'
                    }),
                    El({
                        element:'a',
                        className:' w-28 h-10 border border-2 border-slate-800	 rounded-3xl  text-center p-2 mx-2 font-semibold		',
                        innerText:'Convers'
                    }),
                ]


            }),
        ]
    })
    return header

}
