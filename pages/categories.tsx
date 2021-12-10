import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { FunctionComponent } from "react";
import Navbar from "../components/navbar";

interface Props {}

const Categories: FunctionComponent<NextPage> = (props: Props) => {
  return (
    <>
      <Head>
        <title>ARC Blog | Lorem Ipsum.</title>
      </Head>

      <div className="bg-blue-light min-h-screen h-full">
        <header className="bg-dark w-full py-8 px-24">
          <Navbar />
        </header>

        <main className="bg-transparent w-full container mx-auto py-12">
          <div className="flex flex-col">
            <div className="text-left mb-6">
              <p className="font-inter text-dark text-4xl font-bold">
                All Categories
              </p>
            </div>
            <div>
              <ul className="list-disc">
                <li className="text-dark font-semibold text-lg">
                  <Link href="/category/programming">
                    <a>Programming</a>
                  </Link>
                </li>
                <li className="text-dark font-semibold text-lg">
                  <Link href="/category/programming">
                    <a>Programming</a>
                  </Link>
                </li>
                <li className="text-dark font-semibold text-lg">
                  <Link href="/category/programming">
                    <a>Programming</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Categories;
