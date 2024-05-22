import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.svg"

const Navbar = () => {
   return (
      <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link href="/">
            <Image src={logo} alt="Eventry" className="h-[45px]" />
          </Link>
        </div>
  
        <ul className="flex gap-4 text-[#9C9C9C]">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
   );
};

export default Navbar;