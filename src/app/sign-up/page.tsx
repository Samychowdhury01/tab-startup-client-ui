import Image from "next/image";
import sideImg from "@/assets/side-img.png";
import { Metadata } from "next";
import SignUpComponent from "@/components/view/SignUpComponent/SignUpComponent";

export const metadata: Metadata = {
  title: "Tab Startup | sign up",
  description: "this the meta data of sign up page",
};

const SignUp = () => {
  return (
    <div className="auth-bg lg:h-screen flex flex-col lg:flex-row justify-center items-center lg:gap-20 md:p-20">
      <div className="flex-1 lg:ml-20">
        <Image src={sideImg} alt="sign side Image" priority className="w-full lg:w-[637px] h-full object-fill"/>
      </div>
      {/* signUp component */}
      <div className="flex-1 w-full">
        <SignUpComponent/>
      </div>
    </div>
  );
};

export default SignUp;
