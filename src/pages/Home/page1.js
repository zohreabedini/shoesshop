import {El} from "../../utils/createelement"
import {Homeheader1} from '../../layout/Home/Header'
import {Homefooter} from '../../layout/Home/footer'
import{Homemain} from '../../layout/Home/Main'
export function Homepage1(){
    const page=El({
        element:"div",
        children:[Homeheader1(),Homemain(),Homefooter()]
    })
    return page
}
