import { Onboarding1 } from "../../pages/onboardings/onboarding1";
import { Onboarding2 } from "../../pages/onboardings/onboarding2";
export function ChangPage1(){
    document.getElementById("app").innerHTML=""; 
    document.getElementById("app")?.appendChild(Onboarding2()); 
    
}