import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src="/logo.png" height="60" width="60" alt="WanderTrove logo" />
      <span className="text-xl font-semibold text-primary-100">
        WanderTrove
      </span>
    </Link>
  );
}

export default Logo;
