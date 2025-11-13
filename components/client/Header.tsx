import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header
      className="flex my-6  border-[1px] justify-between items-center justify-self-center rounded-[10rem] backdrop-blur-[10px] font-mono py-2 px-6 space-x-6 w-[90%] fixed top-0 z-50 "
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.18)",
        borderColor: "rgba(69, 69, 69, 0.3)",
      }}
    >
      <Image
        src="/logo.png"
        alt="Logo"
        priority={true}
        width={35}
        height={35}
        className="h-auto w-auto justify-self-start "
      />
      <nav className="flex space-x-6 justify-self-end ">
        <Link
          href="/"
          className="opacity-100 hover:opacity-40  transition-all duration-300 "
        >
          Home
        </Link>
        <Link
          href="/about"
          className="opacity-100 hover:opacity-40 transition-all duration-300 "
        >
          About
        </Link>
        <Link
          href="/challenges"
          className="opacity-100 hover:opacity-40 transition-all duration-300 "
        >
          Challenges
        </Link>
      </nav>
    </header>
  );
}
export default Header;
