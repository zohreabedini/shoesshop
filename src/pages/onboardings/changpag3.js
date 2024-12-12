import { Homepage1 } from "../Home/page1";
export function ChangPage3(){
    document.getElementById("app").innerHTML=""; 
    document.getElementById("app")?.appendChild(Homepage1()); 
    localStorage.setItem("user", "visited");
    console.log((localStorage.getItem("user"))); 
}
