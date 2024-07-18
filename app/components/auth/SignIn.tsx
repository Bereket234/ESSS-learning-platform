import Image from "next/image"
import InputForm from "./InputForm"

const SingIn = () => {
    return (
        <div className="grid grid-cols-2">
            {/* ESSS logo */}
            <div className="h-full bg-Primary w-1/4 relative">
                <Image className="mt-12 absolute" src= "/assets/images/signin.png" alt = "signIn" width={864} height={797}/>
                <Image src = "/assets/images/learning-yello.png" alt="logo" width={244} height={53}/>
            </div>

            {/* SignIn Form */}
            <div className="flex flex-col items-center">
                <h1 className="text-Primary font-SofiaProSemiBold ">Register on ESSS</h1>
                <button className="flex rounded-full bg-Secondary text-Primary p-4 justify-center font-SofiaProSemiBold">Sign in with Google </button>
                <h1 className="border-r-2 text-Primary border-Primary font-SofiaProSemiBold">or Sign in with email<span className="border-l-2 border-Primary"></span></h1>
    
                <InputForm/>
                <button className="flex rounded-full bg-Primary text-Secondary p-4 justify-center font-SofiaProSemiBold">Sign In </button>
                <h1 className="text-Primary p-4 ml-12 font-SofiaPro">Don't have an account? <span className="font-SofiaProBold text-Primary">Register Now!</span></h1>

            </div>

        </div>
    )
}

export default SingIn