import { cookies } from "next/headers";

export default async function SSRPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "no-token";

  const data = await fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (res) => res.json()
  );

  return (
    <>
      <p>Cookie token: {token}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
