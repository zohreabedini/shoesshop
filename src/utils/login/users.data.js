const user = {
    email: "negarabedini@gmail.com",
    password: 204488
}
export function Userdata() {
    try {
        if (email.value == user.email && password.value == user.password) {
            console.log(email.value);
            console.log(password.value);
        }

    }
    catch (err) {
        console.log("Erorr");
    }


}
