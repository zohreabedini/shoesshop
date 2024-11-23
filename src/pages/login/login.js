import { El } from "../../utils/createelement";
export function LoginUser() {
    const form = El({
        element: "div", //فرم  ورود
        className: "",
        children: [
            El({ element: "img", src: "logo.jpg", className: "size-14 rounded-full mt-36 ml-48" }),
            El({
                element: "h1",
                innerText: "Login to Your Account",
                className: "text-4xl	font-semibold ml-10 mt-72 mb-7	"
            }),
            El({  //ورودی ایمیل
                element: "div", 
                className: "flex flex-row  items-center	 m-4  h-[27px] 	 ",
                children: [
                    El({
                        element: "img",
                        src: "icons/mail.png",
                        className: "size-12 opacity-50	",
                    }),
                    El({  //ورودی پسوورد
                        element: "input", 
                        type: "password",
                        placeholder: "Email",
                        className: "w-80 outline-black		 "

                    })
                ]
            }),
            El({
                element: "div",
                className: "flex flex-row  items-center	 m-4  h-[27px] 	 ",
                children: [
                    El({
                        element: "img",
                        src: "icons/lock.png ",
                        className: "size-12 opacity-50	",
                    }),
                    El({
                        element: "input",
                        type: "email",
                        placeholder: "Password",
                        className: "w-80 outline-black		 "

                    }),
                    El({
                        element: "img",
                        src: "icons/seepass1.png",
                        className: " size-7 opacity-50",
                    })

                ]
            }),
            El({
                element: "div", //یاداوری رمز
                className: "flex flex-row	items-center ml-40	 ",
                children: [
                    El({
                        element: "input",
                        className: "",
                        type: 'checkbox',
                    }),
                    El({
                        element: "label",
                        innerText: "Remember me"
                    })
                ]
            }),
            El({  //دکمه ی ثبت
                element:"input",
                className:"w-[380px] h-[47px] bg-black	rounded-full ml-7 mt-44 text-white	",
                type:"button",
                value:"Sing In"


            })

        ]
    })
    return form
}