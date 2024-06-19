import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-9 bg-red-300">
      <div className="text-3xl">
        Welcome to the landing page!
      </div>
      <br/>
      <Link href="/welcome" className="p-5 bg-red-200 inline-block">
        Welcome
      </Link>
    </div>
  );
}
  