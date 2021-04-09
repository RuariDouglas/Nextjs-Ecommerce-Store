import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/vercel.svg" alt="site logo" width={217} height={71} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <Link href="/categories">
        <a>Categories</a>
      </Link>
    </nav>
  );
};

export default Nav;
