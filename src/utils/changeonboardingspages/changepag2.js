import { Onboarding3 } from "../../pages/onboardings/onboardin3";
export function ChangPage2(){
    document.getElementById("app").innerHTML=""; 
    document.getElementById("app")?.appendChild(Onboarding3()); 
}