import UserRouter from "@/components/specific/troopa/UserRouter";
import { getUserData } from "@/helpers/userHelper";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export default async function UserPage() {
  const cookieList = cookies();
  const { id } = jwt.decode(cookieList.get("token").value);
  const res = await getUserData(
    `${process.env.NEXT_PUBLIC_API_ROUTE}users/${id}?opt=true`,
    {
      Authorization: cookieList.get("token").value,
    }
  );
  console.log(res);
  return (
    res && (
      <div className="min-h-screen">
        <UserRouter userInfo={res} />
      </div>
    )
  );
}
