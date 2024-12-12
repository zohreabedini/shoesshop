import './style.css'
import Navigo from 'navigo'
import { El } from './utils/createelement';
import { changePage } from './utils/changpage';
import {Loading} from "./pages/onboardings/loading";
import {Welcome} from "./pages/onboardings/wellcom";
import {Onboarding1} from "./pages/onboardings/onboarding1";
import { Onboarding2 } from "./pages/onboardings/onboarding2";
import{Onboarding3} from "./pages/onboardings/onboardin3"
import {Homepage1} from "./pages/Home/page1"
import{LoginUser} from "../src/pages/login/login"
import{Checkout} from "./pages/Checkout/Home"
import { productsBrand } from './pages/Home/products.brand';
export const  router = new Navigo("/");


router
.on("/" , ()=>changePage(Loading))
.on("/welcome" ,()=>changePage(Welcome))
.on("/products", ()=>changePage(Homepage1))
.on("/products/:brand" , (params)=>changePage(productsBrand,params))
.on("/products/:brand/:id" , (params)=>changePage(productDetail,params))


.resolve()
