import Link from "next/link";
export default function Home() {
  return (
    <div className="text-xl flex justify-center gap-6 my-8">
      <Link  href={"/login"} replace>Login</Link>
      <Link  href={"/dashboard"} replace>Dashboard</Link>
    </div>
  );
}
