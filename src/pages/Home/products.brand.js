
import { El } from "../../utils/createelement";
import { router } from "../../main";
import { getbrandproducts } from "../../api/products.brnad.api";
export function productsBrand({ data, params }) {
    let brand = El({ element: "h1", className: "text-3xl	m-2", children: [data.brand] })

    switch (data.brand) {
        case "adidas":
            brand = "adidas";
            break;
        case "converse":
            brand = "converse";
            break;
        case "puma":
            brand = "puma";
            break;
        case "nike":
            brand = "nike";
            break;
        case "reebok":
            brand = "reebok";
            break;
        case "newbalance":
            brand = "newbalance";
            break;
        case "asics":
            brand = "asics";
            break;
    }




    const backbtn = El({ element: "img", src: "/icons/leftarrow.png", className: "size-10" })
    const list = El({
        element: 'div',
        children: [El({
            element: "div",
            className: "flex flex-row items-center",

            children: [backbtn, brand]
        }), getbrandproducts(brand)]
    })
    return list
};

