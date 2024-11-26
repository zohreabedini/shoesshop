import { El } from "../utils/createelement"
import { router } from "../main"
export function link(elemnt, href){

    return El({
        element:"a",
        href:href,
        children:[elemnt],
        eventListener:[
            {
                event:"click",
                callback:(e)=>{
                    e.preventDefault()
                    if(e.ctrlKey)
                        window.open(href)
                    else router.navigate(href)
                }
            }
    ]})
}