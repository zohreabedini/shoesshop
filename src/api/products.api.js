export async function getProductList(){
    const response=await fetch('http://localhost:5174/Products');
    const data=await response.json();
    return data;

}