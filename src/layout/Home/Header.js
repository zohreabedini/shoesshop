import { El } from "../../utils/createelement";
import { link } from "../../components/link";
import { getbrandproducts } from "../../api/products.brnad.api";
import { Mostpopularpage } from "../../utils/mostpopular/mostpopular";
const nikeproducts=El({
    element: "a",
    className:'flex flex-col items-center	',
    children: [El({
        element: 'div', className: "bg-neutral-300	size-14 rounded-full  text-end	" ,src:"",
        children: [El({ element: 'img', className: 'size-8 ml-3 mt-3 ', src: 'icons/nike.png ' })]
    }),
    El({ element: "p", className: "text-sm	", innerText: 'Nike' })]
});

const adidasproduct= El({
    element: "div",
    className:'flex flex-col items-center	',
    children: [El({
        element: 'a', className: "bg-neutral-300	size-14 rounded-full  text-end	",
        children: [El({ element: 'img', className: 'size-8 ml-3 mt-3', src: 'icons/adidas.png' })]
    }),
    El({ element: "p", className: "text-sm	", innerText: 'Adidas' })]
});

const pumaproducts= El({
    element: "div",
    className:'flex flex-col items-center	',
    children: [El({
        element: 'a', className: "bg-neutral-300	size-14 rounded-full  text-end	",
        children: [El({ element: 'img', className: 'size-8 ml-3 mt-3', src: './icons/puma.png' })]
    }),
    El({ element: "p", className: "text-sm	", innerText: 'Puma' })]
});

const asicsproducs=  El({
    element: "div",
    className:'flex flex-col items-center	',
    children: [El({
        element: 'a', className: "bg-neutral-300	size-14 rounded-full  text-end	",
        children: [El({ element: 'img', className: 'size-8 ml-3 mt-3', src: './icons/asics.png' })]
    }),
    El({ element: "p", className: "text-sm	", innerText: 'Asics' })]
});

const reebokproducts= El({
    element: "div",
    className:'flex flex-col items-center	',
    children: [El({
        element: 'a', className: "bg-neutral-300	size-14 rounded-full  text-end	",
        children: [El({ element: 'img', className: 'size-8 ml-3 mt-3', src: './icons/reebok.png' })]
    }),
    El({ element: "p", className: "text-sm	", innerText: 'Reebok' })]
});
const newbalenc= El({
    element: "div",
    className:'flex flex-col items-center	',
    children: [El({
        element: 'a', className: "bg-neutral-300	size-14 rounded-full  text-end	",
        children: [El({ element: 'img', className: 'size-12 ml-1 mt-1', src: './icons/newbalenc.png' })]
    }),
    El({ element: "p", className: "text-sm	", innerText: 'New Ba..' })]
});
const conversproducts= El({
    element: "div",
    className:'flex flex-col items-center	',
    children: [El({
        element: 'a', className: "bg-neutral-300	size-14 rounded-full  text-end	",
        children: [El({ element: 'img', className: 'size-8 ml-3 mt-3', src: './icons/convers.png' })]
    }),
    El({ element: "p", className: "text-sm	", innerText: 'Converse' })]
});
 const moreproducts=  El({
    element: "div",
    className:'flex flex-col items-center	',
    children: [El({
        element: 'a', className: "bg-neutral-300	size-14 rounded-full  text-end	",
        children: [El({ element: 'img', className: 'size-8 ml-3 mt-3', src: './icons/more.png' })]
    }),
    El({ element: "p", classNamzze: "text-sm	", innerText: 'More' })]
});
const brandslinks=  El({     //لینک برندها
    element: "div",
    className: "mt-5 mx-6 grid	grid-cols-4	grid-rows-2	",
    children: [link(nikeproducts,"/products/nike"),
        link(adidasproduct,"/products/adidas"),
        link(pumaproducts,"/products/puma"),
        link(asicsproducs,"/products/asics"),
        link(reebokproducts,"/products/reebok"),
        link(newbalenc,"/products/newbalenc"),
        link(conversproducts,"/products/convers"),
        link(moreproducts,"/products/more"),
    ]
});
const Allbtn= El({
    element:'a',
    className:' w-16 h-10 bg-slate-800	 rounded-3xl  text-center p-2 font-semibold	text-white	',
    innerText:'All',
    eventListener:[{event:"click",callback:(event)=>{getbrandproducts(brand)}}]

})
const nikebtn=  El({
    element:'a',
    className:' w-20 h-10 border border-2 border-slate-800	 rounded-3xl  text-center p-2 mx-2 font-semibold		',
    innerText:'Nike',
    eventListener:[{event:"click",callback:(event)=>{getbrandproducts()}}]

});
const Adidasbtn= El({
    element:'a',
    className:' w-24 h-10 border border-2 border-slate-800	 rounded-3xl  text-center p-2 mx-2 font-semibold		',
    innerText:'Adidas',
    eventListener:[{event:"click",callback:(event)=>{getbrandproducts()}}]

});
const Pumabtn= El({
    element:'a',
    className:' w-20 h-10 border border-2 border-slate-800	 rounded-3xl  text-center p-2 mx-2 font-semibold		',
    innerText:'Puma',
    eventListener:[{event:"click",callback:(event)=>{getbrandproducts()}}]

})
const asicsbtn=    El({
    element:'a',
    className:' w-20 h-10 border border-2 border-slate-800	 rounded-3xl  text-center p-2 mx-2 font-semibold		',
    innerText:'Asics',
    eventListener:[{event:"click",callback:(event)=>{getbrandproducts()}}]

})
const reebokbtn= El({
    element:'a',
    className:' w-20 h-10 border border-2 border-slate-800	 rounded-3xl  text-center p-2 mx-2 font-semibold		',
    innerText:'Reebok',
    eventListener:[{event:"click",callback:(event)=>{getbrandproducts()}}]

})
const newbalance= El({
    element:'a',
    className:' w-28 h-10 border border-2 border-slate-800	 rounded-3xl  text-center p-2 mx-2 font-semibold		',
    innerText:'NewBa...',
    eventListener:[{event:"click",callback:(event)=>{getbrandproducts()}}]

})
const conversbtn= El({
    element:'a',
    className:' w-28 h-10 border border-2 border-slate-800	 rounded-3xl  text-center p-2 mx-2 font-semibold		',
    innerText:'Convers',
    eventListener:[{event:"click",callback:(event)=>{getbrandproducts()}}]

})

const mostpopularlink= El({element:"h2",className:"text-base	font-semibold	" ,innerText:"Most Popular ",
    eventListener:[{event:"click",callback:(event)=>{Mostpopularpage()}}]
})

export function Homeheader1() {
    const header = El({
        element: "header",
        className: "p-4",
        children: [
            El({   //بخش نوبار
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
            }), El({    //بخش سرچ
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
          brandslinks,
            El({
                element:'div',
                className:'flex items-center	justify-between	 m-6',
                children:[ link(mostpopularlink,"/products/mostpopular"),
            El({
                element:"p",className:'font-semibold',innerText:'See All'})
                ]
            }),
             El({
                element:'div',
                className:'flex m-4 w-[380px] overflow-scroll	',
                children:[Allbtn,nikebtn,Adidasbtn,Pumabtn,asicsbtn,reebokbtn,newbalance,conversbtn]


            }),
        ]
    })
    return header

}
