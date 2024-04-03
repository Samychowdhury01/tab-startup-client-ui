import LoginComponent from "@/components/view/LoginComponent/LoginComponent";
import sideImg from  '@/assets/side-img.png'
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tab Startup | Login",
  description: "this the meta data of login page",
};

export default function Home() {
  return (
    <main className="auth-bg lg:h-screen flex flex-col lg:flex-row justify-center items-center lg:gap-20 md:p-20">
    <div className="flex-1 lg:ml-20">
      <Image src={sideImg} alt="sign side Image" priority className="w-full lg:w-[637px] h-full object-fill"/>
    </div>
    {/* signUp component */}
    <div className="flex-1 w-full">
      <LoginComponent/>
    </div>
  </main>
  );
}
