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
    <div className="auth-bg h-screen flex flex-row justify-center items-center gap-20 p-20">
      <div className="flex-1 ml-20">
        <Image src={sideImg} alt="sign side Image" />
      </div>
      {/* signUp component */}
      <div className="flex-1">
        <SignUpComponent/>
      </div>
    </div>
  );
};

export default SignUp;
