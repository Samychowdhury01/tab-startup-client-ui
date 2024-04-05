"use client";
import React from "react";
import { UserContext } from "../context";
import { useEffect } from "react";
import { getToken } from "@/utils/getToken";
import { decodedToken } from "@/utils/jwt";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { TUserInfo } from "@/types/type.userInfo";
import { JwtPayload } from "jwt-decode";
const UserProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const token = getToken("token");
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      // Token is missing, show an error toast
      Swal.fire({
        title: "Error",
        text: "Authentication failed. Please log in.",
        icon: "success",
      });
      // Redirect the user to the home page
      router.push("/login");
    }
    return;
  }, [token, router]);

  const decoded = decodedToken(token as string);

  const userInfo: TUserInfo = {
    decoded,
  };
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
