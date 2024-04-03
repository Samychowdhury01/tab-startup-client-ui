import sideImg from "@/assets/side-img.png";
import Image from "next/image";

const AuthImgComponent = () => {
  return (
    <div>
      <Image
        src={sideImg}
        alt="sign side Image"
        priority
        className="w-full lg:w-[637px] h-full object-fill"
      />
    </div>
  );
};

export default AuthImgComponent;
