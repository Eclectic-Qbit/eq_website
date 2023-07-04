import UserRouter from "@/components/specific/user/UserRouter";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export default async function UserPage() {
  const cookieList = cookies();
  const res = await getData(cookieList.get("token").value);
  return (
    res &&
    res.user && (
      <div className="min-h-screen">
        <UserRouter userInfo={res.user[0]} />
      </div>
    )
  );
}
async function getData(token) {
  const { id } = jwt.decode(token);
  const url = `${process.env.NEXT_PUBLIC_API_ROUTE}users/${id}`;
  const res = await fetch(url, {
    next: { revalidate: 60 },
    headers: {
      Authorization: token,
    },
  });
  if (res.status === 200) {
    const json = await res.json();
    return json;
  } else {
    console.error("Could not request user data", res.status);
    return null;
  }
}
