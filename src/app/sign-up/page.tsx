import { Metadata } from "next";
import SignUpComponent from "@/components/view/SignUpComponent/SignUpComponent";
import AuthImgComponent from "@/components/view/AuthImgComponent/AuthImgComponent";
export const metadata: Metadata = {
  title: "Tab Startup | sign up",
  description: "this the meta data of sign up page",
};

const SignUp = () => {
  return (
    <main className="auth-bg lg:h-screen flex flex-col lg:flex-row justify-center items-center lg:gap-20 md:p-20">
      <div className="flex-1 lg:ml-20">
        <AuthImgComponent />
      </div>
      {/* signUp component */}
      <div className="flex-1 w-full">
        <SignUpComponent />
      </div>
    </main>
  );
};

export default SignUp;
