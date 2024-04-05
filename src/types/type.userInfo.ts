import { JwtPayload } from "jwt-decode";

export type TUserInfo = {
    decoded :JwtPayload & {userId : string, email: string}
}
