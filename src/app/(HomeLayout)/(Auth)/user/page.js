import ChosePFP from "@/components/specific/user/ChosePFP";
import UserRouter from "@/components/specific/user/UserRouter";
import { H3 } from "@/components/text/Headers";
import { P1 } from "@/components/text/Paragraphs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { cache } from "react";

export default async function UserPage(props) {
  const cookieList = cookies();
  const res = await getData(cookieList.get("token").value);
  console.log(res);
  return (
    <div className="min-h-screen">
      <UserRouter userInfo={res.users[0]} />
    </div>
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
