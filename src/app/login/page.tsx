import LoginComponent from "@/components/view/LoginComponent/LoginComponent";
import AuthImgComponent from "@/components/view/AuthImgComponent/AuthImgComponent"
import { Metadata } from "next";
import { getToken } from "@/utils/getToken";



export const metadata: Metadata = {
  title: "Tab Startup | Login",
  description: "this the meta data of login page",
};

const login = () => {
  return (
    <div className="auth-bg lg:h-screen flex flex-col lg:flex-row justify-center items-center lg:gap-20 md:p-20">
      <div className="flex-1 lg:ml-20">
       <AuthImgComponent/>
      </div>
      {/* Login component */}
      <div className="flex-1 w-full">
        <LoginComponent />
      </div>
    </div>
  );
};

export default login;
