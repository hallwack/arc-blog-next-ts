import type { NextComponentType } from "next";
import Link from "next/link";

interface Props {}

const Navbar: NextComponentType = (props: Props) => {
  return (
    <>
      <div className="flex flex-row justify-between container-page items-center">
        <Link href="/">
          <a className="font-inter uppercase font-bold text-4xl text-light">
            ARC Blog
          </a>
        </Link>
        <nav>
          <ul className="flex flex-row space-x-10 items-center">
            <li className="font-inter text-lg font-semibold uppercase hover:text-light-grey transition duration-500 text-light">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="font-inter text-lg font-semibold uppercase hover:text-light-grey transition duration-500 text-light">
              <Link href="/articles">
                <a>Articles</a>
              </Link>
            </li>
            <li className="font-inter text-lg font-semibold uppercase hover:text-light-grey transition duration-500 text-light">
              <Link href="/categories">
                <a>Categories</a>
              </Link>
            </li>
            <li className="font-inter text-lg font-semibold uppercase hover:text-light-grey transition duration-500 text-light">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="font-inter text-lg text-light underline hover:no-underline">
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
